"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncInboxReplies = void 0;
const imapflow_1 = require("imapflow");
const mailparser_1 = require("mailparser");
const prisma_1 = require("../../db_connection/prisma");
const config_1 = __importDefault(require("../../config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const followup_scheduler_1 = require("../followup/followup.scheduler");
const aiReplyProcessor_service_1 = require("../../services/ai/aiReplyProcessor.service");
const openai_service_1 = require("../../services/ai/openai.service");
const db = prisma_1.prisma;
/**
 * Syncs email replies from the IMAP server (Gmail).
 */
const syncInboxReplies = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    var _d, _e, _f, _g, _h;
    console.log("[InboxSync] Starting email synchronization...");
    const client = new imapflow_1.ImapFlow({
        host: "imap.gmail.com",
        port: 993,
        secure: true,
        auth: {
            user: config_1.default.SMTP_USER,
            pass: config_1.default.SMTP_PASS,
        },
        logger: false,
    });
    try {
        yield client.connect();
        // Lock the INBOX while we process
        let lock = yield client.getMailboxLock("INBOX");
        try {
            // 1. Search for all "Unseen" messages
            const sequence = yield client.search({ seen: false });
            if (sequence && sequence.length > 0) {
                // 2. Fetch the sources for those messages
                const messages = yield client.fetch(sequence, { source: true });
                try {
                    for (var _j = true, messages_1 = __asyncValues(messages), messages_1_1; messages_1_1 = yield messages_1.next(), _a = messages_1_1.done, !_a; _j = true) {
                        _c = messages_1_1.value;
                        _j = false;
                        let message = _c;
                        if (!message.source)
                            continue;
                        const parsed = yield (0, mailparser_1.simpleParser)(message.source);
                        const fromValue = parsed.from;
                        const senderEmail = Array.isArray(fromValue)
                            ? (_e = (_d = fromValue[0]) === null || _d === void 0 ? void 0 : _d.value[0]) === null || _e === void 0 ? void 0 : _e.address
                            : (_f = fromValue === null || fromValue === void 0 ? void 0 : fromValue.value[0]) === null || _f === void 0 ? void 0 : _f.address;
                        const subject = parsed.subject || "(No Subject)";
                        const body = parsed.text || parsed.html || "";
                        const emailDate = parsed.date || new Date();
                        if (!senderEmail)
                            continue;
                        console.log(`[InboxSync] Processing message from: ${senderEmail}`);
                        // 1. Find the lead associated with this email
                        const lead = yield db.lead.findFirst({
                            where: { email: { equals: senderEmail, mode: "insensitive" } },
                            orderBy: { createdAt: "desc" },
                        });
                        if (lead) {
                            console.log(`[InboxSync] Lead found: ${lead.name} (ID: ${lead.id})`);
                            yield (0, followup_scheduler_1.cancelPendingFollowUpForLead)(lead.id).catch((err) => {
                                const m = err instanceof Error ? err.message : String(err);
                                console.warn(`[InboxSync] Follow-up cancel failed for lead ${lead.id}:`, m);
                            });
                            if (!lead.campaignId) {
                                console.warn(`[InboxSync] Lead ${lead.id} has no campaignId; skipping reply persistence`);
                            }
                            else {
                                // Create the reply message first
                                const replyMessage = yield db.outreachMessage.create({
                                    data: {
                                        leadId: lead.id,
                                        campaignId: lead.campaignId,
                                        subject: subject,
                                        body: body,
                                        type: "Email",
                                        senderType: "Lead",
                                        sentAt: emailDate,
                                        gmailThreadId: lead.gmailThreadId || lead.id,
                                    },
                                });
                                // Process with AI for classification and potential auto-reply
                                try {
                                    yield (0, aiReplyProcessor_service_1.processIncomingReply)({
                                        messageId: replyMessage.id,
                                        leadId: lead.id,
                                        campaignId: lead.campaignId,
                                        subject: subject,
                                        body: body,
                                        leadName: lead.name,
                                        campaignName: (_g = lead.campaign) === null || _g === void 0 ? void 0 : _g.name,
                                        autoReplyEnabled: true // Default to true, can be made configurable
                                    });
                                    // Schedule AI reply via queue for interested/pricing/meeting requests
                                    const aiResult = yield (0, openai_service_1.processEmailReply)(body, subject, lead.name, (_h = lead.campaign) === null || _h === void 0 ? void 0 : _h.name);
                                    if (['Interested', 'PricingRequest', 'MeetingRequest'].includes(aiResult.classification.classification) && aiResult.reply) {
                                        // Import queue dynamically to avoid circular imports
                                        const aiReplyModule = yield Promise.resolve().then(() => __importStar(require('../../jobs/aiReply.job')));
                                        const { aiReplyQueue } = aiReplyModule;
                                        yield aiReplyQueue.add('send-ai-reply', {
                                            messageId: replyMessage.id,
                                            leadId: lead.id,
                                            campaignId: lead.campaignId,
                                            leadName: lead.name,
                                            leadEmail: lead.email,
                                            aiGeneratedReply: aiResult.reply,
                                            classification: aiResult.classification.classification,
                                        }, {
                                            // Delay AI replies by 5-10 minutes to seem more natural
                                            delay: Math.random() * 300000 + 300000, // 5-10 minutes
                                            attempts: 3,
                                            backoff: {
                                                type: 'exponential',
                                                delay: 10000,
                                            },
                                        });
                                        console.log(`[InboxSync] Scheduled AI reply for lead ${lead.id}`);
                                    }
                                }
                                catch (aiError) {
                                    console.error(`[InboxSync] AI processing failed for lead ${lead.id}:`, aiError);
                                    // Continue without AI processing - don't break sync
                                }
                            }
                            // 3. Automated Meeting Detection
                            // Simple regex to look for dates like "1 June 2026" or "10:30 AM"
                            // In a real app, this would use AI (e.g. GPT) for extraction
                            const dateMatch = body.match(/(\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4})/i);
                            const timeMatch = body.match(/(\d{1,2}:\d{2}\s*(AM|PM))/i);
                            if (dateMatch && timeMatch) {
                                const dateStr = dateMatch[1];
                                const timeStr = timeMatch[1];
                                const startDateTime = new Date(`${dateStr} ${timeStr}`);
                                const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // Default 1 hour duration
                                yield db.meeting.create({
                                    data: {
                                        title: `Meeting with ${lead.name}`,
                                        leadId: lead.id,
                                        campaignId: lead.campaignId,
                                        startTime: startDateTime,
                                        endTime: endDateTime,
                                        status: "Scheduled",
                                        meetingLink: config_1.default.DEFAULT_MEETING_LINK, // Default link
                                    },
                                });
                                console.log(`[InboxSync] Automated meeting created for ${lead.name} at ${startDateTime}`);
                            }
                            // 4. Update status to Interested (indicating engagement)
                            yield db.lead.update({
                                where: { id: lead.id },
                                data: { status: "Interested" },
                            });
                            console.log(`[InboxSync] Successfully saved reply for ${lead.name}`);
                        }
                        else {
                            console.warn(`[InboxSync] No matching lead found for email: ${senderEmail}`);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_j && !_a && (_b = messages_1.return)) yield _b.call(messages_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                console.log("[InboxSync] No new unseen messages found.");
            }
        }
        finally {
            // Release the lock
            lock.release();
        }
        yield client.logout();
        console.log("[InboxSync] Synchronization complete.");
    }
    catch (error) {
        console.error("[InboxSync] Fatal Error:", error.message);
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Email sync failed: " + error.message);
    }
});
exports.syncInboxReplies = syncInboxReplies;
