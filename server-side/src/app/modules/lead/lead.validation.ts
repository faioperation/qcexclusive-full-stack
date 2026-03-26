import { z } from "zod";
import { Prisma, ELeadStatus, EPlatform } from "../../../generated/prisma/client";

const createLeadZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    platform: z.nativeEnum(EPlatform),
    platformUrl: z.string().url().optional(),
    profileUsername: z.string().optional(),
    followerCount: z.number().optional(),
    bio: z.string().optional(),
    imageUrl: z.string().url().optional(),
    website: z.string().url().optional(),
    totalScore: z.number().min(0).max(5).optional(),
    status: z.nativeEnum(ELeadStatus).optional(),
    industryId: z.string().uuid().optional(),
    locationId: z.string().uuid().optional(),
    campaignId: z.string().uuid().optional(),
    scrapingJobId: z.string().uuid().optional(),
    gmailThreadId: z.string().optional(),
  }),
});

const updateLeadZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    platform: z.nativeEnum(EPlatform).optional(),
    platformUrl: z.string().url().optional(),
    profileUsername: z.string().optional(),
    followerCount: z.number().optional(),
    bio: z.string().optional(),
    imageUrl: z.string().url().optional(),
    website: z.string().url().optional(),
    totalScore: z.number().min(0).max(5).optional(),
    status: z.nativeEnum(ELeadStatus).optional(),
    industryId: z.string().uuid().optional(),
    locationId: z.string().uuid().optional(),
    campaignId: z.string().uuid().optional(),
    scrapingJobId: z.string().uuid().optional(),
    gmailThreadId: z.string().optional(),
  }),
});

export const LeadValidation = {
  createLeadZodSchema,
  updateLeadZodSchema,
};
