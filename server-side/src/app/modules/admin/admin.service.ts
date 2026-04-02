import bcrypt from "bcrypt";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";
import { prisma } from "../../db_connection/prisma";

const db = prisma as any;

// Get All Admins
const getAllAdmins = async () => {
    const admins = await db.user.findMany({
        where: { role: "Admin" },
        select: {
            id: true,
            name: true,
            email: true,
            contactNo: true,
            photo: true,
            isBlocked: true,
            createdAt: true,
        },
        orderBy: { createdAt: "desc" },
    });
    return admins;
};

// Get Single Admin
const getSingleAdmin = async (id: string) => {
    const admin = await db.user.findUnique({
        where: { id, role: "Admin" },
        select: {
            id: true,
            name: true,
            email: true,
            contactNo: true,
            photo: true,
            address: true,
            isBlocked: true,
            createdAt: true,
            updatedAt: true,
        },
    });

    if (!admin) {
        throw new ApiError(httpStatus.NOT_FOUND, "Admin not found");
    }

    return admin;
};

// Create Admin
const createAdmin = async (payload: {
    name: string;
    email: string;
    password: string;
    contactNo: string;
}, requestingUserRole: string) => {
    // Only Admin can create other admins
    if (requestingUserRole !== "Admin") {
        throw new ApiError(httpStatus.FORBIDDEN, "Only Admin can create other admins");
    }

    const existingUser = await db.user.findUnique({
        where: { email: payload.email },
        select: { id: true },
    });

    if (existingUser) {
        throw new ApiError(httpStatus.CONFLICT, "Email already exists");
    }

    const hashedPassword = await bcrypt.hash(payload.password, 8);

    const admin = await db.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: hashedPassword,
            contactNo: payload.contactNo,
            role: "Admin",
        },
        select: {
            id: true,
            name: true,
            email: true,
            contactNo: true,
            role: true,
            createdAt: true,
        },
    });

    return admin;
};

// Update Admin
const updateAdmin = async (
    id: string,
    payload: { name?: string; email?: string; contactNo?: string; photo?: string; address?: string }
) => {
    const admin = await db.user.findUnique({
        where: { id, role: "Admin" },
    });

    if (!admin) {
        throw new ApiError(httpStatus.NOT_FOUND, "Admin not found");
    }

    const updatedAdmin = await db.user.update({
        where: { id },
        data: payload,
        select: {
            id: true,
            name: true,
            email: true,
            contactNo: true,
            photo: true,
            address: true,
            updatedAt: true,
        },
    });

    return updatedAdmin;
};

// Delete Admin
const deleteAdmin = async (id: string) => {
    const admin = await db.user.findUnique({
        where: { id, role: "Admin" },
    });

    if (!admin) {
        throw new ApiError(httpStatus.NOT_FOUND, "Admin not found");
    }

    await db.user.delete({ where: { id } });

    return { message: "Admin deleted successfully" };
};

// Toggle Block/Unblock Admin
const toggleBlockAdmin = async (id: string) => {
    const admin = await db.user.findUnique({
        where: { id, role: "Admin" },
    });

    if (!admin) {
        throw new ApiError(httpStatus.NOT_FOUND, "Admin not found");
    }

    const updatedAdmin = await db.user.update({
        where: { id },
        data: { isBlocked: !admin.isBlocked },
        select: {
            id: true,
            name: true,
            isBlocked: true,
        },
    });

    return updatedAdmin;
};

export const adminServices = {
    getAllAdmins,
    getSingleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    toggleBlockAdmin,
};
