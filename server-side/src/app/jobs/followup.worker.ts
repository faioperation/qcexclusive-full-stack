import { Worker, Job } from "bullmq";
import { redisConnection } from "../db_connection/redis";
import { prisma } from "../db_connection/prisma";
import { sendEmail } from "../utils/sendEmail";
import { parsePlaceholders } from "../utils/placeholderParser";
import {
  FOLLOW_UP_QUEUE_NAME,
  DEFAULT_FOLLOW_UP_TEMPLATE,
} from "./followup.constants";
import type { FollowUpJobPayload } from "./followup.job";
import {
  EMessageSender,
  EOutreachType,
  EReplyStatus,
} from "../../../generated/prisma";

const db = prisma as any;

async function clearPendingFollowUpSlot(
  leadId: string,
  expectedJobId: string | undefined
): Promise<void> {
  if (!expectedJobId) return;
  await db.lead.updateMany({
    where: { id: leadId, pendingFollowUpJobId: expectedJobId },
    data: { pendingFollowUpJobId: null },
  });
}

async function leadHasRepliedAfter(
  leadId: string,
  after: Date
): Promise<boolean> {
  const reply = await db.outreachMessage.findFirst({
    where: {
      leadId,
      senderType: EMessageSender.Lead,
      createdAt: { gt: after },
    },
    select: { id: true },
  });
  return !!reply;
}

export const followUpWorker = new Worker<FollowUpJobPayload>(
  FOLLOW_UP_QUEUE_NAME,
  async (job: Job<FollowUpJobPayload, void, string>) => {
    const { leadId, campaignId, initialOutreachMessageId } = job.data;
    const bullJobId = String(job.id ?? "");

    const logCtx = `[FollowUp] job=${bullJobId} lead=${leadId} initialMsg=${initialOutreachMessageId}`;

    try {
      const duplicate = await db.outreachMessage.findFirst({
        where: { followUpSourceMessageId: initialOutreachMessageId },
        select: { id: true },
      });
      if (duplicate) {
        console.log(`${logCtx} — skipped (follow-up already recorded id=${duplicate.id})`);
        await clearPendingFollowUpSlot(leadId, bullJobId);
        return;
      }

      const initial = await db.outreachMessage.findUnique({
        where: { id: initialOutreachMessageId },
        select: {
          id: true,
          sentAt: true,
          createdAt: true,
          senderType: true,
        },
      });

      if (!initial || initial.senderType !== EMessageSender.Admin) {
        console.warn(`${logCtx} — skipped (initial message missing or not outbound)`);
        await clearPendingFollowUpSlot(leadId, bullJobId);
        return;
      }

      const baseline = initial.sentAt ?? initial.createdAt;

      const lead = await db.lead.findUnique({
        where: { id: leadId },
        include: { campaign: true },
      });

      if (!lead?.email) {
        console.warn(`${logCtx} — skipped (lead missing or no email)`);
        await clearPendingFollowUpSlot(leadId, bullJobId);
        return;
      }

      if (lead.campaignId !== campaignId) {
        console.warn(`${logCtx} — skipped (lead reassigned to another campaign)`);
        await clearPendingFollowUpSlot(leadId, bullJobId);
        return;
      }

      if (await leadHasRepliedAfter(leadId, baseline)) {
        console.log(`${logCtx} — skipped (lead already replied)`);
        await clearPendingFollowUpSlot(leadId, bullJobId);
        return;
      }

      const campaign = await db.campaign.findUnique({
        where: { id: campaignId },
      });

      if (!campaign) {
        console.warn(`${logCtx} — skipped (campaign not found)`);
        await clearPendingFollowUpSlot(leadId, bullJobId);
        return;
      }

      const rawTemplate =
        campaign.followUpMessage?.trim() || DEFAULT_FOLLOW_UP_TEMPLATE;
      const messageBody = parsePlaceholders(rawTemplate, { name: lead.name });
      const subject = `Following up: ${campaign.name}`;
      const now = new Date();

      const { messageId } = await sendEmail({
        to: lead.email,
        subject,
        tempName: "outreach",
        tempData: { leadName: lead.name, body: messageBody },
        idempotencyKey: `followup-email:${initialOutreachMessageId}`,
      });

      await db.outreachMessage.create({
        data: {
          leadId: lead.id,
          campaignId,
          subject,
          body: messageBody,
          type: EOutreachType.Email,
          senderType: EMessageSender.Admin,
          sentAt: now,
          followUpSentAt: now,
          isFollowUp: true,
          followUpCount: 1,
          replyStatus: EReplyStatus.NoReply,
          providerMessageId: messageId,
          followUpSourceMessageId: initialOutreachMessageId,
        },
      });

      await db.lead.update({
        where: { id: leadId },
        data: {
          followUpSentAt: now,
          pendingFollowUpJobId: null,
        },
      });

      console.log(`${logCtx} — sent (resendId=${messageId})`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`${logCtx} — failed: ${msg}`);
      throw err;
    }
  },
  {
    connection: redisConnection,
    concurrency: 1,
    limiter: {
      max: 1,
      duration: 5000,
    },
  }
);

followUpWorker.on("completed", (job) => {
  console.log(`[FollowUp] Worker completed job ${job.id}`);
});

followUpWorker.on("failed", (job, err) => {
  console.error(`[FollowUp] Worker job ${job?.id} failed:`, err?.message);
});

export const gracefulShutdownFollowUpWorker = async () => {
  console.log("[FollowUp] Closing follow-up worker...");
  await followUpWorker.close();
  console.log("[FollowUp] Follow-up worker closed.");
};
