import { Router } from "express";
import auth from "../../middlewares/checkAuth";
import { MeetingController } from "./meeting.controller";

const router = Router();

router.get(
  "/",
  auth("Admin", "User"),
  MeetingController.getAllMeetings
);

router.patch(
  "/:id",
  auth("Admin"),
  MeetingController.updateMeeting
);

export const meetingRouter = router;
