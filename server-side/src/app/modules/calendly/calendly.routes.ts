import { Router } from "express";
import { CalendlyController } from "./calendly.controller";
import { handleCalendlyWebhook } from "./calendly.webhook";
import auth from "../../middlewares/checkAuth";

const router = Router();

// API routes
router.post(
  "/events",
  auth("Admin", "User"),
  CalendlyController.createEvent
);

router.patch(
  "/events/:eventId",
  auth("Admin", "User"),
  CalendlyController.updateEvent
);

router.delete(
  "/events/:eventId",
  auth("Admin", "User"),
  CalendlyController.cancelEvent
);

router.get(
  "/events/:eventId",
  auth("Admin", "User"),
  CalendlyController.getEvent
);

// Webhook route
router.post(
  "/webhook/calendly",
  handleCalendlyWebhook
);

export const calendlyRouter = router;
