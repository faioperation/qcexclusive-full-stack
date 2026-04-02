"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ICreateDocsLinkPayload {
  /** Name of the person/owner associated with these docs */
  name: string;
  /** Name of the project the docs belong to */
  projectName: string;
  /** URL to the documentation or design file (e.g. Figma link) */
  docsLink: string;
  /** AI prompt describing the type of social media posts to generate */
  prompt: string;
  /** Number of AI-generated sample posts to create */
  postGenerate: number;
}

export interface IDocsLinkQuery {
  page?: number;
  limit?: number;
  searchTerm?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface IAllPostsResponse {
  id: string;
  heading: string;
  body: string;
  status: string;
  createdAt: string;
  docsLink: {
    id: string;
    name: string;
    projectName: string;
  };
}

export type EPostStatus = "All" | "Posted" | "Draft";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getAuthHeader = async () => ({
  Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
});

// ─── Create Docs Link ─────────────────────────────────────────────────────────

/**
 * POST /docs-link
 * Create a new documentation/project link and auto-generate AI social media posts.
 * Requires: Admin or User role
 * Body: { name, projectName, docsLink, prompt, postGenerate }
 */
export const createDocsLink = async (
  payload: ICreateDocsLinkPayload | FieldValues
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/docs-link`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await getAuthHeader()),
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("docs-link", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Get All Docs Links ───────────────────────────────────────────────────────

/**
 * GET /docs-link
 * Retrieve all documentation links (paginated table view).
 * Each entry includes a _count of associated posts.
 * Query params: page, limit, searchTerm, sortBy, sortOrder
 * Requires: Admin or User role
 */
export const getAllDocsLinks = async (query?: IDocsLinkQuery) => {
  try {
    const params = new URLSearchParams();
    if (query?.page) params.set("page", String(query.page));
    if (query?.limit) params.set("limit", String(query.limit));
    if (query?.searchTerm) params.set("searchTerm", query.searchTerm);
    if (query?.sortBy) params.set("sortBy", query.sortBy);
    if (query?.sortOrder) params.set("sortOrder", query.sortOrder);

    const queryString = params.toString() ? `?${params.toString()}` : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/docs-link${queryString}`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["docs-link"],
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

// ─── Get Posts by Docs Link ID ────────────────────────────────────────────────

/**
 * GET /docs-link/:id/posts
 * Retrieve all AI-generated posts associated with a specific docs link.
 * Optional query: ?status=All|Posted|Draft  (default: All)
 * Requires: Admin or User role
 */
export const getPostsByDocsLinkId = async (
  docsLinkId: string,
  status?: EPostStatus
) => {
  try {
    const params = new URLSearchParams();
    if (status && status !== "All") params.set("status", status);

    const queryString = params.toString() ? `?${params.toString()}` : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/docs-link/${docsLinkId}/posts${queryString}`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["docs-link", `docs-posts-${docsLinkId}`],
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

// ─── Delete Docs Link ─────────────────────────────────────────────────────────

/**
 * DELETE /docs-link/:id
 * Delete a documentation link and all of its associated AI-generated posts.
 * Requires: Admin role
 */
export const deleteDocsLink = async (docsLinkId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/docs-link/${docsLinkId}`,
      {
        method: "DELETE",
        headers: await getAuthHeader(),
      }
    );
    revalidateTag("docs-link", "default");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Get All Posts (for MediaPostsPage) ────────────────────────────────────────

/**
 * GET /docs-link/posts/all
 * Retrieve all posts across all docs links with pagination & search.
 * Query params: page, limit, searchTerm, sortBy, sortOrder
 * Requires: Admin or User role
 */
export const getAllPosts = async (query?: IDocsLinkQuery) => {
  try {
    const params = new URLSearchParams();
    if (query?.page) params.set("page", String(query.page));
    if (query?.limit) params.set("limit", String(query.limit));
    if (query?.searchTerm) params.set("searchTerm", query.searchTerm);
    if (query?.sortBy) params.set("sortBy", query.sortBy);
    if (query?.sortOrder) params.set("sortOrder", query.sortOrder);

    const queryString = params.toString() ? `?${params.toString()}` : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/docs-link/posts/all${queryString}`,
      {
        method: "GET",
        headers: await getAuthHeader(),
        next: {
          tags: ["docs-link", "all-posts"],
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
