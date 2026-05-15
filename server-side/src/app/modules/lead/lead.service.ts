import { Prisma, ELeadStatus } from "../../../../generated/prisma";
import { prisma } from "../../db_connection/prisma";
import { QueryBuilder, TQueryInput, TRelationConfig, TSearchConfig } from "../../utils/QueryBuilder";
import { sendEmail } from "../../utils/sendEmail";
import { outreachQueue } from "../../jobs/outreach.job";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";
import { parsePlaceholders } from "../../utils/placeholderParser";
import { scheduleSevenDayFollowUp } from "../followup/followup.scheduler";

const db = prisma as any;

const getAllLeadsFromDB = async (query: TQueryInput) => {
  const queryBuilder = new QueryBuilder(query)
    .search([
      "name",
      "email",
      { campaign: ["name"] },
      { industry: ["name"] },
      { location: ["city", "state", "country"] },
    ] as TSearchConfig)
    .filter(
      {
        industry: ["industryName"],
        campaign: ["campaignName"],
        location: ["city", "state", "country"],
      } as TRelationConfig,
      ["status", "platform"] // Exact match for enums
    )
    .sort("createdAt", {
      campaign: ["name"],
      industry: ["name"],
      location: ["city", "state", "country"],
    } as TRelationConfig)
    .paginate()
    .fields();

  const prismaQuery = queryBuilder.build();

  // If the query uses "industryName" or "campaignName", QueryBuilder will put them inside industry/campaign objects.
  // We need to make sure the field names inside those objects match the Prisma schema (which is 'name' for both).
  if (prismaQuery.where.industry?.industryName) {
    prismaQuery.where.industry.name = prismaQuery.where.industry.industryName;
    delete prismaQuery.where.industry.industryName;
  }
  if (prismaQuery.where.campaign?.campaignName) {
    prismaQuery.where.campaign.name = prismaQuery.where.campaign.campaignName;
    delete prismaQuery.where.campaign.campaignName;
  }

  // Include relations by default for the table view
  const finalQuery = {
    ...prismaQuery,
    include: {
      campaign: { select: { name: true } },
      industry: { select: { name: true } },
      location: { select: { city: true, state: true, country: true } }
    }
  };

  try {
    const [leads, total] = await Promise.all([
      db.lead.findMany(finalQuery),
      db.lead.count({ where: prismaQuery.where }),
    ]);

    const meta = queryBuilder.getMeta(total);

    return {
      meta,
      data: leads,
    };
  } catch (error) {
    console.error("Prisma Error in getAllLeadsFromDB:", error);
    throw error;
  }
};

const getSingleLeadFromDB = async (id: string) => {
  const lead = await db.lead.findUnique({
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
    throw new ApiError(httpStatus.NOT_FOUND, "Lead not found");
  }
  return lead;
};

const updateLeadInDB = async (id: string, payload: Partial<Prisma.LeadUpdateInput>) => {
  const isExist = await db.lead.findUnique({ where: { id } });
  if (!isExist) {
    console.log("DATABASE URL from updateLeadInDB:", process.env.DATABASE_URL);
    console.log("Lead ID Received:", id);
    throw new ApiError(httpStatus.NOT_FOUND, "Lead not found");
  }
  const result = await db.lead.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteLeadFromDB = async (id: string) => {
  const isExist = await db.lead.findUnique({ where: { id } });
  if (!isExist) {
    console.log("DATABASE URL from deleteLeadFromDB:", process.env.DATABASE_URL);
    console.log("Lead ID Received:", id);
    throw new ApiError(httpStatus.NOT_FOUND, "Lead not found");
  }
  await db.lead.delete({ where: { id } });
  return { message: "Lead deleted successfully" };
};

// ─── Manual Send Email ────────────────────────────────────────────────────────
const sendEmailToLeadInDB = async (leadId: string, message?: string) => {
  // Fetch lead with its associated campaign
  console.log("DATABASE URL:", process.env.DATABASE_URL);
  console.log("Lead ID Received:", leadId);

  const lead = await db.lead.findUnique({
    where: { id: leadId },
    include: { campaign: true },
  });

  console.log("[LeadService] Found lead:", lead);

  if (!lead) {
    console.log("DATABASE URL from sendEmailToLeadInDB:", process.env.DATABASE_URL);
    console.log("Lead ID Received:", leadId);
    throw new ApiError(httpStatus.NOT_FOUND, "Lead not found");
  }

  if (!lead.email) {
    throw new ApiError(httpStatus.BAD_REQUEST, "This lead has no email address on record");
  }

  // Determine the message to send
  const rawMessage = message || lead.campaign?.firstMessage;

  if (!rawMessage) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No message content provided and campaign has no default first message");
  }

  // Parse placeholders (e.g. {{firstName}})
  const messageBody = parsePlaceholders(rawMessage, { name: lead.name });
  const subject = lead.campaign
    ? `Message from ${lead.campaign.name}`
    : "Outreach Message";

  // Send the outreach email (throws on Resend failure)
  const { messageId } = await sendEmail({
    to: lead.email,
    subject,
    tempName: "outreach",
    tempData: { leadName: lead.name, body: messageBody },
  });

  // Record the outreach message
  const outreach = await db.outreachMessage.create({
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
  const updatedLead = await db.lead.update({
    where: { id: leadId },
    data: { status: ELeadStatus.Contacted },
  });

  if (lead.campaignId) {
    try {
      await scheduleSevenDayFollowUp({
        leadId: lead.id,
        campaignId: lead.campaignId,
        initialOutreachMessageId: outreach.id,
      });
    } catch (scheduleErr: unknown) {
      const m =
        scheduleErr instanceof Error ? scheduleErr.message : String(scheduleErr);
      console.error(
        `[LeadService] Email sent but follow-up schedule failed lead=${leadId}:`,
        m
      );
    }
  }

  return updatedLead;
};

const bulkSendEmailToLeadsInDB = async (leadIds: string[], message?: string) => {
  // Validate bulk limit
  if (leadIds.length > 100) {
    throw new ApiError(httpStatus.BAD_REQUEST, "You can only select up to 100 leads for bulk outreach at a time.");
  }

  // Add jobs to the queue for each lead with deduplication (jobId)
  const jobs = leadIds.map((id) => ({
    name: `outreach-${id}`,
    data: { leadId: id, message },
    opts: { jobId: `outreach-${id}-${new Date().toISOString().split('T')[0]}` } // Daily deduplication
  }));

  await outreachQueue.addBulk(jobs);

  return {
    message: `Successfully queued ${leadIds.length} outreach emails`,
    queueCount: leadIds.length
  };
};

const getOutreachQueueStatus = async () => {
  const [waiting, active, completed, failed] = await Promise.all([
    outreachQueue.getWaitingCount(),
    outreachQueue.getActiveCount(),
    outreachQueue.getCompletedCount(),
    outreachQueue.getFailedCount(),
  ]);

  return {
    waiting,
    active,
    completed,
    failed,
    total: waiting + active + completed + failed,
  };
};

export const LeadService = {
  getAllLeadsFromDB,
  getSingleLeadFromDB,
  updateLeadInDB,
  deleteLeadFromDB,
  sendEmailToLeadInDB,
  bulkSendEmailToLeadsInDB,
  getOutreachQueueStatus,
};

