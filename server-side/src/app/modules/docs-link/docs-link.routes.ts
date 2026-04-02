import { Router } from "express";
import { DocsLinkController } from "./docs-link.controller";
import auth from "../../middlewares/checkAuth";
import validateRequest from "../../middlewares/validateRequest";
import { DocsLinkValidation } from "./docs-link.validation";

const router = Router();

// Create a new docs link (auto-generates sample posts)
router.post(
  "/",
  auth("Admin", "User"),
  validateRequest(DocsLinkValidation.createDocsLinkZodSchema),
  DocsLinkController.createDocsLink
);

// Get all docs links (paginated list - the table view)
router.get(
  "/",
  auth("Admin", "User"),
  DocsLinkController.getAllDocsLinks
);

// Get all posts across all docs links (for MediaPostsPage pagination & search)
router.get(
  "/posts/all",
  auth("Admin", "User"),
  DocsLinkController.getAllPosts
);

// Get all posts for a specific docs link (eye button view)
// Supports ?status=All|Posted|Draft
router.get(
  "/:id/posts",
  auth("Admin", "User"),
  DocsLinkController.getPostsByDocsLinkId
);

// Delete a docs link and all its posts
router.delete(
  "/:id",
  auth("Admin"),
  DocsLinkController.deleteDocsLink
);

export const docsLinkRouter = router;
