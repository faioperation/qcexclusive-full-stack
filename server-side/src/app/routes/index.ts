import { Router } from "express";

import { authRouter } from "../modules/auth/auth.routes";
import { adminRouter } from "../modules/admin/admin.routes";
import { userRouter } from "../modules/user/user.routes";


export const rootRoute = Router()

const modelRoutes = [
    { path: "/auth", element: authRouter },
    { path: "/admin", element: adminRouter },
    { path: "/user", element: userRouter },
]

modelRoutes.forEach((route) => {
    rootRoute.use(route.path, route.element)
})