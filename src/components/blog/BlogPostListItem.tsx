import { formatBlogDate } from "@/lib/blog";
import type { BlogPostMeta } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const FALLBACK_THUMB = "/images/blog/thumb-stack.svg";

export function BlogPostListItem({ post }: { post: BlogPostMeta }) {
  const category = post.category?.trim() || "Uncategorized";

  return (
    <li>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--surface-alt)] sm:flex-row"
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-auto sm:w-56 sm:min-h-[200px]">
          <Image
            src={post.image ?? FALLBACK_THUMB}
            alt=""
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 224px"
          />
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 font-medium text-[var(--accent-strong)]">
              {category}
            </span>
          </div>
          <h2 className="mt-3 text-xl font-semibold text-[var(--heading)] group-hover:text-[var(--accent-strong)] sm:text-2xl">
            {post.title}
          </h2>
          {post.description ? (
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{post.description}</p>
          ) : null}
          <p className="mt-auto pt-4 text-sm font-medium text-[var(--accent)]">Read post →</p>
        </div>
      </Link>
    </li>
  );
}
