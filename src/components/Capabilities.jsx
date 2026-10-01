import React from 'react';
import { Cpu, Workflow, Server, Database } from 'lucide-react';
import { capabilities } from '../data/experience';

const iconMap = {
  Cpu: Cpu,
  Workflow: Workflow,
  Server: Server,
  Database: Database
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border-subtle gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
              02 / CAPABILITIES
            </span>
            <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
              What I Build
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary max-w-sm">
            Core engineering competencies centered on applied artificial intelligence, automation infrastructure, and scalable backend services.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {capabilities.map((item) => {
            const Icon = iconMap[item.icon] || Cpu;

            return (
              <div
                key={item.category}
                className="bg-canvas-card border border-border-subtle hover:border-ink p-5 sm:p-8 rounded-sm transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3.5 sm:pb-4 border-b border-border-subtle">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="font-mono text-xs font-bold text-ink bg-canvas-subtle px-2 py-0.5 rounded-xs border border-border-subtle">
                        {item.number}
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-ink tracking-tight">
                        {item.category}
                      </h3>
                    </div>
                    <Icon className="w-5 h-5 text-accent shrink-0" />
                  </div>

                  {/* Tagline & Description */}
                  <p className="font-mono text-xs text-accent font-semibold mb-2.5 sm:mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-5 sm:mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-3.5 sm:pt-4 border-t border-border-subtle">
                  <span className="text-[10px] font-mono text-ink-muted uppercase block mb-2">
                    TECHNOLOGIES & METHODS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 bg-canvas-subtle border border-border-subtle text-ink rounded-xs"
                      >
                        {tech}
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
