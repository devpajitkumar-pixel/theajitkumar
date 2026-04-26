import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

const title = "Privacy Policy | Ajit Kumar";
const description = "How this site handles data, cookies, and the contact form.";

export const metadata: Metadata = buildPageMetadata({
  path: "/privacy-policy",
  title,
  description,
});

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-10 sm:py-20">
      <PageJsonLd
        path="/privacy-policy"
        name={title}
        description={description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy-policy" },
        ]}
      />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Legal</p>
      <h1 className="mt-3 text-3xl font-semibold text-[var(--heading)] sm:text-4xl">Privacy policy</h1>
      <p className="mt-4 text-sm text-[var(--muted)]">Last updated: April 26, 2026</p>

      <div className="prose-policy mt-12 space-y-10 text-[var(--foreground)]">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--heading)]">Overview</h2>
          <p className="leading-relaxed text-[var(--muted)]">
            This website (theajitkumar.online) is operated by Ajit Kumar. This policy explains what information may be
            collected when you use the site, how the blog uses cookies to remember your preferences, and how the
            contact form works. If you have questions, use the{" "}
            <Link href="/contact" className="text-[var(--accent-strong)] underline underline-offset-2 hover:text-[var(--accent)]">
              contact page
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--heading)]">Information you provide</h2>
          <p className="leading-relaxed text-[var(--muted)]">
            When you submit the contact form, you choose what to send (for example, name, email address, and message).
            That information is used only to respond to your inquiry. Do not send passwords, government ID numbers, or
            other highly sensitive data through the form.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--heading)]">Cookies and the blog</h2>
          <p className="leading-relaxed text-[var(--muted)]">
            The blog may set a small, HTTP-only cookie named <code className="rounded bg-[var(--surface-alt)] px-1.5 py-0.5 font-mono text-[var(--heading)]">blog_prefs</code>{" "}
            when you search or filter posts. It stores your last search query and category choice so that when you
            return to <Link href="/blog" className="text-[var(--accent-strong)] underline underline-offset-2">/blog</Link>{" "}
            without a link that includes those parameters, the site can show the same filters again.
          </p>
          <ul className="list-inside list-disc space-y-2 pl-1 text-[var(--muted)]">
            <li>The cookie is not used for advertising or cross-site tracking.</li>
            <li>It expires after about 180 days, or sooner if you clear it from your browser.</li>
            <li>
              You can clear saved blog filters anytime using{" "}
              <Link href="/blog?reset=1" className="text-[var(--accent-strong)] underline underline-offset-2">
                Clear filters & forget
              </Link>{" "}
              (or the &quot;All posts&quot; link that clears preferences), which removes the cookie.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--heading)]">Google Tag Manager</h2>
          <p className="leading-relaxed text-[var(--muted)]">
            This site may load{" "}
            <a
              href="https://marketingplatform.google.com/about/tag-manager/"
              className="text-[var(--accent-strong)] underline underline-offset-2 hover:text-[var(--accent)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Tag Manager
            </a>{" "}
            (GTM) when the site operator configures it. GTM can inject tags for measurement, advertising, or other tools
            you choose in your GTM container. Those tags may set or read cookies and send usage data to Google or other
            vendors according to your container setup.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            See Google&apos;s{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-[var(--accent-strong)] underline underline-offset-2 hover:text-[var(--accent)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>{" "}
            for how Google may process data. You can use browser settings, opt-out tools, or extensions to limit tracking.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--heading)]">Technical data</h2>
          <p className="leading-relaxed text-[var(--muted)]">
            Like most websites, hosting and infrastructure may process technical data when you load a page (for example,
            IP address, browser type, and timestamps). What is logged depends on your hosting provider and configuration.
            Third-party tags loaded through GTM (if enabled) are described above.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--heading)]">Retention</h2>
          <p className="leading-relaxed text-[var(--muted)]">
            Contact form submissions are processed to reply to you; retention depends on email or ticketing practices
            used on the receiving side. Blog preference cookies follow the expiry described above.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--heading)]">Your choices</h2>
          <p className="leading-relaxed text-[var(--muted)]">
            You can block or delete cookies in your browser settings. Blocking the blog preferences cookie only affects
            convenience (remembered filters), not your ability to read posts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--heading)]">Changes</h2>
          <p className="leading-relaxed text-[var(--muted)]">
            This policy may be updated from time to time. The &quot;Last updated&quot; date at the top will change when
            it does.
          </p>
        </section>
      </div>
    </main>
  );
}
