import { formatBlogDate, getHomeFeaturedPosts } from "@/lib/blog";
import { Section } from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

const FALLBACK_THUMB = "/images/blog/thumb-stack.svg";
const SHOW = 3;

export function FeaturedBlogTeasers() {
  const posts = getHomeFeaturedPosts(SHOW);

  if (posts.length === 0) {
    return null;
  }

  return (
    <Section id="featured-writing" title="Writing" subtitle="Latest featured posts from the blog">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const category = post.category?.trim() || "Uncategorized";
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] transition hover:border-[var(--accent)]/45 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                <Image
                  src={post.image ?? FALLBACK_THUMB}
                  alt=""
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-[var(--accent-strong)]">{category}</span>
                  {post.featured ? (
                    <span className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-strong)]">
                      Featured
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-[var(--heading)] group-hover:text-[var(--accent-strong)]">
                  {post.title}
                </h3>
                {post.description ? (
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{post.description}</p>
                ) : null}
                <p className="mt-4 text-sm font-medium text-[var(--accent)]">Read post →</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/50 bg-[var(--accent-soft)] px-6 py-3 text-sm font-semibold text-[var(--accent-strong)] transition hover:bg-[var(--accent)]/25"
        >
          View all posts
        </Link>
      </div>
    </Section>
  );
}
