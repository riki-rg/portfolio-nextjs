"use client";

import { useApp } from "./providers";

export function Hobbies() {
  const { t } = useApp();

  return (
    <section id="hobbies" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent mb-2">
          <span className="text-muted-foreground">$</span> {t.hobbies.kicker}
        </p>
        <h2 className="text-3xl font-extrabold mb-12 tracking-tight">
          {t.hobbies.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.hobbies.items.map((hobby) => (
            <div
              key={hobby.title}
              className="bento-card bg-card border border-border rounded-2xl p-6 text-center"
            >
              <span className="text-4xl block mb-4">{hobby.icon}</span>
              <h3 className="font-mono font-bold text-lg mb-2">
                {hobby.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {hobby.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Facts() {
  const { t } = useApp();

  return (
    <section id="facts" className="py-24 px-6 bg-muted/40">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-accent mb-2">
          <span className="text-muted-foreground">$</span> {t.facts.kicker}
        </p>
        <h2 className="text-3xl font-extrabold mb-12 tracking-tight">
          {t.facts.title}
        </h2>

        <div className="terminal rounded-2xl overflow-hidden animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <span className="terminal-dot bg-[#ff5f57]" />
            <span className="terminal-dot bg-[#febc2e]" />
            <span className="terminal-dot bg-[#28c840]" />
            <span className="ml-3 text-xs text-white/40 font-mono">
              {t.facts.kicker}
            </span>
          </div>
          <div className="p-6 space-y-3 font-mono text-sm">
            {t.facts.items.map((item) => (
              <div key={item.key} className="flex gap-3 items-baseline">
                <span className="text-[#89ddff] shrink-0 w-28 text-right">
                  {item.key}
                </span>
                <span className="text-white/40 select-none">::</span>
                <span className="text-[#c3e88d]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
