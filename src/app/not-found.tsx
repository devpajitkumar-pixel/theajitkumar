import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

const title = "Page not found | Ajit Kumar";
const description = "This page doesn’t exist or the link may be out of date.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-4 py-16 sm:px-10 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--accent-strong)]">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--heading)] sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">{description}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-xl border border-[var(--accent)]/50 bg-[var(--accent-soft)] px-5 py-2.5 text-sm font-medium text-[var(--accent-strong)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/20"
          >
            Back to home
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--heading)] transition hover:border-[var(--accent)]/40"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--heading)] transition hover:border-[var(--accent)]/40"
          >
            Contact
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
