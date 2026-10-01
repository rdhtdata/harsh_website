import React from 'react';
import { Cpu, Server, Database, Terminal } from 'lucide-react';
import { techDisciplines } from '../data/experience';

const disciplineIcons = {
  "AI / ML": Cpu,
  "BACKEND": Server,
  "AI INFRASTRUCTURE": Database,
  "DEVELOPMENT & OPS": Terminal
};

export default function Technology() {
  return (
    <section id="technology" className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border-subtle gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
              06 / TECHNICAL STACK
            </span>
            <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
              Technologies & Infrastructure
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary max-w-sm">
            Disciplined tooling chosen for production reliability, fast inference, and asynchronous execution rather than hype.
          </p>
        </div>

        {/* 4 Grouped Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {techDisciplines.map((group) => {
            const Icon = disciplineIcons[group.category] || Terminal;

            return (
              <div
                key={group.category}
                className="bg-canvas-card border border-border-subtle hover:border-ink p-5 sm:p-6 rounded-sm flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border-subtle">
                    <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <Icon className="w-4 h-4 text-accent shrink-0" />
                  </div>

                  <p className="text-xs text-ink-secondary font-sans leading-relaxed mb-5">
                    {group.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-border-subtle">
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] px-2 py-0.5 bg-canvas-subtle border border-border-subtle text-ink rounded-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
