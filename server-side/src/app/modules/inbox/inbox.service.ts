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
      OR: [
        { gmailThreadId: { not: null } },
        { outreachMessages: { some: {} } }
      ]
    },
    select: {
      id: true,
      name: true,
      email: true,
      gmailThreadId: true,
      imageUrl: true,
      updatedAt: true,
      outreachMessages: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
    orderBy: { updatedAt: "desc" }
  });

  return leads;
};

const getMessagesByLeadIdFromDB = async (leadId: string) => {
  const messages = await db.outreachMessage.findMany({
    where: { leadId },
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

export const InboxService = {
  getMessagesByThreadIdFromDB,
  getMessagesByLeadIdFromDB,
  getAllConversationsFromDB,
};
