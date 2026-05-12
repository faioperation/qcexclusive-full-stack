import { Worker, Job } from "bullmq";
import { redisConnection } from "../db_connection/redis";
import { prisma } from "../db_connection/prisma";
import { sendEmail } from "../utils/sendEmail";
import { 
  AI_REPLY_QUEUE_NAME, 
  type AIReplyJobPayload 
} from "./aiReply.job";

const db = prisma as any;

export const aiReplyWorker = new Worker<AIReplyJobPayload>(
  AI_REPLY_QUEUE_NAME,
  async (job: Job<AIReplyJobPayload, void, string>) => {
    const { messageId, leadId, campaignId, leadName, leadEmail, aiGeneratedReply, classification } = job.data;
    const bullJobId = String(job.id ?? "");

    const logCtx = `[AIReply] job=${bullJobId} message=${messageId} lead=${leadId}`;

    try {
      // 1. Check if AI reply should be sent
      if (!shouldSendAIReply(classification, aiGeneratedReply)) {
        console.log(`${logCtx} — skipped (classification not suitable for auto-reply)`);
        await markAIReplyAsSkipped(messageId, 'Not suitable for auto-reply');
        return;
      }

      // 2. Check cooldown and limits
      const cooldownCheck = await checkAIReplyCooldown(leadId);
      if (!cooldownCheck.canSend) {
        console.log(`${logCtx} — skipped (${cooldownCheck.reason})`);
        await markAIReplyAsSkipped(messageId, cooldownCheck.reason);
        return;
      }

      // 3. Check daily AI reply limit
      const dailyLimitCheck = await checkDailyAIReplyLimit(leadId);
      if (!dailyLimitCheck.canSend) {
        console.log(`${logCtx} — skipped (${dailyLimitCheck.reason})`);
        await markAIReplyAsSkipped(messageId, dailyLimitCheck.reason);
        return;
      }

      // 4. Check for recent AI replies to prevent loops
      const recentReplyCheck = await checkRecentAIReplies(leadId);
      if (!recentReplyCheck.canSend) {
        console.log(`${logCtx} — skipped (${recentReplyCheck.reason})`);
        await markAIReplyAsSkipped(messageId, recentReplyCheck.reason);
        return;
      }

      // 5. Send AI reply
      const subject = campaignId ? `Re: Your inquiry` : 'Re: Your message';
      const { messageId: newMessageId } = await sendEmail({
        to: leadEmail,
        subject,
        tempName: "outreach",
        tempData: { leadName, body: aiGeneratedReply },
        idempotencyKey: `ai-reply-${messageId}-${Date.now()}`,
      });

      // 6. Record AI reply
      await db.outreachMessage.create({
        data: {
          leadId,
          campaignId: campaignId || null,
          subject,
          body: aiGeneratedReply,
          type: "Email",
          senderType: "Admin",
          sentAt: new Date(),
          providerMessageId: newMessageId,
          aiResponseStatus: "Sent",
          aiResponseSentAt: new Date(),
          isAIGenerated: true,
        },
      });

      // 7. Update original message
      await db.outreachMessage.update({
        where: { id: messageId },
        data: { 
          aiResponseStatus: "Sent",
          aiResponseSentAt: new Date(),
        },
      });

      // 8. Update lead status if needed
      await updateLeadStatusForAIReply(leadId, classification);

      console.log(`${logCtx} — sent (resendId=${newMessageId})`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`${logCtx} — failed: ${msg}`);
      
      // Mark as failed but don't throw to avoid breaking queue
      await markAIReplyAsFailed(messageId, msg);
      throw err;
    }
  },
  {
    connection: redisConnection,
    concurrency: 2, // Allow 2 concurrent AI replies
    limiter: {
      max: 5, // Max 5 AI replies per minute
      duration: 60000, // Per minute
    },
  }
);

aiReplyWorker.on("completed", (job) => {
  console.log(`[AIReply] Worker completed job ${job.id}`);
});

aiReplyWorker.on("failed", (job, err) => {
  console.error(`[AIReply] Worker job ${job?.id} failed:`, err?.message);
});

export const gracefulShutdownAIReplyWorker = async () => {
  console.log("[AIReply] Closing AI reply worker...");
  await aiReplyWorker.close();
  console.log("[AIReply] AI reply worker closed.");
};

// Helper functions
function shouldSendAIReply(classification: string, aiReply: string): boolean {
  if (!aiReply?.trim()) return false;  
  const autoReplyEnabled = ["Interested", "PricingRequest", "MeetingRequest"];
  return autoReplyEnabled.includes(classification);
}

async function checkAIReplyCooldown(leadId: string): Promise<{ canSend: boolean; reason?: string }> {
  const lastAIReply = await db.outreachMessage.findFirst({
    where: {
      leadId,
      senderType: "Admin",
      isAIGenerated: true,
      aiResponseSentAt: {
        gte: new Date(Date.now() - 4 * 60 * 60 * 1000) // Last 4 hours
      }
    },
    orderBy: { aiResponseSentAt: "desc" }
  });

  if (lastAIReply) {
    return { 
      canSend: false, 
      reason: "AI reply cooldown active (4 hours)" 
    };
  }

  return { canSend: true };
}

async function checkDailyAIReplyLimit(leadId: string): Promise<{ canSend: boolean; reason?: string }> {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Start of day
  
  const dailyCount = await db.outreachMessage.count({
    where: {
      leadId,
      senderType: "Admin",
      isAIGenerated: true,
      aiResponseSentAt: {
        gte: today
      }
    }
  });

  if (dailyCount >= 3) { // Max 3 AI replies per day per lead
    return { 
      canSend: false, 
      reason: "Daily AI reply limit reached (3 per day)" 
    };
  }

  return { canSend: true };
}

async function checkRecentAIReplies(leadId: string): Promise<{ canSend: boolean; reason?: string }> {
  const recentAIReply = await db.outreachMessage.findFirst({
    where: {
      leadId,
      senderType: "Admin",
      isAIGenerated: true,
      aiResponseSentAt: {
        gte: new Date(Date.now() - 30 * 60 * 1000) // Last 30 minutes
      }
    },
    orderBy: { aiResponseSentAt: "desc" }
  });

  if (recentAIReply) {
    return { 
      canSend: false, 
      reason: "Recent AI reply detected (30 min cooldown)" 
    };
  }

  return { canSend: true };
}

async function updateLeadStatusForAIReply(leadId: string, classification: string): Promise<void> {
  // Only update status for positive classifications
  if (["Interested", "PricingRequest", "MeetingRequest"].includes(classification)) {
    await db.lead.update({
      where: { id: leadId },
      data: { status: "Interested" },
    });
  }
}

async function markAIReplyAsSkipped(messageId: string, reason: string): Promise<void> {
  await db.outreachMessage.update({
    where: { id: messageId },
    data: { 
      aiResponseStatus: "Skipped",
      aiResponseSentAt: new Date(),
    },
  });
}

async function markAIReplyAsFailed(messageId: string, error: string): Promise<void> {
  await db.outreachMessage.update({
    where: { id: messageId },
    data: { 
      aiResponseStatus: "Failed",
      aiResponseSentAt: new Date(),
    },
  });
}
