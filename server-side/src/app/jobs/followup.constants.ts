/** 7 days in milliseconds */
export const FOLLOW_UP_DELAY_MS = 7 * 24 * 60 * 60 * 1000;
// export const FOLLOW_UP_DELAY_MS = 5 * 60 * 1000;

export const FOLLOW_UP_QUEUE_NAME = "followup-email";

export const FOLLOW_UP_JOB_NAME = "send-seven-day-follow-up";

/** Default body when campaign.followUpMessage is empty */
export const DEFAULT_FOLLOW_UP_TEMPLATE =
  "Hi {{firstName}},\n\nI'm following up on my previous email. If you'd like to connect, just reply to this message.\n\nBest regards,";

/** Deterministic BullMQ job id — one delayed follow-up per initial outreach message */
export function buildFollowUpJobId(
  leadId: string,
  initialOutreachMessageId: string
): string {
  return `followup-7d-${leadId}-${initialOutreachMessageId}`;
}
