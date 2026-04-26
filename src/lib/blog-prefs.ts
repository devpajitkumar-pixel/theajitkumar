export const BLOG_PREFS_COOKIE = "blog_prefs";

export type BlogPrefs = {
  q: string;
  category: string;
};

export function parseBlogPrefsCookie(raw: string | undefined): BlogPrefs | null {
  if (!raw?.trim()) return null;
  try {
    const data = JSON.parse(raw) as unknown;
    if (!data || typeof data !== "object") return null;
    const q = "q" in data && typeof (data as BlogPrefs).q === "string" ? (data as BlogPrefs).q : "";
    const category =
      "category" in data && typeof (data as BlogPrefs).category === "string"
        ? (data as BlogPrefs).category
        : "";
    return { q, category };
  } catch {
    return null;
  }
}
