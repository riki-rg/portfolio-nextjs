"use client";

import { useApp } from "./providers";

export function About() {
  const { t } = useApp();
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-primary">#</span> {t.about.title}
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed bg-card border border-border rounded-2xl p-8 shadow-sm">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </div>
    </section>
  );
}
