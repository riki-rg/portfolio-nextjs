"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "./providers";
import { LINKS } from "@/lib/i18n";

const SYMBOLS = ["{ }", "</>", "=>", "#", "()", "&&", "::", "01", "$_", "/*"];

export function Hero() {
  const { t } = useApp();
  const roles = t.hero.roles;
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // terminal typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 45 : 95;

    timer.current = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, typed.length + 1);
        setTyped(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const next = current.slice(0, Math.max(0, typed.length - 1));
        setTyped(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [typed, deleting, roleIndex, roles]);

  const symbols = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        symbol: SYMBOLS[i % SYMBOLS.length],
        top: `${(i * 37) % 85 + 5}%`,
        left: `${(i * 53) % 90 + 3}%`,
        size: `${14 + ((i * 7) % 18)}px`,
        dur: `${16 + ((i * 5) % 14)}s`,
        delay: `${(i * 1.7) % 8}s`,
      })),
    []
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
    >
      {/* floating code symbols */}
      {symbols.map((s, i) => (
        <span
          key={i}
          className="code-symbol"
          style={{
            top: s.top,
            left: s.left,
            fontSize: s.size,
            ["--dur" as string]: s.dur,
            ["--delay" as string]: s.delay,
          }}
        >
          {s.symbol}
        </span>
      ))}

      <div className="max-w-6xl mx-auto px-6 w-full pt-28 pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* left: intro */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/70 backdrop-blur-sm font-mono text-xs text-muted-foreground mb-7">
            <span className="status-dot" />
            {t.hero.status}
          </div>

          <p className="font-mono text-accent mb-3">
            {t.hero.greeting} <span className="text-muted-foreground">//</span>
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] mb-3">
            {t.hero.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-2 font-mono">
            {t.hero.nickname}
          </p>

          <div className="font-mono text-xl sm:text-2xl font-semibold text-accent h-9 mb-7 type-cursor">
            {typed}
          </div>

          <p className="text-muted-foreground max-w-lg leading-relaxed mb-9">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="font-mono px-6 py-3 rounded-xl bg-accent text-background font-bold hover:brightness-110 transition-all shadow-lg"
              style={{ boxShadow: "0 8px 28px -8px var(--accent)" }}
            >
              &gt;_ {t.hero.cta}
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              className="font-mono px-6 py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent/10 transition-colors"
            >
              {t.hero.contact}
            </a>
          </div>
        </div>

        {/* right: terminal */}
        <div className="terminal rounded-2xl overflow-hidden relative z-10 rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <span className="terminal-dot bg-[#ff5f57]" />
            <span className="terminal-dot bg-[#febc2e]" />
            <span className="terminal-dot bg-[#28c840]" />
            <span className="ml-3 text-xs text-white/40 font-mono">
              rizky@umku: ~
            </span>
          </div>
          <div className="p-5 text-[13px] sm:text-sm leading-7">
            <p>
              <span className="text-[#28c840]">$</span>{" "}
              <span className="text-white/80">cat about.json</span>
            </p>
            <p className="text-white/50">
              {"{"}
            </p>
            <p className="pl-4">
              <span className="text-[#89ddff]">&quot;name&quot;</span>
              <span className="text-white/50">:</span>{" "}
              <span className="text-[#c3e88d]">&quot;Rizqy M. Hakim&quot;</span>
              <span className="text-white/50">,</span>
            </p>
            <p className="pl-4">
              <span className="text-[#89ddff]">&quot;campus&quot;</span>
              <span className="text-white/50">:</span>{" "}
              <span className="text-[#c3e88d]">&quot;UMKU&quot;</span>
              <span className="text-white/50">,</span>
            </p>
            <p className="pl-4">
              <span className="text-[#89ddff]">&quot;major&quot;</span>
              <span className="text-white/50">:</span>{" "}
              <span className="text-[#c3e88d]">&quot;Sistem Informasi&quot;</span>
              <span className="text-white/50">,</span>
            </p>
            <p className="pl-4">
              <span className="text-[#89ddff]">&quot;focus&quot;</span>
              <span className="text-white/50">:</span>{" "}
              <span className="text-[#c3e88d]">
                &quot;fullstack, networking, data&quot;
              </span>
              <span className="text-white/50">,</span>
            </p>
            <p className="pl-4">
              <span className="text-[#89ddff]">&quot;first_lang&quot;</span>
              <span className="text-white/50">:</span>{" "}
              <span className="text-[#c3e88d]">&quot;Pawn (SA-MP)&quot;</span>
            </p>
            <p className="text-white/50">{"}"}</p>
            <p>
              <span className="text-[#28c840]">$</span>{" "}
              <span className="text-white/80">uptime --learning</span>
            </p>
            <p className="text-white/60">
              since <span className="text-[#ffcb6b]">2019</span> · still
              compiling<span className="type-cursor" />
            </p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce font-mono text-xs"
        aria-label="Scroll down"
      >
        scroll ↓
      </a>
    </section>
  );
}
