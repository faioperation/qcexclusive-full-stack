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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma_2 = require("../../db_connection/prisma");
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const sendEmail_1 = require("../../utils/sendEmail");
const outreach_job_1 = require("../../jobs/outreach.job");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const placeholderParser_1 = require("../../utils/placeholderParser");
const followup_scheduler_1 = require("../followup/followup.scheduler");
const db = prisma_2.prisma;
const getAllLeadsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const queryBuilder = new QueryBuilder_1.QueryBuilder(query)
        .search([
        "name",
        "email",
        { campaign: ["name"] },
        { industry: ["name"] },
        { location: ["city", "state", "country"] },
    ])
        .filter({
        industry: ["industryName"],
        campaign: ["campaignName"],
        location: ["city", "state", "country"],
    }, ["status", "platform"] // Exact match for enums
    )
        .sort("createdAt", {
        campaign: ["name"],
        industry: ["name"],
        location: ["city", "state", "country"],
    })
        .paginate()
        .fields();
    const prismaQuery = queryBuilder.build();
    // If the query uses "industryName" or "campaignName", QueryBuilder will put them inside industry/campaign objects.
    // We need to make sure the field names inside those objects match the Prisma schema (which is 'name' for both).
    if ((_a = prismaQuery.where.industry) === null || _a === void 0 ? void 0 : _a.industryName) {
        prismaQuery.where.industry.name = prismaQuery.where.industry.industryName;
        delete prismaQuery.where.industry.industryName;
    }
    if ((_b = prismaQuery.where.campaign) === null || _b === void 0 ? void 0 : _b.campaignName) {
        prismaQuery.where.campaign.name = prismaQuery.where.campaign.campaignName;
        delete prismaQuery.where.campaign.campaignName;
    }
    // Include relations by default for the table view
    const finalQuery = Object.assign(Object.assign({}, prismaQuery), { include: {
            campaign: { select: { name: true } },
            industry: { select: { name: true } },
            location: { select: { city: true, state: true, country: true } }
        } });
    try {
        const [leads, total] = yield Promise.all([
            db.lead.findMany(finalQuery),
            db.lead.count({ where: prismaQuery.where }),
        ]);
        const meta = queryBuilder.getMeta(total);
        return {
            meta,
            data: leads,
        };
    }
    catch (error) {
        console.error("Prisma Error in getAllLeadsFromDB:", error);
        throw error;
    }
});
const getSingleLeadFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const lead = yield db.lead.findUnique({
        where: { id },
        include: {
            campaign: true,
            industry: true,
            location: true,
            outreachMessages: true
        }
    });
    if (!lead) {
        console.log("DATABASE URL from getSingleLeadFromDB:", process.env.DATABASE_URL);
        console.log("Lead ID Received:", id);
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Lead not found");
    }
    return lead;
});
const updateLeadInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield db.lead.findUnique({ where: { id } });
    if (!isExist) {
        console.log("DATABASE URL from updateLeadInDB:", process.env.DATABASE_URL);
        console.log("Lead ID Received:", id);
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Lead not found");
    }
    const result = yield db.lead.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteLeadFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield db.lead.findUnique({ where: { id } });
    if (!isExist) {
        console.log("DATABASE URL from deleteLeadFromDB:", process.env.DATABASE_URL);
        console.log("Lead ID Received:", id);
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Lead not found");
    }
    yield db.lead.delete({ where: { id } });
    return { message: "Lead deleted successfully" };
});
// ─── Manual Send Email ────────────────────────────────────────────────────────
const sendEmailToLeadInDB = (leadId, message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Fetch lead with its associated campaign
    console.log("DATABASE URL:", process.env.DATABASE_URL);
    console.log("Lead ID Received:", leadId);
    const lead = yield db.lead.findUnique({
        where: { id: leadId },
        include: { campaign: true },
    });
    console.log("[LeadService] Found lead:", lead);
    if (!lead) {
        console.log("DATABASE URL from sendEmailToLeadInDB:", process.env.DATABASE_URL);
        console.log("Lead ID Received:", leadId);
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Lead not found");
    }
    if (!lead.email) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "This lead has no email address on record");
    }
    // Determine the message to send
    const rawMessage = message || ((_a = lead.campaign) === null || _a === void 0 ? void 0 : _a.firstMessage);
    if (!rawMessage) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "No message content provided and campaign has no default first message");
    }
    // Parse placeholders (e.g. {{firstName}})
    const messageBody = (0, placeholderParser_1.parsePlaceholders)(rawMessage, { name: lead.name });
    const subject = lead.campaign
        ? `Message from ${lead.campaign.name}`
        : "Outreach Message";
    // Send the outreach email (throws on Resend failure)
    const { messageId } = yield (0, sendEmail_1.sendEmail)({
        to: lead.email,
        subject,
        tempName: "outreach",
        tempData: { leadName: lead.name, body: messageBody },
    });
    // Record the outreach message
    const outreach = yield db.outreachMessage.create({
        data: {
            campaignId: lead.campaignId || undefined,
            leadId: lead.id,
            subject,
            body: messageBody,
            type: "Email",
            sentAt: new Date(),
            providerMessageId: messageId,
        },
        select: { id: true },
    });
    // Mark lead as Contacted
    const updatedLead = yield db.lead.update({
        where: { id: leadId },
        data: { status: prisma_1.ELeadStatus.Contacted },
    });
    if (lead.campaignId) {
        try {
            yield (0, followup_scheduler_1.scheduleSevenDayFollowUp)({
                leadId: lead.id,
                campaignId: lead.campaignId,
                initialOutreachMessageId: outreach.id,
            });
        }
        catch (scheduleErr) {
            const m = scheduleErr instanceof Error ? scheduleErr.message : String(scheduleErr);
            console.error(`[LeadService] Email sent but follow-up schedule failed lead=${leadId}:`, m);
        }
    }
    return updatedLead;
});
const bulkSendEmailToLeadsInDB = (leadIds, message) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate bulk limit
    if (leadIds.length > 100) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "You can only select up to 100 leads for bulk outreach at a time.");
    }
    // Add jobs to the queue for each lead with deduplication (jobId)
    const jobs = leadIds.map((id) => ({
        name: `outreach-${id}`,
        data: { leadId: id, message },
        opts: { jobId: `outreach-${id}-${new Date().toISOString().split('T')[0]}` } // Daily deduplication
    }));
    yield outreach_job_1.outreachQueue.addBulk(jobs);
    return {
        message: `Successfully queued ${leadIds.length} outreach emails`,
        queueCount: leadIds.length
    };
});
const getOutreachQueueStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const [waiting, active, completed, failed] = yield Promise.all([
        outreach_job_1.outreachQueue.getWaitingCount(),
        outreach_job_1.outreachQueue.getActiveCount(),
        outreach_job_1.outreachQueue.getCompletedCount(),
        outreach_job_1.outreachQueue.getFailedCount(),
    ]);
    return {
        waiting,
        active,
        completed,
        failed,
        total: waiting + active + completed + failed,
    };
});
exports.LeadService = {
    getAllLeadsFromDB,
    getSingleLeadFromDB,
    updateLeadInDB,
    deleteLeadFromDB,
    sendEmailToLeadInDB,
    bulkSendEmailToLeadsInDB,
    getOutreachQueueStatus,
};
