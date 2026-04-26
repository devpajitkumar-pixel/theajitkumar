import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogPostListItem } from "@/components/blog/BlogPostListItem";
import { BlogPrefsSync } from "@/components/blog/BlogPrefsSync";
import { BlogSavedFiltersNotice } from "@/components/blog/BlogSavedFiltersNotice";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import {
  BLOG_PAGE_SIZE,
  getBlogIndexSlice,
  getCategorySummaries,
  getRecentPostsMeta,
} from "@/lib/blog";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { BLOG_PREFS_COOKIE, parseBlogPrefsCookie } from "@/lib/blog-prefs";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

const blogTitle = "Blog | Ajit Kumar";
const blogDescription =
  "Notes on full-stack development, business systems, and shipping reliable software.";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: "/blog",
    title: blogTitle,
    description: blogDescription,
  });
}

type Props = {
  searchParams: Promise<{ q?: string; category?: string; page?: string }>;
};

export default async function BlogIndexPage({ searchParams }: Props) {
  const sp = await searchParams;
  const jar = await cookies();
  const saved = parseBlogPrefsCookie(jar.get(BLOG_PREFS_COOKIE)?.value);

  const hasQInUrl = typeof sp.q === "string";
  const hasCategoryInUrl = typeof sp.category === "string";

  const q = (hasQInUrl ? sp.q : saved?.q) ?? "";
  const category = (hasCategoryInUrl ? sp.category : saved?.category) ?? "";

  const hasPageInUrl = typeof sp.page === "string";
  const pageRaw = typeof sp.page === "string" ? parseInt(sp.page, 10) : 1;
  const pageRequest = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;

  const { posts, total, totalPages, page, allMeta } = getBlogIndexSlice(
    q || undefined,
    category || undefined,
    pageRequest,
  );
  const categories = getCategorySummaries(allMeta);
  const recentPosts = getRecentPostsMeta(5);

  const restoredFromCookieOnly =
    !hasQInUrl &&
    !hasCategoryInUrl &&
    !hasPageInUrl &&
    Boolean((saved?.q?.trim() || saved?.category?.trim()) && (q.trim() || category.trim()));

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-10 sm:py-20">
      <PageJsonLd
        path="/blog"
        name={blogTitle}
        description={blogDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <BlogPrefsSync q={q} category={category} />
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-8">
        <div className="min-w-0 flex-1">
          <header className="mb-10 max-w-2xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">
              Blog
            </p>
            <h1 className="text-3xl font-semibold text-[var(--heading)] sm:text-4xl">Writing</h1>
            <p className="mt-4 text-[var(--muted)]">
              Practical notes on building and operating full-stack business applications.
            </p>
            <BlogSavedFiltersNotice show={restoredFromCookieOnly} />
            {(q || category) && (
              <p className="mt-4 text-sm text-[var(--muted)]">
                {total === 0
                  ? "No posts match your filters."
                  : `${total} post${total === 1 ? "" : "s"} found`}
                {category ? (
                  <>
                    {" "}
                    in <span className="font-medium text-[var(--heading)]">{category}</span>
                  </>
                ) : null}
                {q ? (
                  <>
                    {" "}
                    for “<span className="font-medium text-[var(--heading)]">{q}</span>”
                  </>
                ) : null}
              </p>
            )}
          </header>

          {posts.length === 0 ? (
            <p className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-10 text-[var(--muted)]">
              {allMeta.length === 0 ? (
                <>
                  No posts yet. Add Markdown files under{" "}
                  <code className="rounded bg-[var(--surface-alt)] px-1.5 py-0.5 font-mono text-sm text-[var(--heading)]">
                    content/blog
                  </code>
                  .
                </>
              ) : (
                <>
                  Nothing matches. Try clearing search or pick another category—or{" "}
                  <Link href="/blog?reset=1" className="font-medium text-[var(--accent)] hover:text-[var(--accent-strong)]">
                    view all posts
                  </Link>
                  .
                </>
              )}
            </p>
          ) : (
            <>
              <p className="mb-6 text-xs text-[var(--muted)]">
                Showing {(page - 1) * BLOG_PAGE_SIZE + 1}–{Math.min(page * BLOG_PAGE_SIZE, total)} of {total}
              </p>
              <ul className="space-y-6">
                {posts.map((post) => (
                  <BlogPostListItem key={post.slug} post={post} />
                ))}
              </ul>
              <BlogPagination page={page} totalPages={totalPages} q={q} category={category} />
            </>
          )}
        </div>

        <BlogSidebar
          recentPosts={recentPosts}
          categories={categories}
          searchQuery={q}
          activeCategory={category}
        />
      </div>
    </main>
  );
}
