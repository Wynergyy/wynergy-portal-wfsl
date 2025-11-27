import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "@/lib/cookies/session";

// Public routes that do NOT require login
const PUBLIC_PATHS = [
  "/login",
  "/register",
  "/api/auth/login",
  "/api/auth/register"
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip protection for static files and Next internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/api/public")
  ) {
    return NextResponse.next();
  }

  // Allow public routes
  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check session cookie
  const sessionCookie = req.cookies.get("wfslsession")?.value;

  if (!sessionCookie) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
      Apply to all routes except static files.
      Private by default.
    */
    "/((?!_next/static|_next/image|favicon.ico).*)"
  ]
};
