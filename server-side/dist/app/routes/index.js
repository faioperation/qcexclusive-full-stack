"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoute = void 0;
const express_1 = require("express");
const auth_routes_1 = require("../modules/auth/auth.routes");
const admin_routes_1 = require("../modules/admin/admin.routes");
const user_routes_1 = require("../modules/user/user.routes");
const lead_routes_1 = require("../modules/lead/lead.routes");
const inbox_routes_1 = require("../modules/inbox/inbox.routes");
const campaign_routes_1 = require("../modules/campaign/campaign.routes");
const docs_link_routes_1 = require("../modules/docs-link/docs-link.routes");
exports.rootRoute = (0, express_1.Router)();
const modelRoutes = [
    { path: "/auth", element: auth_routes_1.authRouter },
    { path: "/admin", element: admin_routes_1.adminRouter },
    { path: "/user", element: user_routes_1.userRouter },
    { path: "/campaign", element: campaign_routes_1.campaignRouter },
    { path: "/lead", element: lead_routes_1.leadRouter },
    { path: "/inbox", element: inbox_routes_1.inboxRouter },
    { path: "/docs-link", element: docs_link_routes_1.docsLinkRouter },
];
modelRoutes.forEach((route) => {
    exports.rootRoute.use(route.path, route.element);
});
