import { Router } from "express";
import { AIController } from "./ai.controller";
import auth from "../../middlewares/checkAuth";

const router = Router();

router.get(
  "/stats",
  auth("Admin", "User"),
  AIController.getAIStats
);

router.post(
  "/toggle-auto-reply",
  auth("Admin", "User"),
  AIController.toggleAutoReply
);

router.post(
  "/messages/:messageId/generate-reply",
  auth("Admin", "User"),
  AIController.generateReply
);

export const aiRouter = router;
