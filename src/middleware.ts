import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { BLOG_PREFS_COOKIE } from "@/lib/blog-prefs";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  if (url.pathname === "/blog" && url.searchParams.get("reset") === "1") {
    const clean = new URL("/blog", url.origin);
    const res = NextResponse.redirect(clean);
    res.cookies.delete(BLOG_PREFS_COOKIE);
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/blog",
};
