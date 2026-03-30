"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inboxRouter = void 0;
const express_1 = require("express");
const inbox_controller_1 = require("./inbox.controller");
const checkAuth_1 = __importDefault(require("../../middlewares/checkAuth"));
const router = (0, express_1.Router)();
router.get("/conversations", (0, checkAuth_1.default)("Admin", "User"), inbox_controller_1.InboxController.getAllConversations);
router.get("/:threadId", (0, checkAuth_1.default)("Admin", "User"), inbox_controller_1.InboxController.getMessagesByThreadId);
router.get("/sync", (0, checkAuth_1.default)("Admin", "User"), inbox_controller_1.InboxController.syncInbox);
exports.inboxRouter = router;
