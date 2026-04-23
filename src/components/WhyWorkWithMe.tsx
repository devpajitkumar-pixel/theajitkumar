"use client";

import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Real Business Solutions",
    description: "Real business solutions over demo-only builds.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 16L9 11L13 14L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7H20V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "End-to-End Ownership",
    description: "Ownership from architecture to deployment and ongoing reliability.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L4 7V12C4 16.5 7 20.5 12 22C17 20.5 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Scalable Systems Mindset",
    description: "System design focused on long-term product growth and maintainability.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19V5M5 19H19M9 15L12 12L15 14L19 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Full-Stack + Infra Strength",
    description: "Strong backend, frontend, and infrastructure execution.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 8L4 12L8 16M16 8L20 12L16 16M14 6L10 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function WhyWorkWithMe() {
  return (
    <Section id="why-work-with-me" title="Why Work With Me" subtitle="A reliable partner for complete software delivery">
      <div className="grid gap-4 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <AnimatedReveal key={reason.title} delay={index * 0.07}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] px-5 py-4"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                {reason.icon}
              </div>
              <h3 className="text-sm font-semibold text-[var(--heading)] sm:text-base">{reason.title}</h3>
              <p className="mt-2 text-xs text-[var(--muted)] sm:text-sm">{reason.description}</p>
            </motion.div>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
