"use client";

import { useEffect, useState } from "react";
import { useApp } from "./providers";

const links = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "projects", key: "projects" },
  { id: "contact", key: "contact" },
] as const;

export function Navbar() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight">
          <span className="text-muted-foreground">~/</span>
          <span className="text-accent">rizky</span>
          <span className="text-muted-foreground">$</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <span className="text-accent/70">0{i + 1}.</span>{" "}
              {t.nav[l.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-lg border border-border text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
            aria-label="Switch language"
          >
            {lang === "id" ? "EN" : "ID"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            className="md:hidden p-2 rounded-lg border border-border"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-3 font-mono">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-accent"
            >
              <span className="text-accent/70">0{i + 1}.</span> {t.nav[l.key]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
