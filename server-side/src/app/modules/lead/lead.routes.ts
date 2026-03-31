import { Router } from "express";
import { LeadController } from "./lead.controller";
import auth from "../../middlewares/checkAuth";
import validateRequest from "../../middlewares/validateRequest";
import { LeadValidation } from "./lead.validation";
import { ERole } from "../../../../generated/prisma";

const router = Router();

router.get(
    "/", 
    auth(ERole.Admin, ERole.User), 
    LeadController.getAllLeads
);

router.get(
    "/:id", 
    auth(ERole.Admin, ERole.User), 
    LeadController.getSingleLead
);

router.patch(
    "/:id", 
    auth(ERole.Admin, ERole.User), 
    validateRequest(LeadValidation.updateLeadZodSchema), 
    LeadController.updateLead
);

router.delete(
    "/:id", 
    auth(ERole.Admin), 
    LeadController.deleteLead
);

export const leadRouter = router;
