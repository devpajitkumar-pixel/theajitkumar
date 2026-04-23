"use client";

import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const metrics = [
  {
    value: "End-to-End",
    label: "Ownership across frontend, backend, and deployment",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "Business-First",
    label: "Solutions aligned with operational and revenue goals",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 16L9 11L13 14L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7H20V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "Scalable",
    label: "Architecture built for long-term product growth",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19V5M5 19H19M9 15L12 12L15 14L19 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "Production Ready",
    label: "Delivery standards focused on reliability and maintainability",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L4 7V12C4 16.5 7 20.5 12 22C17 20.5 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 12.5L11.2 14.2L14.8 10.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Results() {
  const [activeWidget, setActiveWidget] = useState(0);
  const arrowPoints = useMemo(() => [12.5, 37.5, 62.5, 87.5], []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveWidget((prev) => (prev + 1) % metrics.length);
    }, 1200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <Section id="results" title="Impact Snapshot" subtitle="Engineering outcomes that matter to business teams">
      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-4 hidden lg:block">
          <div className="relative mx-auto h-8 w-full max-w-[96%]">
            <div className="absolute left-[12.5%] right-[12.5%] top-4 h-px bg-[linear-gradient(90deg,rgba(212,175,55,0.08),rgba(212,175,55,0.45),rgba(212,175,55,0.08))]" />
            <motion.div
              className="absolute top-0 -ml-2.5 text-[var(--accent-strong)]"
              animate={{
                left: arrowPoints.map((point) => `${point}%`),
                rotate: [0, 0, 0, 0],
              }}
              transition={{
                duration: 4.8,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12H20" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <AnimatedReveal key={metric.value} delay={index * 0.05}>
            <motion.div
              animate={{
                scale: activeWidget === index ? 1.05 : 1,
                y: activeWidget === index ? -4 : 0,
                boxShadow:
                  activeWidget === index
                    ? "0 0 0 1px rgba(212,175,55,0.5), 0 12px 24px rgba(212,175,55,0.22)"
                    : "0 0 0 0 rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-5"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                {metric.icon}
              </div>
              <p className="text-lg font-semibold text-[var(--accent-strong)] sm:text-xl">{metric.value}</p>
              <p className="mt-2 text-xs text-[var(--muted)] sm:text-sm">{metric.label}</p>
            </motion.div>
          </AnimatedReveal>
        ))}
        </div>
      </div>
    </Section>
  );
}
