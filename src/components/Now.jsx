import React from 'react';
import { Clock } from 'lucide-react';

export default function Now() {
  return (
    <section className="py-16 sm:py-20 md:py-24 border-b border-border-subtle bg-canvas-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-canvas-card border border-border-subtle p-5 sm:p-8 md:p-10 rounded-sm">
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-border-subtle">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <h2 className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-wider">
                NOW · STATUS UPDATE (SEPTEMBER 2026)
              </h2>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-ink-secondary">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>TIMEZONE: CET / IST / UTC</span>
            </div>
          </div>

          {/* 4 Status Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-mono text-xs">
            
            <div className="p-3.5 sm:p-4 bg-canvas border border-border-subtle rounded-xs">
              <span className="text-ink-muted uppercase text-[10px] block mb-1">BUILDING</span>
              <span className="font-bold text-ink text-sm block mb-1">Octagram</span>
              <p className="text-[11px] text-ink-secondary font-sans leading-relaxed">
                Deploying custom AI automation & platform tooling for client workflows.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-canvas border border-border-subtle rounded-xs">
              <span className="text-ink-muted uppercase text-[10px] block mb-1">WORKING</span>
              <span className="font-bold text-ink text-sm block mb-1">AI Automation Systems</span>
              <p className="text-[11px] text-ink-secondary font-sans leading-relaxed">
                Connecting browser agents, CRM endpoints, and vector databases.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-canvas border border-border-subtle rounded-xs">
              <span className="text-ink-muted uppercase text-[10px] block mb-1">EXPLORING</span>
              <span className="font-bold text-ink text-sm block mb-1">Agentic Architectures</span>
              <p className="text-[11px] text-ink-secondary font-sans leading-relaxed">
                Production-grade multi-agent coordination and low-latency inference.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-accent-subtle border border-accent/30 rounded-xs">
              <span className="text-accent uppercase text-[10px] font-bold block mb-1">AVAILABILITY</span>
              <span className="font-bold text-ink text-sm block mb-1">October 2026</span>
              <p className="text-[11px] text-ink-secondary font-sans leading-relaxed">
                Open to AI Engineering roles, technical collaborations, and ambitious projects.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
