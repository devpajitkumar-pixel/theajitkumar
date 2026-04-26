import { buildBlogListURL, formatBlogDate } from "@/lib/blog";
import type { BlogPostMeta } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const FALLBACK_THUMB = "/images/blog/thumb-stack.svg";

type BlogSidebarProps = {
  recentPosts: BlogPostMeta[];
  categories: { name: string; count: number }[];
  searchQuery: string;
  activeCategory: string;
};

export function BlogSidebar({ recentPosts, categories, searchQuery, activeCategory }: BlogSidebarProps) {
  return (
    <aside className="w-full shrink-0 space-y-6 lg:sticky lg:top-24 lg:w-52 lg:self-start">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Search</h2>
        <form action="/blog" method="get" className="mt-4 space-y-3">
          {activeCategory ? <input type="hidden" name="category" value={activeCategory} /> : null}
          <label htmlFor="blog-search" className="sr-only">
            Search posts
          </label>
          <input
            id="blog-search"
            name="q"
            type="search"
            placeholder="Titles, topics, categories…"
            defaultValue={searchQuery}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-2.5 text-sm text-[var(--heading)] placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--accent-soft)] py-2.5 text-sm font-medium text-[var(--accent-strong)] transition hover:bg-[var(--accent)]/25"
          >
            Search
          </button>
        </form>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Categories</h2>
        <ul className="mt-4 space-y-1">
          <li>
              <Link
                href="/blog?reset=1"
                className={`flex items-center justify-between rounded-lg px-2 py-2 text-sm transition ${
                  !activeCategory && !searchQuery.trim()
                    ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-alt)] hover:text-[var(--heading)]"
                }`}
              >
                <span>All posts</span>
              </Link>
          </li>
          {categories.map(({ name, count }) => (
            <li key={name}>
              <Link
                href={buildBlogListURL({ category: name, q: searchQuery })}
                className={`flex items-center justify-between gap-1 rounded-lg px-2 py-2 text-sm transition ${
                  activeCategory === name
                    ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-alt)] hover:text-[var(--heading)]"
                }`}
              >
                <span>{name}</span>
                <span className="text-xs tabular-nums text-[var(--muted)]">{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Recent posts</h2>
        <ul className="mt-4 space-y-4">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex gap-2">
                <div className="relative size-11 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-alt)]">
                  <Image
                    src={post.image ?? FALLBACK_THUMB}
                    alt=""
                    fill
                    className="object-cover transition group-hover:opacity-90"
                    sizes="44px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-xs font-medium leading-snug text-[var(--heading)] group-hover:text-[var(--accent-strong)]">
                    {post.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">{formatBlogDate(post.date)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
