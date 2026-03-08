import { z } from "zod";

const createAdminZodSchema = z.object({
    body: z.object({
        name: z.string({ message: "Name is required" }),
        email: z.string({ message: "Email is required" }).email("Invalid email"),
        password: z.string({ message: "Password is required" }).min(6, "Password must be at least 6 characters"),
        contactNo: z.string({ message: "Contact number is required" }),
    }),
});

const updateAdminZodSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email("Invalid email").optional(),
        contactNo: z.string().optional(),
        photo: z.string().optional(),
        address: z.string().optional(),
    }),
});

export const adminValidation = {
    createAdminZodSchema,
    updateAdminZodSchema,
};
