"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminValidation = void 0;
const zod_1 = require("zod");
const createAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ message: "Name is required" }),
        email: zod_1.z.string({ message: "Email is required" }).email("Invalid email"),
        password: zod_1.z.string({ message: "Password is required" }).min(6, "Password must be at least 6 characters"),
        contactNo: zod_1.z.string({ message: "Contact number is required" }),
    }),
});
const updateAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email("Invalid email").optional(),
        contactNo: zod_1.z.string().optional(),
        photo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
    }),
});
exports.adminValidation = {
    createAdminZodSchema,
    updateAdminZodSchema,
};
