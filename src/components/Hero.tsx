"use client";

import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";

const flowNodes = [
  { id: "client", label: "Client", x: "8%", y: "14%" },
  { id: "api", label: "API Gateway", x: "38%", y: "14%" },
  { id: "auth", label: "Auth Service", x: "68%", y: "14%" },
  { id: "queue", label: "Queue / Workers", x: "38%", y: "58%" },
  { id: "db", label: "Database", x: "68%", y: "58%" },
  { id: "reports", label: "Reports", x: "8%", y: "58%" },
];

const flowPackets = [
  { id: "p1", duration: 3.6, delay: 0, points: [{ x: 17, y: 24 }, { x: 47, y: 24 }, { x: 77, y: 24 }, { x: 77, y: 68 }] },
  { id: "p2", duration: 4.2, delay: 0.8, points: [{ x: 47, y: 24 }, { x: 47, y: 68 }, { x: 17, y: 68 }] },
  { id: "p3", duration: 3.8, delay: 1.4, points: [{ x: 77, y: 68 }, { x: 47, y: 68 }, { x: 47, y: 24 }] },
];

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 pb-24 pt-24 sm:px-10 sm:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(9,11,18,0.9),rgba(9,11,18,0.7))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.24),transparent_52%)]" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-[var(--accent)]/45 bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-medium text-[var(--accent-strong)] shadow-[0_0_40px_rgba(212,175,55,0.28)] sm:px-4 sm:py-2 sm:text-sm">
            🏆 Rising Star Award - Shakti Tech
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-[var(--heading)] sm:text-5xl lg:text-6xl">
            <span
              className={`${greatVibes.className} inline-block bg-gradient-to-r from-[var(--accent-strong)] via-[#fff1c7] to-[var(--accent)] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(212,175,55,0.25)]`}
            >
              Theajitkumar
            </span>
            <span className="mt-4 block text-xl font-medium text-[var(--foreground)] sm:text-3xl lg:text-4xl">
              Full Stack Developer building real-world scalable applications
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:mt-7 sm:text-lg">
            I build software systems that power day-to-day business operations, from customer-facing interfaces to
            backend orchestration, data workflows, and infrastructure deployment.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-2.5 text-xs text-[var(--foreground)] sm:p-3 sm:text-sm">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <span>Enterprise-grade workflows</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-2.5 text-xs text-[var(--foreground)] sm:p-3 sm:text-sm">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Secure and scalable APIs</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-2.5 text-xs text-[var(--foreground)] sm:p-3 sm:text-sm">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3L4 7V12C4 16.5 7 20.5 12 22C17 20.5 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <span>Deployment and reliability ownership</span>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-[var(--accent)] px-2 py-2.5 text-center text-[11px] font-semibold leading-tight text-[#1a1408] transition hover:bg-[var(--accent-strong)] sm:px-5 sm:py-3 sm:text-sm"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--border)] px-2 py-2.5 text-center text-[11px] font-semibold leading-tight text-[var(--heading)] transition hover:border-[var(--accent)]/45 hover:bg-[var(--accent-soft)] sm:px-5 sm:py-3 sm:text-sm"
            >
              Contact Me
            </Link>
            <a
              href="/resume-ajit-kumar.txt"
              className="rounded-full border border-[var(--accent)]/55 px-2 py-2.5 text-center text-[11px] font-semibold leading-tight text-[var(--accent-strong)] transition hover:bg-[var(--accent-soft)] sm:px-5 sm:py-3 sm:text-sm"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative min-h-[340px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),transparent_45%)]" />

          <div className="relative h-[340px] w-full">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M17 24 L47 24 L77 24 L77 68" stroke="rgba(212,175,55,0.45)" strokeWidth="0.55" fill="none" />
              <path d="M47 24 L47 68 L17 68" stroke="rgba(212,175,55,0.35)" strokeWidth="0.55" fill="none" />
              <path d="M47 68 L77 68" stroke="rgba(212,175,55,0.35)" strokeWidth="0.55" fill="none" />
            </svg>

            {flowNodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.07, duration: 0.4 }}
                className="absolute w-[26%] rounded-lg border border-[var(--border)] bg-[#0d0d0d]/95 px-3 py-2 text-center"
                style={{ left: node.x, top: node.y }}
              >
                <p className="text-[11px] font-semibold tracking-wide text-[var(--accent-strong)]">{node.label}</p>
              </motion.div>
            ))}

            {flowPackets.map((packet) => (
              <motion.div
                key={packet.id}
                className="absolute h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_14px_rgba(212,175,55,0.9)]"
                animate={{
                  left: packet.points.map((p) => `${p.x}%`),
                  top: packet.points.map((p) => `${p.y}%`),
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{
                  duration: packet.duration,
                  delay: packet.delay,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 0.3,
                }}
              />
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
