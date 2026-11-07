"use client";

import { useEffect, useState } from "react";
import { useApp } from "./providers";

export function Hero() {
  const { t } = useApp();
  const roles = t.hero.roles;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center pt-24">
        <p className="text-primary font-semibold mb-3 animate-fade-in">
          {t.hero.greeting}
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2">
          {t.hero.name}
          <span className="text-2xl sm:text-3xl font-semibold text-muted-foreground block mt-2">
            {t.hero.nickname}
          </span>
        </h1>
        <div className="h-8 my-6 flex items-center justify-center">
          <p
            key={index}
            className="text-xl sm:text-2xl font-semibold text-accent animate-slide-up"
          >
            {roles[index]}
          </p>
        </div>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          {t.hero.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-border font-semibold hover:bg-muted transition-colors"
          >
            {t.hero.contact}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        aria-label="Scroll down"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 14l-7 7-7-7M19 5l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
