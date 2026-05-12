import { prisma } from "../../db_connection/prisma";
import {
  buildFollowUpJobId,
  FOLLOW_UP_DELAY_MS,
  FOLLOW_UP_JOB_NAME,
} from "../../jobs/followup.constants";
import {
  followUpQueue,
  type FollowUpJobPayload,
} from "../../jobs/followup.job";

const db = prisma as any;

/**
 * Queue a single delayed follow-up (7 days) after the initial outreach message is persisted.
 * Uses deterministic jobId to prevent duplicate delayed jobs for the same initial send.
 */
export async function scheduleSevenDayFollowUp(
  params: FollowUpJobPayload
): Promise<void> {
  const { leadId, campaignId, initialOutreachMessageId } = params;

  const jobId = buildFollowUpJobId(leadId, initialOutreachMessageId);

  const existing = await followUpQueue.getJob(jobId);
  if (existing) {
    const state = await existing.getState();
    if (state === "delayed" || state === "waiting" || state === "waiting-children") {
      console.log(
        `[FollowUp] Already scheduled (${state}) jobId=${jobId} — skip duplicate schedule`
      );
      return;
    }
    await existing.remove().catch(() => undefined);
  }

  const lead = await db.lead.findUnique({
    where: { id: leadId },
    select: { pendingFollowUpJobId: true },
  });

  if (lead?.pendingFollowUpJobId && lead.pendingFollowUpJobId !== jobId) {
    const old = await followUpQueue.getJob(lead.pendingFollowUpJobId);
    await old?.remove().catch(() => undefined);
    console.log(
      `[FollowUp] Replaced previous pending job ${lead.pendingFollowUpJobId} for lead ${leadId}`
    );
  }

  await followUpQueue.add(
    FOLLOW_UP_JOB_NAME,
    { leadId, campaignId, initialOutreachMessageId },
    {
      jobId,
      delay: FOLLOW_UP_DELAY_MS,
    }
  );

  await db.lead.update({
    where: { id: leadId },
    data: { pendingFollowUpJobId: jobId },
  });

  console.log(
    `[FollowUp] Scheduled 7-day follow-up jobId=${jobId} leadId=${leadId} initialMessageId=${initialOutreachMessageId}`
  );
}

/**
 * Remove pending delayed follow-up when the lead has replied (IMAP / future webhooks).
 */
export async function cancelPendingFollowUpForLead(leadId: string): Promise<void> {
  const lead = await db.lead.findUnique({
    where: { id: leadId },
    select: { pendingFollowUpJobId: true },
  });

  const jobId = lead?.pendingFollowUpJobId as string | null | undefined;
  if (!jobId) {
    return;
  }

  const job = await followUpQueue.getJob(jobId);
  if (job) {
    const state = await job.getState();
    await job.remove().catch(() => undefined);
    console.log(
      `[FollowUp] Cancelled pending job jobId=${jobId} leadId=${leadId} (was ${state}) — reply received`
    );
  }

  await db.lead.update({
    where: { id: leadId },
    data: { pendingFollowUpJobId: null },
  });
}
