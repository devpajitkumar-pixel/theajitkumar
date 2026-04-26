import { navItems } from "@/data/portfolioData";
import { getAllPostsMeta } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPostsMeta();
  const sections = navItems.filter((item) => item.href !== "/");

  const lines: string[] = [
    "# Ajit Kumar",
    "> Full stack software engineer building business systems with Next.js, Node.js, MongoDB, and deployment on real infrastructure.",
    "",
    "## Site",
    `- ${SITE_URL}/`,
    "",
    "## Key pages",
    `- ${SITE_URL}/blog — Technical writing and notes`,
    `- ${SITE_URL}/contact — Get in touch`,
    `- ${SITE_URL}/privacy-policy — Privacy and cookies`,
    "",
    "## Portfolio sections",
    ...sections.map((item) => `- ${SITE_URL}${item.href} — ${item.label}`),
    "",
    "## Blog posts",
    ...posts.map((p) => `- ${SITE_URL}/blog/${p.slug}: ${p.title}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
