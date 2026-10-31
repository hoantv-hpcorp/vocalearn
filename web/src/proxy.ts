import { NextResponse, type NextRequest } from "next/server";
import { auth0 } from "@/lib/auth0";

const PROTECTED_PATHS = ["/dashboard", "/progress"];

function isProtectedPath(pathname: string) {
  return PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

export async function proxy(request: NextRequest) {
  const authResponse = await auth0.middleware(request);
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/auth") || !isProtectedPath(pathname)) {
    return authResponse;
  }

  const session = await auth0.getSession(request);
  if (session) {
    return authResponse;
  }

  const loginUrl = new URL("/auth/login", request.nextUrl.origin);
  loginUrl.searchParams.set("returnTo", `${pathname}${search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
