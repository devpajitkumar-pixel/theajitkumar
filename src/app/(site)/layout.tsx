import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
