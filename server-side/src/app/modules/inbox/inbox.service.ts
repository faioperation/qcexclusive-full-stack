import { prisma } from "../../db_connection/prisma";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";

const db = prisma as any;

/**
 * Fetches message history for a specific chat thread.
 */
const getMessagesByThreadIdFromDB = async (threadId: string) => {
  const messages = await db.outreachMessage.findMany({
    where: { gmailThreadId: threadId },
    orderBy: { createdAt: "asc" },
    include: {
      lead: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  return messages;
};

/**
 * Fetches all conversations (leads that have a threadId) for the inbox sidebar.
 */
const getAllConversationsFromDB = async () => {
  const leads = await db.lead.findMany({
    where: {
      gmailThreadId: { not: null },
    },
    select: {
      id: true,
      name: true,
      gmailThreadId: true,
      imageUrl: true,
      outreachMessages: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });

  return leads;
};

export const InboxService = {
  getMessagesByThreadIdFromDB,
  getAllConversationsFromDB,
};
