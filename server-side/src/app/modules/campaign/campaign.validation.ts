import { z } from "zod";
import { EPlatform } from "../../../../generated/prisma";

const createCampaignZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Campaign name is required"),
    description: z.string().optional(),
    firstMessage: z.string().optional(),
    location: z.string().optional(),
    industry: z.string().optional(),
    followerThreshold: z.number().optional(),
    specification: z.string().optional(),
    platform: z.nativeEnum(EPlatform).optional(),
  }),
});

const updateCampaignZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    firstMessage: z.string().optional(),
    location: z.string().optional(),
    industry: z.string().optional(),
    followerThreshold: z.number().optional(),
    specification: z.string().optional(),
    platform: z.nativeEnum(EPlatform).optional(),
    status: z.string().optional(),
  }),
});

export const CampaignValidation = {
  createCampaignZodSchema,
  updateCampaignZodSchema,
};
