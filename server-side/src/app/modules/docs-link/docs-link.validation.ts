import { z } from "zod";

const createDocsLinkZodSchema = z.object({
  body: z.object({
    name: z.string({ message: "Name is required" }),
    projectName: z.string({ message: "Project name is required" }),
    docsLink: z.string({ message: "Docs link is required" }),
    prompt: z.string().optional(),
    postGenerate: z
      .number()
      .int()
      .min(1, "Must generate at least 1 post")
      .max(50, "Cannot generate more than 50 posts")
      .default(1),
  }),
});

export const DocsLinkValidation = {
  createDocsLinkZodSchema,
};
