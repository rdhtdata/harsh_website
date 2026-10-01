import React from 'react';
import { processStages } from '../data/experience';

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border-subtle gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
              03 / METHODOLOGY
            </span>
            <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
              From Problem to Production
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary max-w-sm">
            A disciplined engineering process ensuring systems solve genuine operational bottlenecks with reliability and maintainability.
          </p>
        </div>

        {/* 5 Stages Sequence - Responsive from mobile to wide desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {processStages.map((stage, idx) => (
            <div
              key={stage.step}
              className="bg-canvas-card border border-border-subtle p-5 sm:p-6 rounded-sm flex flex-col justify-between hover:border-ink transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-ink bg-canvas-subtle px-2 py-0.5 rounded-xs border border-border-subtle">
                    {stage.step}
                  </span>
                  <span className="font-mono text-[10px] text-ink-muted uppercase">
                    STAGE {idx + 1}/5
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-ink tracking-tight mb-1">
                  {stage.title}
                </h3>
                <p className="font-mono text-xs text-accent font-semibold mb-2.5">
                  {stage.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans">
                  {stage.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border-subtle text-[10px] font-mono text-ink-muted">
                PHASE // 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
