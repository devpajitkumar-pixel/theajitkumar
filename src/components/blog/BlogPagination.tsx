import { buildBlogListURL } from "@/lib/blog";
import Link from "next/link";

type BlogPaginationProps = {
  page: number;
  totalPages: number;
  q: string;
  category: string;
};

export function BlogPagination({ page, totalPages, q, category }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const prev = page > 1 ? buildBlogListURL({ page: page - 1, q, category }) : null;
  const next = page < totalPages ? buildBlogListURL({ page: page + 1, q, category }) : null;

  return (
    <nav className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-8" aria-label="Blog pagination">
      <div>
        {prev ? (
          <Link
            href={prev}
            className="inline-flex items-center rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--heading)] transition hover:border-[var(--accent)]/45 hover:bg-[var(--accent-soft)]"
          >
            ← Newer
          </Link>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center rounded-full border border-transparent px-4 py-2 text-sm text-[var(--muted)] opacity-50">
            ← Newer
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--muted)]">
        Page <span className="font-medium text-[var(--heading)]">{page}</span> of{" "}
        <span className="font-medium text-[var(--heading)]">{totalPages}</span>
      </p>
      <div className="text-right">
        {next ? (
          <Link
            href={next}
            className="inline-flex items-center rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--heading)] transition hover:border-[var(--accent)]/45 hover:bg-[var(--accent-soft)]"
          >
            Older →
          </Link>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center rounded-full border border-transparent px-4 py-2 text-sm text-[var(--muted)] opacity-50">
            Older →
          </span>
        )}
      </div>
    </nav>
  );
}
