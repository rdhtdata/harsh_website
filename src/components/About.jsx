import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 pb-6 border-b border-border-subtle">
          <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
            05 / ABOUT & CONTEXT
          </span>
          <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
            Beyond the CV
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <p className="text-lg sm:text-2xl font-heading font-semibold text-ink leading-snug">
              I like building things.
            </p>
            <p className="text-sm sm:text-lg text-ink-secondary font-normal leading-relaxed font-sans">
              Sometimes they're AI systems. Sometimes they're businesses. Sometimes they're experiments that probably shouldn't work.
            </p>
            <p className="text-sm sm:text-lg text-ink-secondary font-normal leading-relaxed font-sans">
              I'm interested in the intersection of software, AI and entrepreneurship — particularly where technology can remove unnecessary complexity.
            </p>

            <div className="pt-5 sm:pt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs text-ink">
              <div className="p-3.5 sm:p-4 bg-canvas-card border border-border-subtle rounded-sm">
                <span className="text-ink-muted block text-[10px] mb-1 uppercase">ORIENTATION</span>
                <span className="font-semibold">Applied Systems & Solutions</span>
              </div>
              <div className="p-3.5 sm:p-4 bg-canvas-card border border-border-subtle rounded-sm">
                <span className="text-ink-muted block text-[10px] mb-1 uppercase">LOCATIONS</span>
                <span className="font-semibold">Paris · India · Global Remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured "Currently" Block */}
          <div className="lg:col-span-5 bg-canvas-card border border-ink p-5 sm:p-7 rounded-sm shadow-xs space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border-subtle">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
                <span className="w-2 h-2 bg-accent shrink-0"></span>
                CURRENT FOCUS
              </div>
              <span className="font-mono text-[11px] text-ink-secondary">2026 ACTIVE</span>
            </div>

            <div className="space-y-3 sm:space-y-4 font-mono text-xs">
              <div className="p-3 bg-canvas-subtle border border-border-subtle rounded-xs">
                <span className="text-ink-muted text-[10px] uppercase block mb-1">BUILDING</span>
                <span className="font-bold text-ink text-sm font-heading">Octagram</span>
                <p className="text-xs text-ink-secondary font-sans mt-0.5">
                  AI-powered business automation engines & client platforms.
                </p>
              </div>

              <div className="p-3 bg-canvas-subtle border border-border-subtle rounded-xs">
                <span className="text-ink-muted text-[10px] uppercase block mb-1">WORKING ON</span>
                <span className="font-semibold text-ink leading-snug block">Agentic AI · Automation · LLM Systems</span>
              </div>

              <div className="p-3 bg-canvas-subtle border border-border-subtle rounded-xs">
                <span className="text-ink-muted text-[10px] uppercase block mb-1">EXPLORING</span>
                <span className="font-semibold text-ink leading-snug block">AI Infrastructure · Software Architecture · Workflows</span>
              </div>

              <div className="p-3 bg-accent-subtle border border-accent/30 rounded-xs">
                <span className="text-accent text-[10px] font-bold uppercase block mb-1">LOOKING FOR</span>
                <span className="font-semibold text-ink leading-snug block">
                  AI Engineering opportunities from October 2026
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
