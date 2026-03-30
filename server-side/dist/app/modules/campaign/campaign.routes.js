"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.campaignRouter = void 0;
const express_1 = require("express");
const campaign_controller_1 = require("./campaign.controller");
const checkAuth_1 = __importDefault(require("../../middlewares/checkAuth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const campaign_validation_1 = require("./campaign.validation");
const router = (0, express_1.Router)();
router.post("/", (0, checkAuth_1.default)("Admin", "User"), (0, validateRequest_1.default)(campaign_validation_1.CampaignValidation.createCampaignZodSchema), campaign_controller_1.CampaignController.createCampaign);
router.get("/", (0, checkAuth_1.default)("Admin", "User"), campaign_controller_1.CampaignController.getAllCampaigns);
router.get("/:id", (0, checkAuth_1.default)("Admin", "User"), campaign_controller_1.CampaignController.getSingleCampaign);
router.delete("/:id", (0, checkAuth_1.default)("Admin"), campaign_controller_1.CampaignController.deleteCampaign);
exports.campaignRouter = router;
