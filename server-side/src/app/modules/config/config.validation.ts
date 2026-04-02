import { z } from "zod";

const createConfigZodSchema = z.object({
    body: z.object({
        key: z.string({ required_error: "Key is required" }),
        value: z.string({ required_error: "Value is required" }),
    }),
});

const updateConfigZodSchema = z.object({
    body: z.object({
        value: z.string().optional(),
    }),
});

export const configValidation = {
    createConfigZodSchema,
    updateConfigZodSchema,
};
