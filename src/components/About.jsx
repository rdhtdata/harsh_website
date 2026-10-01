import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 pb-6 border-b border-border-subtle">
          <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
            08 / CONTEXT & STORY
          </span>
          <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
            Background & Direction
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink leading-snug tracking-tight">
              Engineering AI systems that survive production.
            </h3>
            
            <p className="text-sm sm:text-base text-ink-secondary font-normal leading-relaxed font-sans">
              My work focuses on bridging the gap between raw machine learning models and reliable business software. Rather than treating AI as an isolated novelty, I build end-to-end architectures where models are grounded in verified data, orchestrated via clean APIs, and integrated directly into commercial operations.
            </p>

            <p className="text-sm sm:text-base text-ink-secondary font-normal leading-relaxed font-sans">
              Over the last few years, my technical trajectory evolved from data science and predictive analytics into multimodal retrieval (RAG), autonomous multi-agent pipelines, and production backend services — culminating in founding Octagram to deliver digital automation engines to enterprise clients.
            </p>

            <div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs text-ink">
              <div className="p-3.5 bg-canvas-card border border-border-subtle rounded-sm">
                <span className="text-ink-muted block text-[10px] mb-1 uppercase">SPECIALIZATION</span>
                <span className="font-semibold">Applied AI & Backend Engineering</span>
              </div>
              <div className="p-3.5 bg-canvas-card border border-border-subtle rounded-sm">
                <span className="text-ink-muted block text-[10px] mb-1 uppercase">GEOGRAPHY</span>
                <span className="font-semibold">Paris, France · Remote Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured "Currently" Block */}
          <div className="lg:col-span-5 bg-canvas-card border border-ink p-5 sm:p-7 rounded-sm shadow-xs space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
                <span className="w-2 h-2 bg-accent shrink-0"></span>
                ACTIVE FOCUS
              </div>
              <span className="font-mono text-[11px] text-ink-secondary">2026</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-canvas-subtle border border-border-subtle rounded-xs">
                <span className="text-ink-muted text-[10px] uppercase block mb-1">FOUNDER & LEAD</span>
                <span className="font-bold text-ink text-sm font-heading">Octagram</span>
                <p className="text-xs text-ink-secondary font-sans mt-0.5">
                  AI-powered business automation engines & client software platforms.
                </p>
              </div>

              <div className="p-3 bg-canvas-subtle border border-border-subtle rounded-xs">
                <span className="text-ink-muted text-[10px] uppercase block mb-1">ENGINEERING CONTRACT</span>
                <span className="font-bold text-ink text-sm font-heading">FOREO</span>
                <p className="text-xs text-ink-secondary font-sans mt-0.5">
                  AI advertising operations automation & agentic workflows.
                </p>
              </div>

              <div className="p-3 bg-accent-subtle border border-accent/30 rounded-xs">
                <span className="text-accent text-[10px] font-bold uppercase block mb-1">AVAILABILITY</span>
                <span className="font-semibold text-ink leading-snug block">
                  Open to AI Engineering roles from October 2026
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
