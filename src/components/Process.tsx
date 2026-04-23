"use client";

import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Section } from "@/components/Section";
import { processSteps } from "@/data/portfolioData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function processIcon(title: string) {
  if (title === "Understand Problem") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (title === "Design System") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (title === "Build") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 8L4 12L8 16M16 8L20 12L16 16M14 6L10 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (title === "Deploy") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L4 7V12C4 16.5 7 20.5 12 22C17 20.5 20 16.5 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 12.5L11.2 14.2L14.8 10.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function Process() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStartIndex((prev) => (prev + 1) % processSteps.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const visibleSteps = useMemo(() => {
    return [0, 1, 2].map((offset) => processSteps[(startIndex + offset) % processSteps.length]);
  }, [startIndex]);

  const renderCard = (step: (typeof processSteps)[number], index: number, compact = false) => (
    <motion.div
      key={`${step.step}-${index}-${compact ? "m" : "d"}`}
      whileHover={{ y: -4, scale: compact ? 1.02 : index === 1 ? 1.1 : 1.03 }}
      animate={{
        scale: compact ? (index === 1 ? 1.02 : 0.94) : index === 1 ? 1.06 : 1,
        boxShadow:
          index === 1
            ? "0 0 0 1px rgba(212,175,55,0.5), 0 14px 28px rgba(212,175,55,0.2)"
            : "0 0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.34, ease: "easeOut" }}
      className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-5"
    >
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent-strong)]">
        {processIcon(step.title)}
      </div>
      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">{step.step}</p>
      <h3 className="mt-2 text-base font-semibold text-[var(--heading)] sm:text-lg">{step.title}</h3>
      <p className="mt-3 text-xs text-[var(--muted)] sm:text-sm">{step.description}</p>
    </motion.div>
  );

  return (
    <Section id="process" title="Process" subtitle="How I build and deliver systems">
      <AnimatedReveal>
        <div className="overflow-hidden md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={startIndex}
              initial={{ x: 180 }}
              animate={{ x: 0 }}
              exit={{ x: -180 }}
              transition={{ duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
              className="w-full"
            >
              <div className="w-full">
                {renderCard(visibleSteps[1], 1, true)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedReveal>

      <AnimatedReveal>
        <div className="hidden overflow-hidden md:block">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`desktop-${startIndex}`}
              initial={{ x: 180 }}
              animate={{ x: 0 }}
              exit={{ x: -180 }}
              transition={{ duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
              className="grid gap-4 md:grid-cols-3"
            >
              {visibleSteps.map((step, index) => renderCard(step, index))}
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedReveal>

      <div className="mt-4 hidden justify-center gap-2 md:flex">
        {processSteps.map((step, idx) => (
          <span
            key={step.step}
            className={`h-1.5 rounded-full transition-all ${
              idx === (startIndex + 1) % processSteps.length ? "w-8 bg-[var(--accent)]" : "w-2 bg-[var(--border)]"
            }`}
          />
        ))}
      </div>
    </Section>
  );
}
