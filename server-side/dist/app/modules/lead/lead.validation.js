"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadValidation = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../../../../generated/prisma");
const createLeadZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().optional(),
        platform: zod_1.z.nativeEnum(prisma_1.EPlatform),
        platformUrl: zod_1.z.string().url().optional(),
        profileUsername: zod_1.z.string().optional(),
        followerCount: zod_1.z.number().optional(),
        bio: zod_1.z.string().optional(),
        imageUrl: zod_1.z.string().url().optional(),
        website: zod_1.z.string().url().optional(),
        totalScore: zod_1.z.number().min(0).max(5).optional(),
        status: zod_1.z.nativeEnum(prisma_1.ELeadStatus).optional(),
        industryId: zod_1.z.string().uuid().optional(),
        locationId: zod_1.z.string().uuid().optional(),
        campaignId: zod_1.z.string().uuid().optional(),
        scrapingJobId: zod_1.z.string().uuid().optional(),
        gmailThreadId: zod_1.z.string().optional(),
    }),
});
const updateLeadZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().optional(),
        platform: zod_1.z.nativeEnum(prisma_1.EPlatform).optional(),
        platformUrl: zod_1.z.string().url().optional(),
        profileUsername: zod_1.z.string().optional(),
        followerCount: zod_1.z.number().optional(),
        bio: zod_1.z.string().optional(),
        imageUrl: zod_1.z.string().url().optional(),
        website: zod_1.z.string().url().optional(),
        totalScore: zod_1.z.number().min(0).max(5).optional(),
        status: zod_1.z.nativeEnum(prisma_1.ELeadStatus).optional(),
        industryId: zod_1.z.string().uuid().optional(),
        locationId: zod_1.z.string().uuid().optional(),
        campaignId: zod_1.z.string().uuid().optional(),
        scrapingJobId: zod_1.z.string().uuid().optional(),
        gmailThreadId: zod_1.z.string().optional(),
    }),
});
exports.LeadValidation = {
    createLeadZodSchema,
    updateLeadZodSchema,
};
