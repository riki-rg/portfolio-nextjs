"use client";

import { useEffect, useState } from "react";
import { useApp } from "./providers";

export function Footer() {
  const { t } = useApp();
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 px-6 border-t border-border text-center text-sm text-muted-foreground font-mono">
      <p>
        <span className="text-accent">©</span> {year ?? ""} ·{" "}
        {t.footer.madeWith}{" "}
        <span className="text-red-500 hover:scale-125 inline-block transition-transform">
          &lt;3
        </span>{" "}
        {t.footer.by}
      </p>
    </footer>
  );
}
