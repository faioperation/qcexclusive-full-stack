"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadRouter = void 0;
const express_1 = require("express");
const lead_controller_1 = require("./lead.controller");
const checkAuth_1 = __importDefault(require("../../middlewares/checkAuth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const lead_validation_1 = require("./lead.validation");
const prisma_1 = require("../../../../generated/prisma");
const router = (0, express_1.Router)();
router.get("/", (0, checkAuth_1.default)(prisma_1.ERole.Admin, prisma_1.ERole.User), lead_controller_1.LeadController.getAllLeads);
router.get("/:id", (0, checkAuth_1.default)(prisma_1.ERole.Admin, prisma_1.ERole.User), lead_controller_1.LeadController.getSingleLead);
router.patch("/:id", (0, checkAuth_1.default)(prisma_1.ERole.Admin, prisma_1.ERole.User), (0, validateRequest_1.default)(lead_validation_1.LeadValidation.updateLeadZodSchema), lead_controller_1.LeadController.updateLead);
router.delete("/:id", (0, checkAuth_1.default)(prisma_1.ERole.Admin), lead_controller_1.LeadController.deleteLead);
exports.leadRouter = router;
