// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import { IUser } from "./services/auth/auth.types";

const authRoutes = ["/login", "/register"];
const roleBaseRoutes = {
  Admin: [/^\//],
  User: [/^\//],
};
type TRole = keyof typeof roleBaseRoutes;

// ✅ Must be named `middleware` for Next.js to recognize it
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ Read cookie directly from request (Edge Runtime compatible)
  const token = request.cookies.get("accessToken")?.value;

  let userData: IUser | null = null;
  if (token) {
    try {
      userData = jwtDecode<IUser>(token);
    } catch {
      userData = null;
    }
  }

  if (userData && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!userData) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (userData.role && roleBaseRoutes[userData.role as TRole]) {
    const validRoutes = roleBaseRoutes[userData.role as TRole];
    if (validRoutes.some((x) => x.test(pathname))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/",
    "/leads/:path*",
    "/inbox/:path*",
    "/calendar/:path*",
    "/config/:path*",
    "/docs-link/:path*",
    "/add-admin/:path*",
    "/media-post/:path*",
    "/profile/:path*",
  ],
};