"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignValidation = void 0;
const zod_1 = require("zod");
const client_1 = require("../../../generated/prisma/client");
const createCampaignZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Campaign name is required"),
        description: zod_1.z.string().optional(),
        firstMessage: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        industry: zod_1.z.string().optional(),
        followerThreshold: zod_1.z.number().optional(),
        specification: zod_1.z.string().optional(),
        platform: zod_1.z.nativeEnum(client_1.EPlatform).optional(),
    }),
});
const updateCampaignZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        firstMessage: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        industry: zod_1.z.string().optional(),
        followerThreshold: zod_1.z.number().optional(),
        specification: zod_1.z.string().optional(),
        platform: zod_1.z.nativeEnum(client_1.EPlatform).optional(),
        status: zod_1.z.string().optional(),
    }),
});
exports.CampaignValidation = {
    createCampaignZodSchema,
    updateCampaignZodSchema,
};
