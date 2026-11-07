"use client";

import { useApp } from "./providers";

export function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="py-24 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-accent mb-2">
          <span className="text-muted-foreground">$</span> git remote -v
        </p>
        <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
          {t.projects.title}
        </h2>
        <p className="text-muted-foreground mb-12 font-mono text-sm">
          {t.projects.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <article
              key={project.title}
              className="bento-card group bg-card border border-border rounded-2xl p-6 flex flex-col relative overflow-hidden"
            >
              {/* index number watermark */}
              <span className="absolute -top-3 -right-1 font-mono font-extrabold text-7xl text-muted-foreground/10 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-4">
                <span className="text-accent">▸</span>
                <span className="truncate">riki-rg/{project.repo}</span>
              </div>

              <h3 className="text-lg font-extrabold mb-2 font-mono tracking-tight">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-accent-soft border border-accent/30 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono font-semibold text-accent hover:underline inline-flex items-center gap-1.5"
              >
                {t.projects.view}
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
