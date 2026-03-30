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
exports.authServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const sendEmail_1 = require("../../utils/sendEmail");
const crypto_1 = __importDefault(require("crypto"));
const prisma_1 = require("../../db_connection/prisma");
const redisConfig_1 = require("../../config/redisConfig");
const db = prisma_1.prisma;
// Login
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const user = yield db.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    if (user.isBlocked) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "User is blocked");
    }
    const isMatch = yield bcrypt_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid credentials");
    }
    return user;
});
// Register User (Admin creates users)
const registerUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield db.user.findUnique({
        where: { email: payload.email },
        select: { id: true },
    });
    if (existingUser) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Email already exists");
    }
    const hashed = yield bcrypt_1.default.hash(payload.password, 8);
    const user = yield db.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: hashed,
            contactNo: payload.contactNo,
            role: payload.role || "User",
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });
    return user;
});
// Forget Password
const generateOtp = (length = 6) => {
    const otp = crypto_1.default.randomInt(10 ** (length - 1), 10 ** length).toString();
    return otp;
};
const forgotPassword_sendPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield db.user.findUnique({
        where: { email: email },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "User does not exist");
    }
    const otp = generateOtp();
    const redisKey = `otp:${email}`;
    yield redisConfig_1.redisClient.set(redisKey, otp, {
        expiration: {
            type: "EX",
            value: 2 * 60,
        },
    });
    yield (0, sendEmail_1.sendEmail)({
        to: email,
        subject: "Your OTP Code",
        tempName: "otp",
        tempData: {
            name: isUserExist.name,
            otp: otp,
        },
    });
});
const verifyOTP = (email, otp) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db.user.findUnique({
        where: { email: email },
    });
    if (!user) {
        throw new ApiError_1.default(404, "User not found");
    }
    const redisKey = `otp:${email}`;
    const savedOtp = yield redisConfig_1.redisClient.get(redisKey);
    if (!savedOtp) {
        throw new ApiError_1.default(401, "Invalid OTP");
    }
    if (savedOtp !== otp) {
        throw new ApiError_1.default(401, "Invalid OTP");
    }
    return { isOTPValid: true };
});
const changePassword = (newPassword, email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    if (!newPassword) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "New password is not found");
    }
    const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
    yield db.user.update({
        where: { email },
        data: {
            password: hashedPassword,
        },
    });
    return {
        success: true,
        message: "Password changed successfully",
    };
});
exports.authServices = {
    loginUser,
    registerUser,
    forgotPassword_sendPassword,
    verifyOTP,
    changePassword,
};
