"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const zod_1 = require("zod");
const loginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ message: "Email is required" }).email("Invalid email"),
        password: zod_1.z.string({ message: "Password is required" }),
    }),
});
const registerUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ message: "Name is required" }),
        email: zod_1.z.string({ message: "Email is required" }).email("Invalid email"),
        password: zod_1.z.string({ message: "Password is required" }).min(6, "Password must be at least 6 characters"),
        contactNo: zod_1.z.string({ message: "Contact number is required" }),
        role: zod_1.z.enum(["Admin", "User"]).optional(),
    }),
});
const changePasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ message: "Email is required" }).email("Invalid email"),
        newPassword: zod_1.z.string({ message: "New password is required" }).min(6, "Password must be at least 6 characters"),
    }),
});
const forgotPasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ message: "Email is required" }).email("Invalid email"),
    }),
});
const verifyOtpZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ message: "Email is required" }).email("Invalid email"),
        otp: zod_1.z.string({ message: "OTP is required" }),
    }),
});
exports.authValidation = {
    loginZodSchema,
    registerUserZodSchema,
    changePasswordZodSchema,
    forgotPasswordZodSchema,
    verifyOtpZodSchema,
};
