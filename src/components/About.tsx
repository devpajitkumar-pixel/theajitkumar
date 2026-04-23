"use client";

import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const codeSnippet = [
  "const app = createBusinessSystem();",
  "app.use(authMiddleware({ strategy: 'jwt' }));",
  "queue.add('report:generate', { format: 'pdf' });",
  "await deploy({ server: 'vps', proxy: 'nginx' });",
];

export function About() {
  const fullCode = useMemo(() => codeSnippet.join("\n"), []);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index = (index + 1) % (fullCode.length + 1);
      setTypedText(fullCode.slice(0, index));
    }, 45);

    return () => window.clearInterval(timer);
  }, [fullCode]);

  return (
    <Section id="about" title="About Me" subtitle="Building software that solves business problems">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedReveal>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-3 flex items-center gap-2 px-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[#0b0b0b] p-4">
              <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-[var(--accent)] sm:text-xs sm:tracking-[0.18em]">Live Coding Session</p>
              <pre className="min-h-[190px] whitespace-pre-wrap font-mono text-[11px] leading-6 text-[var(--accent-strong)] sm:text-sm">
                {typedText}
                <motion.span
                  aria-hidden
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY }}
                  className="ml-0.5 inline-block"
                >
                  |
                </motion.span>
              </pre>
            </div>
            <div className="mx-auto mt-3 h-3 w-40 rounded-full bg-[#0b0b0b]" />
          </motion.div>
        </AnimatedReveal>

        <div>
          <AnimatedReveal>
            <p className="max-w-4xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              I build real-world applications used in business operations, analytics, and decision-making pipelines. My
              engineering scope includes full-stack product development, architecture planning, and production deployment
              using modern web technologies and reliable infrastructure practices.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.07}>
            <p className="mt-5 max-w-4xl text-sm text-[var(--muted)] sm:text-base">
              I actively work on dashboard systems, reporting platforms, automation flows, and internal tools that improve
              team efficiency and data visibility. Recognized with the Rising Star Award at Shakti Tech for delivering
              high-impact solutions with strong ownership and execution quality.
            </p>
          </AnimatedReveal>
          
        </div>
        
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
            <AnimatedReveal delay={0.1}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3L4 7V12C4 17 7.5 21 12 22C16.5 21 20 17 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9.5 12.5L11.2 14.2L14.8 10.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[var(--heading)] sm:text-base">System Thinking</h3>
                <p className="mt-2 text-xs text-[var(--muted)] sm:text-sm">Designing maintainable software with long-term scalability in mind.</p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.15}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[var(--heading)] sm:text-base">Execution Speed</h3>
                <p className="mt-2 text-xs text-[var(--muted)] sm:text-sm">Shipping production-ready features with a practical business-first approach.</p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.2}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3C16.5 3 20 6.5 20 11V12C20 16.5 16.5 20 12 20C7.5 20 4 16.5 4 12V11C4 6.5 7.5 3 12 3Z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 8V12L14.5 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[var(--heading)] sm:text-base">Reliability Focus</h3>
                <p className="mt-2 text-xs text-[var(--muted)] sm:text-sm">Prioritizing secure APIs, stable deployments, and operational continuity.</p>
              </div>
            </AnimatedReveal>
          </div>
    </Section>
  );
}
