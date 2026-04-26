import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import type { BlogPost, BlogPostMeta } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

export const BLOG_PAGE_SIZE = 3;

export function formatBlogDate(iso: string) {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return iso;
  return new Date(t).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function parseFrontmatterData(slug: string, data: Record<string, unknown>) {
  const title = data.title != null ? String(data.title) : slug;
  const date = data.date != null ? String(data.date) : "";
  const description = data.description != null ? String(data.description) : undefined;
  const imageRaw = data.image ?? data.thumbnail;
  const image =
    imageRaw != null && String(imageRaw).trim() !== "" ? String(imageRaw).trim() : undefined;
  const categoryRaw = data.category;
  const category =
    categoryRaw != null && String(categoryRaw).trim() !== "" ? String(categoryRaw).trim() : undefined;
  const featuredRaw = data.featured;
  const featured =
    featuredRaw === true ||
    featuredRaw === "true" ||
    featuredRaw === 1 ||
    featuredRaw === "1";
  return { title, date, description, image, category, featured };
}

function readPostFile(slug: string): string | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, "utf8");
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md")
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const posts: BlogPostMeta[] = [];
  for (const slug of getPostSlugs()) {
    const raw = readPostFile(slug);
    if (!raw) continue;
    const { data } = matter(raw);
    const parsed = parseFrontmatterData(slug, data as Record<string, unknown>);
    posts.push({ slug, ...parsed });
  }
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getCategorySummaries(posts: BlogPostMeta[]): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of posts) {
    const name = p.category?.trim() || "Uncategorized";
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getRecentPostsMeta(limit: number, excludeSlug?: string): BlogPostMeta[] {
  const all = getAllPostsMeta();
  return all.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

/** Featured posts first (newest among featured), then others, up to `limit`. */
export function getHomeFeaturedPosts(limit = 3): BlogPostMeta[] {
  const all = getAllPostsMeta();
  const featured = all.filter((p) => p.featured);
  const rest = all.filter((p) => !p.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function filterPostsMeta(posts: BlogPostMeta[], q?: string, category?: string): BlogPostMeta[] {
  let out = posts;
  if (category?.trim()) {
    const c = category.trim();
    out = out.filter((p) => (p.category?.trim() || "Uncategorized") === c);
  }
  const needle = q?.trim().toLowerCase();
  if (needle) {
    out = out.filter((p) => {
      const cat = (p.category ?? "").toLowerCase();
      const desc = (p.description ?? "").toLowerCase();
      return (
        p.title.toLowerCase().includes(needle) ||
        desc.includes(needle) ||
        p.slug.toLowerCase().includes(needle) ||
        cat.includes(needle)
      );
    });
  }
  return out;
}

export function getBlogIndexSlice(
  q: string | undefined,
  category: string | undefined,
  page: number,
): {
  posts: BlogPostMeta[];
  total: number;
  totalPages: number;
  page: number;
  allMeta: BlogPostMeta[];
} {
  const allMeta = getAllPostsMeta();
  const filtered = filterPostsMeta(allMeta, q, category);
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE) || 1);
  const safePage = Math.min(Math.max(1, page), totalPages);
  const posts = filtered.slice((safePage - 1) * BLOG_PAGE_SIZE, safePage * BLOG_PAGE_SIZE);
  return { posts, total, totalPages, page: safePage, allMeta };
}

export function buildBlogListURL(opts: { page?: number; q?: string; category?: string }): string {
  const p = new URLSearchParams();
  if (opts.q?.trim()) p.set("q", opts.q.trim());
  if (opts.category?.trim()) p.set("category", opts.category.trim());
  if (opts.page != null && opts.page > 1) p.set("page", String(opts.page));
  const s = p.toString();
  return s ? `/blog?${s}` : "/blog";
}

export function getPostBySlug(slug: string): BlogPost | null {
  const raw = readPostFile(slug);
  if (!raw) return null;
  const { data, content } = matter(raw);
  const parsed = parseFrontmatterData(slug, data as Record<string, unknown>);
  const contentHtml = marked.parse(content, { async: false }) as string;
  return { slug, ...parsed, contentHtml };
}
