import { Router } from "express";
import { authRouter } from "../modules/auth/auth.routes";
import { adminRouter } from "../modules/admin/admin.routes";
import { userRouter } from "../modules/user/user.routes";
import { leadRouter } from "../modules/lead/lead.routes";
import { inboxRouter } from "../modules/inbox/inbox.routes";
import { campaignRouter } from "../modules/campaign/campaign.routes";
import { docsLinkRouter } from "../modules/docs-link/docs-link.routes";


export const rootRoute = Router()

const modelRoutes = [
    { path: "/auth", element: authRouter },
    { path: "/admin", element: adminRouter },
    { path: "/user", element: userRouter },
    { path: "/campaign", element: campaignRouter },
    { path: "/lead", element: leadRouter },
    { path: "/inbox", element: inboxRouter },
    { path: "/docs-link", element: docsLinkRouter },
]

modelRoutes.forEach((route) => {
    rootRoute.use(route.path, route.element)
})