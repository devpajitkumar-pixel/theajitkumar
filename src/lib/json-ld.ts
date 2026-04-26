import { AUTHOR_NAME, SITE_NAME } from "@/lib/seo";
import { absoluteUrl, SITE_URL } from "@/lib/site";

const WEBSITE_ID = `${SITE_URL}/#website`;
const PERSON_ID = `${SITE_URL}/#person`;

function sameAsFromEnv(): string[] {
  const raw = process.env.NEXT_PUBLIC_PROFILE_SAME_AS?.trim();
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Global graph: WebSite + Person (injected once in root layout) */
export function buildGlobalSchemaGraph() {
  const sameAs = sameAsFromEnv();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "Portfolio and blog of Ajit Kumar — full stack engineering, business systems, and deployment.",
        publisher: { "@id": PERSON_ID },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: AUTHOR_NAME,
        url: SITE_URL,
        jobTitle: "Full Stack Developer",
        ...(sameAs.length ? { sameAs } : {}),
      },
    ],
  };
}

export function buildWebPageJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-US",
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildBlogPostJsonLd(opts: {
  slug: string;
  title: string;
  description?: string;
  datePublished: string;
  imagePath?: string;
  category?: string;
}) {
  const url = absoluteUrl(`/blog/${opts.slug}`);
  const imageUrl = absoluteUrl(opts.imagePath ?? "/logo-main.png");

  const blogPosting = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: opts.title,
    ...(opts.description ? { description: opts.description } : {}),
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    image: imageUrl,
    author: { "@type": "Person", name: AUTHOR_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-main.png"),
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    ...(opts.category ? { articleSection: opts.category } : {}),
  };

  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: opts.title, path: `/blog/${opts.slug}` },
  ]);

  return {
    "@context": "https://schema.org",
    "@graph": [blogPosting, breadcrumbs],
  };
}
