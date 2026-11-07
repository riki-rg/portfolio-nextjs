"use client";

import { useApp } from "./providers";
import { useInView } from "./use-in-view";

export function Skills() {
  const { t } = useApp();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-6 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="text-primary">#</span> {t.skills.title}
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          {t.skills.subtitle}
        </p>
        <div ref={ref} className="space-y-5">
          {t.skills.items.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm font-medium mb-1.5">
                <span>{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-border overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                  style={{
                    width: inView ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
