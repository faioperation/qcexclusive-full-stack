"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsLinkValidation = void 0;
const zod_1 = require("zod");
const createDocsLinkZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ message: "Name is required" }),
        projectName: zod_1.z.string({ message: "Project name is required" }),
        docsLink: zod_1.z.string({ message: "Docs link is required" }),
        prompt: zod_1.z.string().optional(),
        postGenerate: zod_1.z
            .number()
            .int()
            .min(1, "Must generate at least 1 post")
            .max(50, "Cannot generate more than 50 posts")
            .default(1),
    }),
});
exports.DocsLinkValidation = {
    createDocsLinkZodSchema,
};
