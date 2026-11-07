"use client";

import { useApp } from "./providers";
import { LINKS } from "@/lib/i18n";

export function Contact() {
  const { t } = useApp();

  const cards = [
    {
      href: `mailto:${LINKS.email}`,
      label: t.contact.email,
      value: LINKS.email,
      icon: "✉️",
      external: false,
    },
    {
      href: LINKS.github,
      label: t.contact.github,
      value: "riki-rg",
      icon: (
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      external: true,
    },
    {
      href: LINKS.linkedin,
      label: t.contact.linkedin,
      value: "Rizqy Maulana Hakim",
      icon: (
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      external: true,
    },
    {
      href: LINKS.instagram,
      label: t.contact.instagram,
      value: "@rizqyhakim_",
      icon: (
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-muted/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary">#</span> {t.contact.title}
        </h2>
        <p className="text-muted-foreground mb-10">{t.contact.subtitle}</p>
        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              {...(card.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <span className="text-foreground shrink-0">
                {typeof card.icon === "string" ? (
                  <span className="text-2xl">{card.icon}</span>
                ) : (
                  card.icon
                )}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {card.label}
                </span>
                <span className="block text-sm font-medium truncate">
                  {card.value}
                </span>
              </span>
            </a>
          ))}
        </div>
        <a
          href={`mailto:${LINKS.email}`}
          className="mt-8 inline-block px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
        >
          {t.contact.sendEmail}
        </a>
      </div>
    </section>
  );
}
