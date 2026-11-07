"use client";

import { useApp } from "./providers";

export function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="text-primary">#</span> {t.projects.title}
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          {t.projects.subtitle}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project) => (
            <article
              key={project.title}
              className="group bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-32 mb-5 rounded-xl bg-gradient-to-br from-primary/20 via-accent/15 to-primary/5 flex items-center justify-center">
                <span className="text-3xl font-extrabold text-primary/40 group-hover:scale-110 transition-transform duration-300">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                {t.projects.view}
                <svg
                  className="w-4 h-4"
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
