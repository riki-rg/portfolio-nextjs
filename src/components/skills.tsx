"use client";

import { useApp } from "./providers";
import { useInView } from "./use-in-view";

// VS Code-like language colors
const LANG_COLORS: Record<string, string> = {
  HTML: "#e34c26",
  Python: "#3572A5",
  "Pawn (SA-MP Scripting)": "#dbb284",
  PHP: "#4F5D95",
  CSS: "#563d7c",
  JavaScript: "#f1e05a",
  "C++": "#f34b7d",
  "React & Next.js": "#61DAFB",
  Laravel: "#FF2D20",
};

export function Skills() {
  const { t } = useApp();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent mb-2">
          <span className="text-muted-foreground">$</span> ls ./skills
        </p>
        <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
          {t.skills.title}
        </h2>
        <p className="text-muted-foreground mb-12 font-mono text-sm">
          {t.skills.subtitle}
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {t.skills.items.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center font-mono text-sm mb-2">
                <span className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-[4px] shrink-0"
                    style={{
                      background:
                        LANG_COLORS[skill.name] ?? "var(--muted-foreground)",
                    }}
                  />
                  {skill.name}
                </span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-md bg-muted border border-border overflow-hidden relative">
                <div
                  className="h-full rounded-md transition-all duration-1000 ease-out relative"
                  style={{
                    width: inView ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 90}ms`,
                    background:
                      LANG_COLORS[skill.name] ?? "var(--muted-foreground)",
                  }}
                >
                  {/* progress bar shine */}
                  <span
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
