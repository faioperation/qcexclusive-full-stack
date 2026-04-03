"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsLinkRouter = void 0;
const express_1 = require("express");
const docs_link_controller_1 = require("./docs-link.controller");
const checkAuth_1 = __importDefault(require("../../middlewares/checkAuth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const docs_link_validation_1 = require("./docs-link.validation");
const router = (0, express_1.Router)();
// Create a new docs link (auto-generates sample posts)
router.post("/", (0, checkAuth_1.default)("Admin", "User"), (0, validateRequest_1.default)(docs_link_validation_1.DocsLinkValidation.createDocsLinkZodSchema), docs_link_controller_1.DocsLinkController.createDocsLink);
// Get all docs links (paginated list - the table view)
router.get("/", (0, checkAuth_1.default)("Admin", "User"), docs_link_controller_1.DocsLinkController.getAllDocsLinks);
// Get all posts across all docs links (for MediaPostsPage pagination & search)
router.get("/posts/all", (0, checkAuth_1.default)("Admin", "User"), docs_link_controller_1.DocsLinkController.getAllPosts);
router.patch("/posts/:postId/status", (0, checkAuth_1.default)("Admin", "User"), docs_link_controller_1.DocsLinkController.updatePostStatus);
// Get all posts for a specific docs link (eye button view)
// Supports ?status=All|Posted|Draft
router.get("/:id/posts", (0, checkAuth_1.default)("Admin", "User"), docs_link_controller_1.DocsLinkController.getPostsByDocsLinkId);
// Delete a docs link and all its posts
router.delete("/:id", (0, checkAuth_1.default)("Admin"), docs_link_controller_1.DocsLinkController.deleteDocsLink);
exports.docsLinkRouter = router;
