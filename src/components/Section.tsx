import { type ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto my-6 w-full max-w-6xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-20 shadow-[0_12px_40px_rgba(2,6,23,0.25)] even:bg-[var(--surface-alt)] sm:px-10"
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">{title}</p>
        {subtitle ? <h2 className="text-2xl font-semibold text-[var(--heading)] sm:text-4xl">{subtitle}</h2> : null}
      </div>
      {children}
    </section>
  );
}
