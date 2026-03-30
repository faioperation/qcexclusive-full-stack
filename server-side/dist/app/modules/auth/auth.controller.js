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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const setCookie_1 = require("../../utils/setCookie");
const userToken_1 = require("../../utils/userToken");
const auth_service_1 = require("./auth.service");
const userLogin = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield auth_service_1.authServices.loginUser({ email, password });
    const token = yield (0, userToken_1.createUserToken)(user);
    yield (0, setCookie_1.setCookie)(res, token);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User logged in successfully",
        statusCode: 200,
        data: token,
    });
}));
const registerUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authServices.registerUser(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User registered successfully",
        statusCode: 201,
        data: result,
    });
}));
const userLogout = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User logged out successfully",
        statusCode: 200,
        data: null,
    });
}));
const userForgotPassword = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    yield auth_service_1.authServices.forgotPassword_sendPassword(email);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Password reset email sent successfully",
        statusCode: 200,
        data: null,
    });
}));
const userVerifyOTP = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp } = req.body;
    const isOTPValid = yield auth_service_1.authServices.verifyOTP(email, otp);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "OTP verified successfully",
        statusCode: 200,
        data: isOTPValid,
    });
}));
const userChangePassword = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { newPassword } = req.body;
    const email = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.email;
    yield auth_service_1.authServices.changePassword(newPassword, email);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Password changed successfully",
        statusCode: 200,
        data: null,
    });
}));
exports.authControllers = {
    userLogin,
    registerUser,
    userLogout,
    userForgotPassword,
    userVerifyOTP,
    userChangePassword,
};
