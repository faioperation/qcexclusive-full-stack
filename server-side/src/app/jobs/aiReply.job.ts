import { Queue } from "bullmq";
import { redisConnection } from "../db_connection/redis";

export const AI_REPLY_QUEUE_NAME = "ai-reply-email";

export type AIReplyJobPayload = {
  messageId: string;
  leadId: string;
  campaignId?: string;
  leadName: string;
  leadEmail: string;
  aiGeneratedReply: string;
  classification: string;
};

export const aiReplyQueue = new Queue<AIReplyJobPayload>(
  AI_REPLY_QUEUE_NAME,
  {
    connection: redisConnection,
    defaultJobOptions: {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 5_000,
      },
      removeOnComplete: {
        age: 3600 * 24 * 7, // Keep for 7 days
        count: 1000,
      },
      removeOnFail: {
        age: 3600 * 24 * 3, // Keep failures for 3 days
      },
    },
  }
);
