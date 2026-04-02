import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/auth/auth.apis";

const authRoutes = ["/login", "/register"];
const roleBaseRoutes = {
  Admin: [/^\//],
  User: [/^\//],
};
type TRole = keyof typeof roleBaseRoutes;

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userData = await getCurrentUser();

  // If logged in and tries to access auth routes → redirect to dashboard
  if (userData && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If not logged in
  if (!userData) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Role-based route guard
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
