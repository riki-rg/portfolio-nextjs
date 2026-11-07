"use client";

import { useApp } from "./providers";

export function About() {
  const { t } = useApp();

  return (
    <section id="about" className="py-24 px-6 bg-muted/40">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-accent mb-2">
          <span className="text-muted-foreground">$</span> {t.about.kicker}
        </p>
        <h2 className="text-3xl font-extrabold mb-12 tracking-tight">
          {t.about.title}
        </h2>

        <div className="terminal rounded-2xl overflow-hidden animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <span className="terminal-dot bg-[#ff5f57]" />
            <span className="terminal-dot bg-[#febc2e]" />
            <span className="terminal-dot bg-[#28c840]" />
            <span className="ml-3 text-xs text-white/40 font-mono">
              git log --oneline --life
            </span>
          </div>
          <div className="p-6">
            {t.about.timeline.map((item, i) => (
              <div key={i} className="flex gap-4 leading-7 mb-4">
                <span className="text-[#ffcb6b] font-mono text-sm shrink-0 w-16 pt-0.5 text-right">
                  {item.year}
                </span>
                <span className="text-[#5c6370] font-mono shrink-0 pt-1 select-none">
                  ●
                </span>
                <div>
                  <p className="font-mono font-semibold text-[#82aaff]">
                    {item.title}
                  </p>
                  <p className="text-white/55 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
            <p className="font-mono text-sm pt-2 text-white/60">
              <span className="text-[#28c840]">$</span>{" "}
              <span className="text-white/80">
                git commit -m &quot;still_building&quot;
              </span>
              <span className="type-cursor" />
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-4 text-muted-foreground leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </div>
    </section>
  );
}
