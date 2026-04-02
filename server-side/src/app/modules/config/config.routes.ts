import { Router } from "express";
import { configControllers } from "./config.controller";
import auth from "../../middlewares/checkAuth";
import validateRequest from "../../middlewares/validateRequest";
import { configValidation } from "./config.validation";

const router = Router();

router.get("/", auth("Admin"), configControllers.getAllConfigs);
router.get("/:id", auth("Admin"), configControllers.getSingleConfig);
router.post(
    "/upsert",
    auth("Admin"),
    validateRequest(configValidation.createConfigZodSchema),
    configControllers.upsertConfig
);
router.patch(
    "/:id",
    auth("Admin"),
    validateRequest(configValidation.updateConfigZodSchema),
    configControllers.updateConfig
);
router.delete("/:id", auth("Admin"), configControllers.deleteConfig);

export const configRouter = router;
