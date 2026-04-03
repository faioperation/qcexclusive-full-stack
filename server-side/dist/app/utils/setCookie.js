"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = void 0;
const config_1 = __importDefault(require("../config"));
const setCookie = (res, token) => {
    const isProduction = config_1.default.NODE_ENV === "production";
    const cookieOptions = {
        httpOnly: true,
        secure: isProduction, // false in dev/HTTP, true in prod/HTTPS
        sameSite: isProduction ? "none" : "lax",
    };
    if (token.accessToken) {
        res.cookie("accessToken", token.accessToken, cookieOptions);
    }
    if (token.refreshToken) {
        res.cookie("refreshToken", token.refreshToken, cookieOptions);
    }
};
exports.setCookie = setCookie;
