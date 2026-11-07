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
    <footer className="py-8 px-6 border-t border-border text-center text-sm text-muted-foreground">
      <p>
        © {year ?? ""} · {t.footer.madeWith} ❤️ {t.footer.by}
      </p>
    </footer>
  );
}
