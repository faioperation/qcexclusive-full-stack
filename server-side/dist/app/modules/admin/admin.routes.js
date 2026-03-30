"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const admin_controller_1 = require("./admin.controller");
const checkAuth_1 = __importDefault(require("../../middlewares/checkAuth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const admin_validation_1 = require("./admin.validation");
const router = (0, express_1.Router)();
router.get("/", (0, checkAuth_1.default)("Admin"), admin_controller_1.adminControllers.getAllAdmins);
router.get("/:id", (0, checkAuth_1.default)("Admin"), admin_controller_1.adminControllers.getSingleAdmin);
router.post("/create", (0, checkAuth_1.default)("Admin"), (0, validateRequest_1.default)(admin_validation_1.adminValidation.createAdminZodSchema), admin_controller_1.adminControllers.createAdmin);
router.patch("/:id", (0, checkAuth_1.default)("Admin"), (0, validateRequest_1.default)(admin_validation_1.adminValidation.updateAdminZodSchema), admin_controller_1.adminControllers.updateAdmin);
router.delete("/:id", (0, checkAuth_1.default)("Admin"), admin_controller_1.adminControllers.deleteAdmin);
router.patch("/:id/toggle-block", (0, checkAuth_1.default)("Admin"), admin_controller_1.adminControllers.toggleBlockAdmin);
exports.adminRouter = router;
