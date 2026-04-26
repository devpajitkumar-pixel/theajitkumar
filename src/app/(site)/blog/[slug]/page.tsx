import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  formatBlogDate,
  getAllPostsMeta,
  getCategorySummaries,
  getPostBySlug,
  getPostSlugs,
  getRecentPostsMeta,
} from "@/lib/blog";
import { buildBlogPostJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const FALLBACK_THUMB = "/images/blog/thumb-stack.svg";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  const title = `${post.title} | Ajit Kumar`;
  return buildPageMetadata({
    path: `/blog/${slug}`,
    title,
    description: post.description ?? post.title,
    image: post.image ?? FALLBACK_THUMB,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allMeta = getAllPostsMeta();
  const idx = allMeta.findIndex((p) => p.slug === slug);
  const prev = idx >= 0 && idx < allMeta.length - 1 ? allMeta[idx + 1] : null;
  const next = idx > 0 ? allMeta[idx - 1] : null;

  const categories = getCategorySummaries(allMeta);
  const recentPosts = getRecentPostsMeta(5, slug);
  const categoryLabel = post.category?.trim() || "Uncategorized";

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-10 sm:py-20">
      <JsonLd
        id={`ld-blog-${slug}`}
        data={buildBlogPostJsonLd({
          slug,
          title: post.title,
          description: post.description,
          datePublished: post.date,
          imagePath: post.image ?? FALLBACK_THUMB,
          category: post.category,
        })}
      />
      <div className="mb-10">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
        >
          ← All posts
        </Link>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-8">
        <article className="min-w-0 flex-1">
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent-strong)]">
                {categoryLabel}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--heading)] sm:text-4xl">{post.title}</h1>
            {post.description ? <p className="mt-4 text-lg text-[var(--muted)]">{post.description}</p> : null}
          </header>

          <div className="relative mb-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)]">
            <Image
              src={post.image ?? FALLBACK_THUMB}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>

          <div className="max-w-3xl border-b border-[var(--border)] pb-10">
            <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>

          {(prev || next) && (
            <nav
              className="mt-12 grid gap-4 sm:grid-cols-2"
              aria-label="Adjacent posts"
            >
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]/40"
                >
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Older</p>
                  <p className="mt-2 font-medium text-[var(--heading)]">{prev.title}</p>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-right transition hover:border-[var(--accent)]/40 sm:col-start-2"
                >
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Newer</p>
                  <p className="mt-2 font-medium text-[var(--heading)]">{next.title}</p>
                </Link>
              ) : null}
            </nav>
          )}
        </article>

        <BlogSidebar recentPosts={recentPosts} categories={categories} searchQuery="" activeCategory="" />
      </div>
    </main>
  );
}
