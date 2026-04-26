import { absoluteUrl, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const SITE_NAME = "Ajit Kumar Portfolio";
export const AUTHOR_NAME = "Ajit Kumar";

export const DEFAULT_DESCRIPTION =
  "Ajit Kumar is a full stack software engineer building real-world scalable business applications with Next.js, Node.js, MongoDB, and modern deployment infrastructure.";

/** Default social preview image under /public */
export const DEFAULT_OG_IMAGE = "/logo-main.png";

function twitterFromEnv(): { site?: string; creator?: string } {
  const raw = process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim();
  if (!raw) return {};
  const h = raw.replace(/^@/, "");
  const at = `@${h}`;
  return { site: at, creator: at };
}

export type PageMetaInput = {
  /** Path starting with /, e.g. /about */
  path: string;
  title: string;
  description: string;
  /** Relative path under public, e.g. /images/blog/x.svg */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Canonical URL, Open Graph, and Twitter Card metadata aligned with metadataBase.
 */
export function buildPageMetadata(input: PageMetaInput): Metadata {
  const canonical = absoluteUrl(input.path);
  const imagePath = input.image ?? DEFAULT_OG_IMAGE;
  const tw = twitterFromEnv();

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type: input.type ?? "website",
      images: [{ url: imagePath, alt: input.title }],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [imagePath],
      ...tw,
    },
  };
}

/** Root layout defaults: metadataBase, icons, and fixed global Open Graph/Twitter fallbacks */
export function buildRootMetadata(): Metadata {
  const tw = twitterFromEnv();
  return {
    metadataBase: new URL(SITE_URL),
    title: `${AUTHOR_NAME} | Full Stack Developer`,
    description: DEFAULT_DESCRIPTION,
    keywords: [
      AUTHOR_NAME,
      "Full Stack Developer",
      "Next.js Developer",
      "Node.js Engineer",
      "MongoDB",
      "Business Systems",
      "VPS Deployment",
    ],
    alternates: { canonical: absoluteUrl("/") },
    openGraph: {
      title: `${AUTHOR_NAME} | Full Stack Developer`,
      description:
        "Full-stack engineer delivering real-world business systems, dashboards, reporting tools, and scalable deployments.",
      url: absoluteUrl("/"),
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, alt: `${AUTHOR_NAME} — ${SITE_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${AUTHOR_NAME} | Full Stack Developer`,
      description:
        "Full-stack engineer delivering real-world business systems, dashboards, reporting tools, and scalable deployments.",
      images: [DEFAULT_OG_IMAGE],
      ...tw,
    },
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
      shortcut: "/favicon.png",
      apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}
