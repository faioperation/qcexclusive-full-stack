"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ELeadStatus = "Pending" | "Contacted" | "Completed" | "Rejected";
export type ELeadPlatform = "GoogleMaps" | "Instagram" | "Facebook";

export interface ILeadQuery {
  page?: number;
  limit?: number;
  searchTerm?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  /** Filter by related field, e.g. industry[name]=SomeCategory */
  [key: string]: unknown;
}

export interface IUpdateLeadPayload {
  status?: ELeadStatus;
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  platformUrl?: string;
  imageUrl?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getAuthHeader = async () => ({
  Authorization: (await cookies()).get("accessToken")!.value,
});

// ─── Get All Leads ────────────────────────────────────────────────────────────

/**
 * GET /lead
 * Retrieve all leads with optional pagination, search, filter, and sort.
 * Supports query params: page, limit, searchTerm, sortBy, sortOrder
 * Also supports relation filters: industry[name], location[city|state|country], campaign[name]
 * Requires: Admin or User role
 */
export const getAllLeads = async (query?: ILeadQuery) => {
  try {
    const params = new URLSearchParams();
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          params.set(key, String(value));
        }
      });
    }
    const queryString = params.toString() ? `?${params.toString()}` : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/lead${queryString}`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["lead"],
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

// ─── Get Single Lead ──────────────────────────────────────────────────────────

/**
 * GET /lead/:id
 * Retrieve a single lead by UUID.
 * Includes: campaign, industry, location, outreachMessages relations.
 * Requires: Admin or User role
 */
export const getSingleLead = async (leadId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/lead/${leadId}`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["lead", `lead-${leadId}`],
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

// ─── Update Lead ──────────────────────────────────────────────────────────────

/**
 * PATCH /lead/:id
 * Partially update a lead's data (e.g. status, contact info).
 * Requires: Admin or User role
 * Body: { status?, name?, email?, phone?, website?, platformUrl?, imageUrl? }
 */
export const updateLead = async (
  leadId: string,
  payload: IUpdateLeadPayload | FieldValues
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/lead/${leadId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(await getAuthHeader()),
        },
        body: JSON.stringify(payload),
      }
    );
    revalidateTag("lead", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Delete Lead ──────────────────────────────────────────────────────────────

/**
 * DELETE /lead/:id
 * Permanently delete a lead by UUID.
 * Requires: Admin role only
 */
export const deleteLead = async (leadId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/lead/${leadId}`,
      {
        method: "DELETE",
        headers: await getAuthHeader(),
      }
    );
    revalidateTag("lead", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
