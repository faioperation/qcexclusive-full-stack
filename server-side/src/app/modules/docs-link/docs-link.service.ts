import { prisma } from "../../db_connection/prisma";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { QueryBuilder, TQueryInput } from "../../utils/QueryBuilder";

const db = prisma as any;

const N8N_WEBHOOK_URL = "https://qcexclusive.app.n8n.cloud/webhook/doc";

// ─── n8n returns an ARRAY ─────────────────────────────────────────────────────
interface TN8nPostEntry {
  post_number?: string;
  heading?: string;
  content?: string;
  body?: string;
  [key: string]: unknown;
}

type TN8nWebhookResponse = Array<{
  output?: {
    Posts?: TN8nPostEntry[];
    posts?: TN8nPostEntry[];
    [key: string]: unknown;
  };
  Posts?: TN8nPostEntry[];
  posts?: TN8nPostEntry[];
  [key: string]: unknown;
}>;

const LOREM_IPSUM_MARKER = "lorem ipsum";

// ─── Call n8n webhook ─────────────────────────────────────────────────────────
const callN8nWebhook = async (payload: {
  name: string;
  projectName: string;
  docsLink: string;
  prompt?: string;
  postGenerate: number;
}): Promise<Array<{ heading: string; body: string }>> => {
  let response: Response;

  try {
    response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err: any) {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      `Failed to reach n8n webhook: ${err?.message ?? "Network error"}`
    );
  }

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      `n8n webhook returned ${response.status}: ${text}`
    );
  }

  let data: TN8nWebhookResponse;
  try {
    data = await response.json();
    console.log("n8n raw response:", JSON.stringify(data, null, 2));
  } catch {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      "n8n webhook returned an invalid JSON response"
    );
  }

  // ── Defensively extract posts from multiple possible n8n response shapes ──
  // Shape A: [{ output: { Posts: [...] } }]   (structured output parser)
  // Shape B: [{ output: { posts: [...] } }]   (lowercase)
  // Shape C: [{ Posts: [...] }]               (direct)
  // Shape D: [{ posts: [...] }]               (direct lowercase)
  const firstItem = Array.isArray(data) ? data[0] : (data as any);

  const posts: TN8nPostEntry[] | undefined =
    firstItem?.output?.Posts ??
    firstItem?.output?.posts ??
    firstItem?.Posts ??
    firstItem?.posts;

  if (!Array.isArray(posts) || posts.length === 0) {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      `n8n webhook did not return any posts. Raw: ${JSON.stringify(data)}`
    );
  }

  const mapped = posts.map((entry: TN8nPostEntry) => ({
    // Accept both "post_number"/"heading" for title, "content"/"body" for body
    heading: (entry.heading ?? entry.post_number ?? "").trim(),
    body: (entry.content ?? entry.body ?? "").trim(),
  }));

  // ── Guard: reject if n8n returned Lorem Ipsum placeholder content ──────────
  const hasLoremIpsum = mapped.some(
    (p) =>
      p.body.toLowerCase().includes(LOREM_IPSUM_MARKER) ||
      p.heading.toLowerCase().includes(LOREM_IPSUM_MARKER)
  );
  if (hasLoremIpsum) {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      "n8n returned placeholder (Lorem Ipsum) content instead of real AI-generated posts. " +
        "Check the n8n workflow prompt — the AI is not reading the Google Doc."
    );
  }

  const emptyBodies = mapped.filter((p) => !p.body);
  if (emptyBodies.length > 0) {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      `n8n posts are missing body content. Raw: ${JSON.stringify(data)}`
    );
  }

  return mapped;
};

// ─── Create DocsLink + generate AI posts via n8n ─────────────────────────────
const createDocsLinkInDB = async (payload: any, userId: string) => {
  const {
    postGenerate = 1,
    name,
    projectName,
    docsLink: docsLinkUrl,
    prompt,
    ...rest
  } = payload;

  // 1️⃣  Persist the DocsLink record
  const docsLink = await db.docsLink.create({
    data: {
      name,
      projectName,
      docsLink: docsLinkUrl,
      prompt,
      postGenerate: Number(postGenerate),
      ...rest,
      createdById: userId,
    },
  });

  // 2️⃣  Call n8n → get real AI-generated posts
  const generatedPosts = await callN8nWebhook({
    name,
    projectName,
    docsLink: docsLinkUrl,
    prompt,
    postGenerate: Number(postGenerate),
  });

  // 3️⃣  Persist MediaPost records with real content
  const postsData = generatedPosts.map(({ heading, body }) => ({
    heading,
    body,
    postTime: new Date(),
    status: "Draft",
    docsLinkId: docsLink.id,
  }));

  await db.mediaPost.createMany({ data: postsData });

  return docsLink;
};

// ─── Get all DocsLinks (paginated) ────────────────────────────────────────────
const getAllDocsLinksFromDB = async (query: TQueryInput) => {
  const qb = new QueryBuilder(query)
    .search(["name", "projectName"])
    .filter()
    .sort()
    .paginate();

  const [result, total] = await Promise.all([
    db.docsLink.findMany({
      ...qb.build(),
      include: { _count: { select: { posts: true } } },
    }),
    db.docsLink.count({ where: qb.where }),
  ]);

  return { meta: qb.getMeta(total), data: result };
};

// ─── Get all posts for a specific DocsLink ────────────────────────────────────
const getPostsByDocsLinkIdFromDB = async (
  docsLinkId: string,
  status?: string
) => {
  const docsLink = await db.docsLink.findUnique({ where: { id: docsLinkId } });
  if (!docsLink)
    throw new ApiError(httpStatus.NOT_FOUND, "Docs link not found");

  const where: any = { docsLinkId };
  if (status && status !== "All") where.status = status;

  const posts = await db.mediaPost.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return { docsLink, posts };
};

// ─── Delete DocsLink ──────────────────────────────────────────────────────────
const deleteDocsLinkFromDB = async (id: string) => {
  const docsLink = await db.docsLink.findUnique({ where: { id } });
  if (!docsLink)
    throw new ApiError(httpStatus.NOT_FOUND, "Docs link not found");

  await db.mediaPost.deleteMany({ where: { docsLinkId: id } });
  await db.docsLink.delete({ where: { id } });

  return docsLink;
};

// ─── Get all posts across all docs links ─────────────────────────────────────
const getAllPostsFromDB = async (query: TQueryInput) => {
  const qb = new QueryBuilder(query)
    .search(["heading", "body"])
    .filter()
    .sort()
    .paginate();

  const [result, total] = await Promise.all([
    db.mediaPost.findMany({
      ...qb.build(),
      include: {
        docsLink: {
          select: { id: true, name: true, projectName: true },
        },
      },
      orderBy: { createdAt: "desc" },
    }),
    db.mediaPost.count({ where: qb.where }),
  ]);

  return { meta: qb.getMeta(total), data: result };
};

// ─── Update post status ───────────────────────────────────────────────────────
const updatePostStatusInDB = async (
  postId: string,
  status: "Draft" | "Posted"
) => {
  const post = await db.mediaPost.findUnique({ where: { id: postId } });
  if (!post) throw new ApiError(httpStatus.NOT_FOUND, "Post not found");

  return db.mediaPost.update({
    where: { id: postId },
    data: { status },
  });
};

export const DocsLinkService = {
  createDocsLinkInDB,
  getAllDocsLinksFromDB,
  getPostsByDocsLinkIdFromDB,
  getAllPostsFromDB,
  deleteDocsLinkFromDB,
  updatePostStatusInDB,
};