"use client";

import { navItems } from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/85 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-4 py-1.5 sm:px-10 sm:py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label="Ajit Kumar home">
            <Image
              src="/logo-main.png"
              alt="Ajit Kumar logo"
              width={120}
              height={60}
              priority
              className="h-8 w-auto object-contain sm:h-10 lg:h-11"
            />
          </Link>
          <ul className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex">
            {navItems.map((item) => {
              const active = isNavActive(pathname, item.href);
              const className = `rounded-full px-3 py-2 text-xs whitespace-nowrap transition-all sm:text-sm ${
                active
                  ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                  : "text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--heading)]"
              }`;
              return (
                <li key={item.href}>
                  <Link href={item.href} className={className}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] p-1 text-[var(--heading)] transition hover:bg-[var(--accent-soft)] xl:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className="sr-only">Toggle menu</span>
            {isMobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        <ul
          id="mobile-nav-menu"
          className={`mt-4 space-y-2 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-3 transition-all duration-300 xl:hidden ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 border-transparent p-0 opacity-0"
          }`}
        >
          {navItems.map((item) => {
            const active = isNavActive(pathname, item.href);
            const className = `block rounded-lg px-4 py-2 text-xs transition-all sm:text-sm ${
              active
                ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                : "text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--heading)]"
            }`;
            return (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={className}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
