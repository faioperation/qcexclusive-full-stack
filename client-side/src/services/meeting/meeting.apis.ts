"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// ─── Types ────────────────────────────────────────────────────────────────────

export type EMeetingStatus = "Scheduled" | "Completed" | "Cancelled";

export interface IUpdateMeetingPayload {
  status?: EMeetingStatus;
  title?: string;
  startTime?: string;
  endTime?: string;
  notes?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getAuthHeader = async () => ({
  Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
});

// ─── Get All Meetings ─────────────────────────────────────────────────────────

/**
 * GET /meeting
 * Retrieve all scheduled meetings, ordered by startTime ascending.
 * Each meeting includes the associated lead's name, imageUrl, and role.
 * Requires: Admin or User role
 */
export const getAllMeetings = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/meeting`, {
      method: "GET",
      headers: await getAuthHeader(),
      next: {
        tags: ["meeting"],
      },
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Update Meeting ───────────────────────────────────────────────────────────

/**
 * PATCH /meeting/:id
 * Update a meeting's status or details (e.g. mark as Completed or Cancelled).
 * Requires: Admin role
 * Body: { status?, title?, startTime?, endTime?, notes? }
 */
export const updateMeeting = async (
  meetingId: string,
  payload: IUpdateMeetingPayload | FieldValues
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/meeting/${meetingId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(await getAuthHeader()),
        },
        body: JSON.stringify(payload),
      }
    );
    revalidateTag("meeting", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
