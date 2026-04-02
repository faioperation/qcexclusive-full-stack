import { prisma } from "../../db_connection/prisma";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { QueryBuilder, TQueryInput } from "../../utils/QueryBuilder";

const db = prisma as any;

// ─── Sample post headings and bodies for placeholder AI generation ─────────────
const SAMPLE_HEADINGS = [
  "Stunning Before & After Renovation",
  "Modern Kitchen Transformation",
  "Elegant Bathroom Remodel Reveal",
  "Open-Plan Living Space Makeover",
  "Luxury Master Suite Redesign",
  "Outdoor Deck & Patio Upgrade",
  "Custom Cabinetry Showcase",
  "Minimalist Office Renovation",
];

const SAMPLE_BODY =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// ─── Generate N sample MediaPost records ──────────────────────────────────────
const generateSamplePosts = (docsLinkId: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    heading: SAMPLE_HEADINGS[i % SAMPLE_HEADINGS.length],
    body: SAMPLE_BODY,
    postTime: new Date(),
    status: "Draft",
    docsLinkId,
  }));
};

// ─── Create DocsLink + auto-generate posts ────────────────────────────────────
const createDocsLinkInDB = async (payload: any, userId: string) => {
  const { postGenerate = 1, ...rest } = payload;

  const docsLink = await db.docsLink.create({
    data: {
      ...rest,
      postGenerate,
      createdById: userId,
    },
  });

  // Generate sample posts (AI placeholder)
  const postsData = generateSamplePosts(docsLink.id, postGenerate);
  await db.mediaPost.createMany({ data: postsData });

  return docsLink;
};

// ─── Get all DocsLinks (paginated) ────────────────────────────────────────────
const getAllDocsLinksFromDB = async (query: TQueryInput) => {
  const qb = new QueryBuilder(query).search(["name", "projectName"]).filter().sort().paginate();
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
const getPostsByDocsLinkIdFromDB = async (docsLinkId: string, status?: string) => {
  const docsLink = await db.docsLink.findUnique({ where: { id: docsLinkId } });
  if (!docsLink) throw new ApiError(httpStatus.NOT_FOUND, "Docs link not found");

  const where: any = { docsLinkId };
  if (status && status !== "All") where.status = status;

  const posts = await db.mediaPost.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return { docsLink, posts };
};

// ─── Delete DocsLink (cascade deletes posts via DB) ───────────────────────────
const deleteDocsLinkFromDB = async (id: string) => {
  const docsLink = await db.docsLink.findUnique({ where: { id } });
  if (!docsLink) throw new ApiError(httpStatus.NOT_FOUND, "Docs link not found");

  // Manually delete posts first (in case cascade isn't enforced at app level)
  await db.mediaPost.deleteMany({ where: { docsLinkId: id } });
  await db.docsLink.delete({ where: { id } });

  return docsLink;
};

// Get all posts across all docs links (for MediaPostsPage pagination & search)
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
          select: {
            id: true,
            name: true,
            projectName: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    }),
    db.mediaPost.count({ where: qb.where }),
  ]);

  return { meta: qb.getMeta(total), data: result };
};


const updatePostStatusInDB = async (postId: string, status: "Draft" | "Posted") => {
  const post = await db.mediaPost.findUnique({ where: { id: postId } });
  if (!post) throw new ApiError(httpStatus.NOT_FOUND, "Post not found");

  const updated = await db.mediaPost.update({
    where: { id: postId },
    data: { status },
  });

  return updated;
};

export const DocsLinkService = {
  createDocsLinkInDB,
  getAllDocsLinksFromDB,
  getPostsByDocsLinkIdFromDB,
  getAllPostsFromDB,
  deleteDocsLinkFromDB,
  updatePostStatusInDB
};
