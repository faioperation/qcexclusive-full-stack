"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const checkAuth_1 = __importDefault(require("../../middlewares/checkAuth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
router.get("/me", (0, checkAuth_1.default)("Admin", "User"), user_controller_1.userControllers.getMyProfile);
router.patch("/me", (0, checkAuth_1.default)("Admin", "User"), (0, validateRequest_1.default)(user_validation_1.userValidation.updateProfileZodSchema), user_controller_1.userControllers.updateMyProfile);
exports.userRouter = router;
