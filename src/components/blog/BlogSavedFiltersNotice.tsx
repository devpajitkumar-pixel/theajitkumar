import Link from "next/link";

type BlogSavedFiltersNoticeProps = {
  show: boolean;
};

export function BlogSavedFiltersNotice({ show }: BlogSavedFiltersNoticeProps) {
  if (!show) return null;

  return (
    <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-4 py-3 text-sm text-[var(--foreground)]">
      <span>Showing your last blog search and category filters.</span>
      <Link href="/blog?reset=1" className="font-medium text-[var(--accent-strong)] underline underline-offset-2 hover:text-[var(--accent)]">
        Clear filters & forget
      </Link>
    </p>
  );
}
