import React from 'react';
import { Cpu, Workflow, Server, Database, Bot } from 'lucide-react';
import { capabilities } from '../data/experience';

const iconMap = {
  Cpu: Bot,
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
              02 / DISCIPLINES
            </span>
            <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
              What I Build
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary max-w-sm">
            Core engineering capabilities centered on applied AI, autonomous agents, automation workflows, and production backend services.
          </p>
        </div>

        {/* 5 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((item, index) => {
            const Icon = iconMap[item.icon] || Cpu;
            const isFullWidth = index === 4; // 5th card spans full width on lg screens

            return (
              <div
                key={item.category}
                className={`bg-canvas-card border border-border-subtle hover:border-ink p-5 sm:p-7 rounded-sm transition-all flex flex-col justify-between ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5 pb-3.5 border-b border-border-subtle">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-ink bg-canvas-subtle px-2 py-0.5 rounded-xs border border-border-subtle">
                        {item.number}
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-ink tracking-tight">
                        {item.category}
                      </h3>
                    </div>
                    <Icon className="w-4 h-4 text-accent shrink-0" />
                  </div>

                  {/* Tagline & Description */}
                  <p className="font-mono text-xs text-accent font-semibold mb-2.5">
                    {item.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-5 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-3.5 border-t border-border-subtle">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2 py-0.5 bg-canvas-subtle border border-border-subtle text-ink rounded-xs"
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
