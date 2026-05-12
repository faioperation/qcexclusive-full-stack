import { Queue } from "bullmq";
import { redisConnection } from "../db_connection/redis";

export const OUTREACH_QUEUE_NAME = "outreach-email";

export const outreachQueue = new Queue(OUTREACH_QUEUE_NAME, {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 5, // Retries on Resend/network failures
    backoff: {
      type: "exponential",
      delay: 10000, // Start with 10s wait
    },
    removeOnComplete: {
      age: 3600 * 24, // Keep history for 24 hours
      count: 1000,
    },
    removeOnFail: {
      age: 3600 * 24 * 7, // Keep failures for 7 days
    },
  },
});
