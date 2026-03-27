import { Router } from "express";
import { InboxController } from "./inbox.controller";
import auth from "../../middlewares/checkAuth";

const router = Router();

router.get(
  "/conversations",
  auth("Admin", "User"),
  InboxController.getAllConversations
);

router.get(
  "/:threadId",
  auth("Admin", "User"),
  InboxController.getMessagesByThreadId
);

router.get(
  "/sync",
  auth("Admin", "User"),
  InboxController.syncInbox
);

export const inboxRouter = router;
