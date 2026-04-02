"use server";

import { cookies } from "next/headers";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getAuthHeader = async () => ({
  Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
});

// ─── Get All Conversations ────────────────────────────────────────────────────

/**
 * GET /inbox/conversations
 * Retrieve all conversations (leads with a gmailThreadId) for the inbox sidebar.
 * Each entry includes the lead's name, imageUrl, gmailThreadId,
 * and the most recent outreach message.
 * Requires: Admin or User role
 */
export const getAllConversations = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/inbox/conversations`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["inbox"],
        },
      }
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Get Messages by Thread ID ────────────────────────────────────────────────

/**
 * GET /inbox/:threadId
 * Retrieve the full message history for a specific conversation thread.
 * Includes lead info (name, email, imageUrl) attached to each message.
 * Requires: Admin or User role
 */
export const getMessagesByThreadId = async (threadId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/inbox/${threadId}`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["inbox", `thread-${threadId}`],
        },
      }
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Sync Inbox ───────────────────────────────────────────────────────────────

/**
 * GET /inbox/sync
 * Triggers a Gmail sync to pull the latest email replies into the database.
 * Should be called periodically or on-demand from the inbox page.
 * Requires: Admin or User role
 */
export const syncInbox = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/inbox/sync`, {
      method: "GET",
      headers: await getAuthHeader(),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
