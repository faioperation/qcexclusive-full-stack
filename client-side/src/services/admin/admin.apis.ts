"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface IAdmin {
  id: string;
  name: string;
  email: string;
  contactNo: string | null;
  photo: string | null;
  address?: string | null;
  isBlocked: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface ICreateAdminPayload {
  name: string;
  email: string;
  password: string;
  contactNo: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getAuthHeader = async () => ({
  Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
});

// ─── Get All Admins ───────────────────────────────────────────────────────────

/**
 * GET /admin
 * Retrieve all admin users in the system.
 * Requires: Admin role
 */
export const getAllAdmins = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/admin`, {
      method: "GET",
      headers: await getAuthHeader(),
      next: {
        tags: ["admin"],
      },
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Get Single Admin ─────────────────────────────────────────────────────────

/**
 * GET /admin/:id
 * Retrieve a single admin user by UUID.
 * Requires: Admin role
 */
export const getSingleAdmin = async (adminId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/admin/${adminId}`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["admin", `admin-${adminId}`],
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

// ─── Create Admin ─────────────────────────────────────────────────────────────

/**
 * POST /admin/create
 * Create a new admin user.
 * Requires: Admin role
 * Body: { name, email, password, contactNo }
 */
export const createAdmin = async (
  payload: ICreateAdminPayload | FieldValues
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/admin/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await getAuthHeader()),
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("admin", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Update Admin ─────────────────────────────────────────────────────────────

/**
 * PATCH /admin/:id
 * Update an admin user's profile details.
 * Requires: Admin role
 * Body: { name?, email?, contactNo?, photo?, address? }
 */
export const updateAdmin = async (adminId: string, payload: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/admin/${adminId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(await getAuthHeader()),
        },
        body: JSON.stringify(payload),
      }
    );
    revalidateTag("admin", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Delete Admin ─────────────────────────────────────────────────────────────

/**
 * DELETE /admin/:id
 * Permanently delete an admin user by UUID.
 * Requires: Admin role
 */
export const deleteAdmin = async (adminId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/admin/${adminId}`,
      {
        method: "DELETE",
        headers: await getAuthHeader(),
      }
    );
    revalidateTag("admin", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Toggle Block / Unblock Admin ────────────────────────────────────────────

/**
 * PATCH /admin/:id/toggle-block
 * Toggle the block status of an admin.
 * If active → blocks. If blocked → unblocks.
 * Requires: Admin role
 */
export const toggleBlockAdmin = async (adminId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/admin/${adminId}/toggle-block`,
      {
        method: "PATCH",
        headers: await getAuthHeader(),
      }
    );
    revalidateTag("admin", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
