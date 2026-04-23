import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-alt)] py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-5 px-6 sm:px-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Theajitkumar home">
            <Image src="/logo-main.png" alt="Theajitkumar logo" width={120} height={60} className="h-9 w-auto object-contain sm:h-10" />
          </Link>
          <div className="text-sm text-[var(--muted)]">
            <p className="font-medium text-[var(--heading)]">Theajitkumar</p>
            <p>theajitkumar.online</p>
          </div>
        </div>

        <p className="text-xs text-[var(--muted)] sm:text-sm">
          © {year} Ajit Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
