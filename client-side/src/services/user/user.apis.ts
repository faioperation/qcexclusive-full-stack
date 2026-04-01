"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  contactNo: string | null;
  photo: string | null;
  address: string | null;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getAuthHeader = async () => ({
  Authorization: (await cookies()).get("accessToken")!.value,
});

// ─── Get My Profile ───────────────────────────────────────────────────────────

/**
 * GET /user/me
 * Returns the full profile of the currently authenticated user.
 * Requires: accessToken cookie
 */
export const getMyProfile = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/user/me`, {
      method: "GET",
      headers: await getAuthHeader(),
      next: {
        tags: ["user-profile"],
      },
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Update My Profile ────────────────────────────────────────────────────────

/**
 * PATCH /user/me
 * Partially update the authenticated user's own profile.
 * Body: { name?, contactNo?, photo?, address? }
 */
export const updateMyProfile = async (payload: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/user/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(await getAuthHeader()),
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
