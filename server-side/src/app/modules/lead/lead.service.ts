import { Prisma, ELeadStatus } from "../../../../generated/prisma";
import { prisma } from "../../db_connection/prisma";
import { QueryBuilder, TQueryInput, TRelationConfig, TSearchConfig } from "../../utils/QueryBuilder";
import { sendEmail } from "../../utils/sendEmail";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";

const db = prisma as any;

const getAllLeadsFromDB = async (query: TQueryInput) => {
  console.log("Incoming Query:", query);
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
  console.log("Built Where Clause:", JSON.stringify(prismaQuery.where, null, 2));

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
    throw new ApiError(httpStatus.NOT_FOUND, "Lead not found");
  }
  return lead;
};

const updateLeadInDB = async (id: string, payload: Partial<Prisma.LeadUpdateInput>) => {
  const isExist = await db.lead.findUnique({ where: { id } });
  if (!isExist) {
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
    throw new ApiError(httpStatus.NOT_FOUND, "Lead not found");
  }
  await db.lead.delete({ where: { id } });
  return { message: "Lead deleted successfully" };
};

// ─── Manual Send Email ────────────────────────────────────────────────────────
const sendEmailToLeadInDB = async (leadId: string) => {
  // Fetch lead with its associated campaign
  const lead = await db.lead.findUnique({
    where: { id: leadId },
    include: { campaign: true },
  });

  if (!lead) {
    throw new ApiError(httpStatus.NOT_FOUND, "Lead not found");
  }

  if (!lead.email) {
    throw new ApiError(httpStatus.BAD_REQUEST, "This lead has no email address on record");
  }

  if (!lead.campaign) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Lead is not associated with a campaign");
  }

  if (!lead.campaign.firstMessage) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Campaign has no first message configured");
  }

  // Send the outreach email
  await sendEmail({
    to: lead.email,
    subject: `Message from ${lead.campaign.name}`,
    tempName: "outreach",
    tempData: { leadName: lead.name, body: lead.campaign.firstMessage },
  });

  // Record the outreach message
  await db.outreachMessage.create({
    data: {
      campaignId: lead.campaignId,
      leadId: lead.id,
      body: lead.campaign.firstMessage,
      type: "Email",
      sentAt: new Date(),
    },
  });

  // Mark lead as Contacted
  const updatedLead = await db.lead.update({
    where: { id: leadId },
    data: { status: ELeadStatus.Contacted },
  });

  return updatedLead;
};

export const LeadService = {
  getAllLeadsFromDB,
  getSingleLeadFromDB,
  updateLeadInDB,
  deleteLeadFromDB,
  sendEmailToLeadInDB,
};

