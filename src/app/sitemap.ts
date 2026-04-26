import { navItems } from "@/data/portfolioData";
import { getAllPostsMeta } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

const STATIC_EXTRA = ["/privacy-policy"] as const;

function safeLastModified(iso: string | undefined): Date {
  if (!iso) return new Date();
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const navPaths = navItems.map((item) => item.href);
  const staticPaths = [...new Set([...navPaths, ...STATIC_EXTRA])];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : path === "/blog" ? 0.9 : 0.75,
  }));

  const posts = getAllPostsMeta();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: safeLastModified(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...blogEntries];
}
