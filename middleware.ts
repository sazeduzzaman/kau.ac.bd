import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // No authentication, no route protection — allow everything
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/user/:path*",
    "/admin/:path*",
    "/events/details/:slug/ticket",
  ],
};
