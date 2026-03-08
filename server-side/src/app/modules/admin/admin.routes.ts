import { Router } from "express";
import { adminControllers } from "./admin.controller";
import auth from "../../middlewares/checkAuth";
import validateRequest from "../../middlewares/validateRequest";
import { adminValidation } from "./admin.validation";

const router = Router();

router.get("/", auth("Admin"), adminControllers.getAllAdmins);
router.get("/:id", auth("Admin"), adminControllers.getSingleAdmin);
router.post(
    "/create",
    auth("Admin"),
    validateRequest(adminValidation.createAdminZodSchema),
    adminControllers.createAdmin
);
router.patch(
    "/:id",
    auth("Admin"),
    validateRequest(adminValidation.updateAdminZodSchema),
    adminControllers.updateAdmin
);
router.delete("/:id", auth("Admin"), adminControllers.deleteAdmin);
router.patch("/:id/toggle-block", auth("Admin"), adminControllers.toggleBlockAdmin);

export const adminRouter = router;
