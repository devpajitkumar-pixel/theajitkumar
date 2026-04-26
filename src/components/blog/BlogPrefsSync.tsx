"use client";

import { useEffect, useRef } from "react";

type BlogPrefsSyncProps = {
  q: string;
  category: string;
};

export function BlogPrefsSync({ q, category }: BlogPrefsSyncProps) {
  const last = useRef<string | null>(null);

  useEffect(() => {
    const key = JSON.stringify({ q, category });
    if (last.current === key) return;
    last.current = key;

    void fetch("/api/blog-prefs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q, category }),
    });
  }, [q, category]);

  return null;
}
