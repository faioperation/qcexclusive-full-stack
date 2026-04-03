"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma_1 = require("../../db_connection/prisma");
const db = prisma_1.prisma;
// Get All Admins
const getAllAdmins = () => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield db.user.findMany({
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
});
// Get Single Admin
const getSingleAdmin = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield db.user.findUnique({
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
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Admin not found");
    }
    return admin;
});
// Create Admin
const createAdmin = (payload, requestingUserRole) => __awaiter(void 0, void 0, void 0, function* () {
    // Only Admin can create other admins
    if (requestingUserRole !== "Admin") {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Only Admin can create other admins");
    }
    const existingUser = yield db.user.findUnique({
        where: { email: payload.email },
        select: { id: true },
    });
    if (existingUser) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Email already exists");
    }
    const hashedPassword = yield bcrypt_1.default.hash(payload.password, 8);
    const admin = yield db.user.create({
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
});
// Update Admin
const updateAdmin = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield db.user.findUnique({
        where: { id, role: "Admin" },
    });
    if (!admin) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Admin not found");
    }
    const updatedAdmin = yield db.user.update({
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
});
// Delete Admin
const deleteAdmin = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield db.user.findUnique({
        where: { id, role: "Admin" },
    });
    if (!admin) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Admin not found");
    }
    yield db.user.delete({ where: { id } });
    return { message: "Admin deleted successfully" };
});
// Toggle Block/Unblock Admin
const toggleBlockAdmin = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield db.user.findUnique({
        where: { id, role: "Admin" },
    });
    if (!admin) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Admin not found");
    }
    const updatedAdmin = yield db.user.update({
        where: { id },
        data: { isBlocked: !admin.isBlocked },
        select: {
            id: true,
            name: true,
            isBlocked: true,
        },
    });
    return updatedAdmin;
});
exports.adminServices = {
    getAllAdmins,
    getSingleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    toggleBlockAdmin,
};
