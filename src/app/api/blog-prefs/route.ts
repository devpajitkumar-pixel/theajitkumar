import { BLOG_PREFS_COOKIE, type BlogPrefs } from "@/lib/blog-prefs";
import { NextResponse } from "next/server";

const MAX_AGE = 60 * 60 * 24 * 180;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const q = body && typeof body === "object" && "q" in body && typeof (body as BlogPrefs).q === "string" ? (body as BlogPrefs).q : "";
  const category =
    body && typeof body === "object" && "category" in body && typeof (body as BlogPrefs).category === "string"
      ? (body as BlogPrefs).category
      : "";

  const res = NextResponse.json({ ok: true });

  if (!q.trim() && !category.trim()) {
    res.cookies.delete(BLOG_PREFS_COOKIE);
  } else {
    res.cookies.set(BLOG_PREFS_COOKIE, JSON.stringify({ q, category }), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: MAX_AGE,
      secure: process.env.NODE_ENV === "production",
    });
  }

  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(BLOG_PREFS_COOKIE);
  return res;
}
