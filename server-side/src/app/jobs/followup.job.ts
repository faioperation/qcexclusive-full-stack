import { Queue } from "bullmq";
import { redisConnection } from "../db_connection/redis";
import { FOLLOW_UP_QUEUE_NAME } from "./followup.constants";

export type FollowUpJobPayload = {
  leadId: string;
  campaignId: string;
  /** First outbound message this follow-up is tied to (idempotency + reply window) */
  initialOutreachMessageId: string;
};

export const followUpQueue = new Queue<FollowUpJobPayload>(
  FOLLOW_UP_QUEUE_NAME,
  {
    connection: redisConnection,
    defaultJobOptions: {
      attempts: 5,
      backoff: {
        type: "exponential",
        delay: 10_000,
      },
      removeOnComplete: {
        age: 3600 * 24 * 14,
        count: 2000,
      },
      removeOnFail: {
        age: 3600 * 24 * 14,
      },
    },
  }
);
