import React from 'react';
import { philosophies } from '../data/experience';

export default function Philosophy() {
  return (
    <section className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 pb-6 border-b border-border-subtle">
          <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
            06 / PERSPECTIVES
          </span>
          <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
            A Few Things I Believe
          </h2>
        </div>

        {/* 3 Editorial Pull Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {philosophies.map((item) => (
            <div
              key={item.id}
              className="bg-canvas-card border border-border-subtle p-5 sm:p-8 rounded-sm flex flex-col justify-between hover:border-ink transition-colors"
            >
              <div>
                <span className="font-mono text-xs font-bold text-accent bg-accent-subtle px-2 py-0.5 rounded-xs inline-block mb-4 sm:mb-6 border border-accent/20">
                  {item.id}
                </span>

                <blockquote className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-ink leading-tight tracking-tight mb-3 sm:mb-4">
                  "{item.quote}"
                </blockquote>

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans">
                  {item.context}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-border-subtle flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-ink-muted">
                <span>PRINCIPLE</span>
                <span>HARSH TRIPATHI</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
