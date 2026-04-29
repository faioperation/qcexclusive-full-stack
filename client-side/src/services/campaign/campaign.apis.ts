"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ECampaignPlatform = "GoogleMaps" | "Instagram" | "Facebook";

export interface ICreateCampaignPayload {
  name: string;
  description?: string;
  firstMessage: string;
  location: string;
  industry: string;
  specification?: string;
  platform: ECampaignPlatform;
}

export interface ICampaignQuery {
  page?: number;
  limit?: number;
  searchTerm?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getAuthHeader = async () => ({
  Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
});

// ─── Create Campaign ──────────────────────────────────────────────────────────

/**
 * POST /campaign
 * Create a new AI-powered outreach campaign.
 * Triggers an Apify scraping job in the background.
 * Requires: Admin or User role
 * Body: { name, description?, firstMessage, location, industry, specification?, platform }
 */
export const createCampaign = async (
  payload: ICreateCampaignPayload | FieldValues
) => { 
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/campaign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await getAuthHeader()),
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("campaign", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Get All Campaigns ────────────────────────────────────────────────────────

/**
 * GET /campaign
 * Retrieve all campaigns with optional pagination, search, and sorting.
 * Query params: page, limit, searchTerm, sortBy, sortOrder
 * Requires: Admin or User role
 */
export const getAllCampaigns = async (query?: ICampaignQuery) => {
  try {
    const params = new URLSearchParams();
    if (query?.page) params.set("page", String(query.page));
    if (query?.limit) params.set("limit", String(query.limit));
    if (query?.searchTerm) params.set("searchTerm", query.searchTerm);
    if (query?.sortBy) params.set("sortBy", query.sortBy);
    if (query?.sortOrder) params.set("sortOrder", query.sortOrder);

    const queryString = params.toString() ? `?${params.toString()}` : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/campaign${queryString}`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["campaign"],
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

// ─── Get Single Campaign ──────────────────────────────────────────────────────

/**
 * GET /campaign/:id
 * Retrieve a single campaign by UUID (includes leads and scraping jobs).
 * Requires: Admin or User role
 */
export const getSingleCampaign = async (campaignId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/campaign/${campaignId}`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["campaign", `campaign-${campaignId}`],
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

// ─── Delete Campaign ──────────────────────────────────────────────────────────

/**
 * DELETE /campaign/:id
 * Permanently delete a campaign and all associated leads, scraping jobs, and outreach messages.
 * Requires: Admin role
 */
export const deleteCampaign = async (campaignId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/campaign/${campaignId}`,
      {
        method: "DELETE",
        headers: await getAuthHeader(),
      }
    );
    revalidateTag("campaign", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
