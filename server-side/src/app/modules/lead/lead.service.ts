import { Prisma, ELeadStatus, EPlatform } from "../../../generated/prisma/client";
import { prisma } from "../../db_connection/prisma";
import { QueryBuilder, TQueryInput, TRelationConfig, TSearchConfig } from "../../utils/QueryBuilder";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";

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
    .filter({
      industry: ["name"],
      location: ["city", "state", "country"],
      campaign: ["name"],
    } as TRelationConfig)
    .sort("createdAt", {
      campaign: ["name"],
      industry: ["name"],
      location: ["city", "state", "country"],
    } as TRelationConfig)
    .paginate()
    .fields();

  const prismaQuery = queryBuilder.build();
  
  // Include relations by default for the table view
  const finalQuery = {
    ...prismaQuery,
    include: {
        campaign: { select: { name: true } },
        industry: { select: { name: true } },
        location: { select: { city: true, state: true, country: true } }
    }
  };

  const [leads, total] = await Promise.all([
    db.lead.findMany(finalQuery),
    db.lead.count({ where: prismaQuery.where }),
  ]);

  const meta = queryBuilder.getMeta(total);

  return {
    meta,
    data: leads,
  };
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

export const LeadService = {
  getAllLeadsFromDB,
  getSingleLeadFromDB,
  updateLeadInDB,
  deleteLeadFromDB,
};
