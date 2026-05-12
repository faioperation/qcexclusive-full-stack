import { Worker, Job } from "bullmq";
import { redisConnection } from "../db_connection/redis";
import { OUTREACH_QUEUE_NAME } from "./outreach.job";
import { prisma } from "../db_connection/prisma";
import { sendEmail } from "../utils/sendEmail";
import { ELeadStatus } from "../../../generated/prisma";
import { parsePlaceholders } from "../utils/placeholderParser";

const db = prisma as any;

export const outreachWorker = new Worker(
  OUTREACH_QUEUE_NAME,
  async (job: Job) => {
    const { leadId, message } = job.data;
    console.log(`[Worker] Processing job ${job.id} for lead ${leadId}`);

    // 1. Fetch lead with its associated campaign
    const lead = await db.lead.findUnique({
      where: { id: leadId },
      include: { campaign: true },
    });

    if (!lead) {
      console.warn(`[Worker] Lead ${leadId} not found. Skipping.`);
      return { success: false, error: "Lead not found" };
    }

    if (!lead.email) {
      console.warn(`[Worker] Lead ${leadId} has no email. Skipping.`);
      return { success: false, error: "No email address" };
    }

    // 2. Determine message body
    const rawMessage = message || lead.campaign?.firstMessage;
    if (!rawMessage) {
      console.warn(`[Worker] No message body for lead ${leadId}. Skipping.`);
      return { success: false, error: "No message body" };
    }

    // Parse placeholders (e.g. {{firstName}})
    const messageBody = parsePlaceholders(rawMessage, { name: lead.name });

    // 3. Send the email
    try {
      await sendEmail({
        to: lead.email,
        subject: lead.campaign ? `Message from ${lead.campaign.name}` : "Outreach Message",
        tempName: "outreach",
        tempData: { leadName: lead.name, body: messageBody },
      });

      // 4. Record outreach message
      await db.outreachMessage.create({
        data: {
          campaignId: lead.campaignId || undefined,
          leadId: lead.id,
          body: messageBody,
          type: "Email",
          sentAt: new Date(),
        },
      });

      // 5. Update lead status
      await db.lead.update({
        where: { id: leadId },
        data: { status: ELeadStatus.Contacted },
      });

      return { success: true };
    } catch (error: any) {
      console.error(`[Worker] Failed to send email to ${lead.email}:`, error.message);
      throw error; // Rethrow so BullMQ can handle retries
    }
  },
  {
    connection: redisConnection,
    concurrency: 1, // Process one at a time for strict throttling
    limiter: {
      max: 1,
      duration: 5000, // 1 email every 5 seconds
    },
  }
);

export const gracefulShutdown = async () => {
  console.log("[Worker] Closing outreach worker...");
  await outreachWorker.close();
  console.log("[Worker] Outreach worker closed.");
};

outreachWorker.on("completed", (job) => {
  console.log(`[Worker] Job ${job.id} completed`);
});

outreachWorker.on("failed", (job, err) => {
  console.error(`[Worker] Job ${job?.id} failed:`, err.message);
});
