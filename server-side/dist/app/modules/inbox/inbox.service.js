"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboxService = void 0;
const prisma_1 = require("../../db_connection/prisma");
const db = prisma_1.prisma;
/**
 * Fetches message history for a specific chat thread.
 */
const getMessagesByThreadIdFromDB = (threadId) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield db.outreachMessage.findMany({
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
});
/**
 * Fetches all conversations (leads that have a threadId) for the inbox sidebar.
 */
const getAllConversationsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const leads = yield db.lead.findMany({
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
});
exports.InboxService = {
    getMessagesByThreadIdFromDB,
    getAllConversationsFromDB,
};
