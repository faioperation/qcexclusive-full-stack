import { prisma } from "../../db_connection/prisma";
import ApiError from "../../errors/ApiError";
import config from "../../config";
import httpStatus from "http-status";
import { QueryBuilder, TQueryInput } from "../../utils/QueryBuilder";

const db = prisma;

const N8N_WEBHOOK_URL = config.N8N_WEBHOOK_URL;

interface TN8nPostEntry {
  post_number?: string | number;
  heading?: string;
  title?: string;
  content?: string;
  body?: string;
  caption?: string;

  image?: string;
  imageUrl?: string;
  image_link?: string;

  thumbnail?: string;
  thumbnailUrl?: string;

  imageAlt?: string;
  alt?: string;

  [key: string]: unknown;
}

interface TNormalizedPost {
  heading: string;
  body: string;
  imageUrl: string | null;
  thumbnailUrl: string | null;
  imageAlt: string | null;
}

const LOREM_IPSUM_MARKER = "lorem ipsum";

const normalizePosts = (
  raw: unknown
): TNormalizedPost[] => {
  const source = Array.isArray(raw) ? raw[0] : raw;

  let extracted: unknown =
    (source as any)?.output?.Posts ??
    (source as any)?.output?.posts ??
    (source as any)?.Posts ??
    (source as any)?.posts ??
    (source as any)?.["output.Posts"] ??
    (source as any)?.["output.posts"];

  if (!extracted) {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      `No posts found in n8n response. Raw: ${JSON.stringify(raw)}`
    );
  }

  // single object → array
  if (!Array.isArray(extracted)) {
    extracted = [extracted];
  }

  const posts = extracted as TN8nPostEntry[];

  const normalized = posts.map((entry, index) => {
    const heading =
      String(
        entry.heading ??
          entry.title ??
          `Post ${entry.post_number ?? index + 1}`
      ).trim();

    const body =
      String(
        entry.content ??
          entry.body ??
          entry.caption ??
          ""
      ).trim();

    const imageUrl =
      String(
        entry.image ??
          entry.imageUrl ??
          entry.image_link ??
          ""
      ).trim() || null;

    const thumbnailUrl =
      String(
        entry.thumbnail ??
          entry.thumbnailUrl ??
          ""
      ).trim() || null;

    const imageAlt =
      String(
        entry.alt ??
          entry.imageAlt ??
          ""
      ).trim() || null;

    return {
      heading,
      body,
      imageUrl,
      thumbnailUrl,
      imageAlt,
    };
  });

  if (normalized.length === 0) {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      "n8n returned empty posts array"
    );
  }

  const hasLoremIpsum = normalized.some(
    (p) =>
      p.heading.toLowerCase().includes(LOREM_IPSUM_MARKER) ||
      p.body.toLowerCase().includes(LOREM_IPSUM_MARKER)
  );

  if (hasLoremIpsum) {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      "n8n returned placeholder lorem ipsum content"
    );
  }

  const invalidPosts = normalized.filter((p) => !p.body);

  if (invalidPosts.length > 0) {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      `Some generated posts are missing content`
    );
  }

  return normalized;
};

const callN8nWebhook = async (payload: {
  name: string;
  projectName: string;
  docsLink: string;
  prompt?: string;
  postGenerate: number;
}): Promise<TNormalizedPost[]> => {
  if (!N8N_WEBHOOK_URL) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "N8N_WEBHOOK_URL is not configured"
    );
  }

  let response: Response;

  try {
    response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } catch (error: any) {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      `Failed to connect to n8n webhook: ${error?.message}`
    );
  }

  if (!response.ok) {
    const text = await response.text().catch(() => "");

    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      `n8n webhook returned ${response.status}: ${text}`
    );
  }

  let rawData: unknown;

  try {
    rawData = await response.json();

    console.log(
      "n8n raw response:",
      JSON.stringify(rawData, null, 2)
    );
  } catch {
    throw new ApiError(
      httpStatus.BAD_GATEWAY,
      "Invalid JSON returned from n8n"
    );
  }

  return normalizePosts(rawData);
};

const createDocsLinkInDB = async (
  payload: any,
  userId: string
) => {
  const {
    postGenerate = 1,
    name,
    projectName,
    docsLink: docsLinkUrl,
    prompt,
    ...rest
  } = payload;

  const generatedPosts = await callN8nWebhook({
    name,
    projectName,
    docsLink: docsLinkUrl,
    prompt,
    postGenerate: Number(postGenerate),
  });

  const result = await db.$transaction(async (tx) => {
    const docsLink = await tx.docsLink.create({
      data: {
        name,
        projectName,
        docsLink: docsLinkUrl,
        prompt,
        postGenerate: Number(postGenerate),
        createdById: userId,
        ...rest,
      },
    });

    await tx.mediaPost.createMany({
      data: generatedPosts.map((post) => ({
        heading: post.heading,
        body: post.body,
        imageUrl: post.imageUrl,
        thumbnailUrl: post.thumbnailUrl,
        imageAlt: post.imageAlt,
        postTime: new Date(),
        status: "Draft",
        docsLinkId: docsLink.id,
      })),
    });

    return docsLink;
  });

  return result;
};

const getAllDocsLinksFromDB = async (
  query: TQueryInput
) => {
  const qb = new QueryBuilder(query)
    .search(["name", "projectName"])
    .filter()
    .sort()
    .paginate();

  const [result, total] = await Promise.all([
    db.docsLink.findMany({
      ...qb.build(),
      include: {
        _count: {
          select: {
            posts: true,
          },
        },
      },
    }),
    db.docsLink.count({
      where: qb.where,
    }),
  ]);

  return {
    meta: qb.getMeta(total),
    data: result,
  };
};

const getPostsByDocsLinkIdFromDB = async (
  docsLinkId: string,
  status?: string
) => {
  const docsLink = await db.docsLink.findUnique({
    where: {
      id: docsLinkId,
    },
  });

  if (!docsLink) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Docs link not found"
    );
  }

  const where: any = {
    docsLinkId,
  };

  if (status && status !== "All") {
    where.status = status;
  }

  const posts = await db.mediaPost.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    docsLink,
    posts,
  };
};

const deleteDocsLinkFromDB = async (id: string) => {
  return db.$transaction(async (tx) => {
    const docsLink = await tx.docsLink.findUnique({
      where: { id },
    });

    if (!docsLink) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "Docs link not found"
      );
    }

    await tx.mediaPost.deleteMany({
      where: {
        docsLinkId: id,
      },
    });

    await tx.docsLink.delete({
      where: {
        id,
      },
    });

    return docsLink;
  });
};

const getAllPostsFromDB = async (
  query: TQueryInput
) => {
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
      orderBy: {
        createdAt: "desc",
      },
    }),
    db.mediaPost.count({
      where: qb.where,
    }),
  ]);

  return {
    meta: qb.getMeta(total),
    data: result,
  };
};

const updatePostStatusInDB = async (
  postId: string,
  status: "Draft" | "Posted"
) => {
  const post = await db.mediaPost.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Post not found"
    );
  }

  return db.mediaPost.update({
    where: {
      id: postId,
    },
    data: {
      status,
    },
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