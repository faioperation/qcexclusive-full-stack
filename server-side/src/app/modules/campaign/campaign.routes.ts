import { Router } from "express";
import { CampaignController } from "./campaign.controller";
import auth from "../../middlewares/checkAuth";
import validateRequest from "../../middlewares/validateRequest";
import { CampaignValidation } from "./campaign.validation";

const router = Router();

router.post(
  "/",
  auth("Admin", "User"),
  validateRequest(CampaignValidation.createCampaignZodSchema),
  CampaignController.createCampaign
);

router.get(
  "/",
  auth("Admin", "User"),
  CampaignController.getAllCampaigns
);

router.get(
  "/:id",
  auth("Admin", "User"),
  CampaignController.getSingleCampaign
);

router.delete(
  "/:id",
  auth("Admin"),
  CampaignController.deleteCampaign
);

export const campaignRouter = router;
