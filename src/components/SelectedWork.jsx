import React from 'react';
import { ArrowUpRight, ArrowRight, Terminal } from 'lucide-react';
import { projects } from '../data/projects';

export default function SelectedWork({ onSelectProject }) {
  return (
    <section id="work" className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border-subtle gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
              01 / SYSTEMS & PRODUCTION WORK
            </span>
            <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary max-w-sm">
            Applied AI systems, agentic architectures, automation engines, and backend services deployed in real business contexts.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {projects.map((project) => {
            const isFlagship = project.flagship;

            return (
              <article
                key={project.id}
                className={`bg-canvas-card border rounded-sm transition-all overflow-hidden ${
                  isFlagship
                    ? 'border-ink shadow-xs'
                    : 'border-border-subtle hover:border-ink-muted'
                }`}
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 bg-canvas-subtle border-b border-border-subtle gap-3">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs">
                    <span className="font-bold text-ink bg-canvas px-2 py-0.5 rounded-xs border border-border-subtle">
                      {project.number}
                    </span>
                    <span className="font-semibold text-ink uppercase tracking-wide">
                      {project.organization}
                    </span>
                    {project.highlight && (
                      <span className="text-[10px] sm:text-[11px] font-medium text-accent bg-accent-subtle px-2 py-0.5 rounded-xs">
                        {project.highlight}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-ink-secondary hover:text-accent transition-colors"
                      >
                        <span className="hidden sm:inline">Visit Website</span>
                        <span className="sm:hidden">Visit</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-ink hover:text-accent transition-colors cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Project Main Body */}
                <div className="p-4 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left: Summary & Metadata */}
                    <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                      <div>
                        <h3 className="text-project-title font-heading font-bold text-ink tracking-tight mb-2 break-words">
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs text-accent font-semibold uppercase mb-3 sm:mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
                          {project.summary}
                        </p>
                      </div>

                      {/* Specs */}
                      <div className="space-y-3 font-mono text-xs border-t border-border-subtle pt-4 sm:pt-5">
                        <div>
                          <span className="text-ink-muted block text-[11px] mb-0.5">ROLE</span>
                          <span className="text-ink font-semibold">{project.role}</span>
                        </div>
                        <div>
                          <span className="text-ink-muted block text-[11px] mb-0.5">FOCUS</span>
                          <span className="text-ink font-medium leading-tight">{project.focus}</span>
                        </div>
                        <div>
                          <span className="text-ink-muted block text-[11px] mb-1">TECHNOLOGY</span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technology.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 bg-canvas border border-border-subtle text-ink text-[11px] rounded-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink hover:bg-accent text-canvas px-5 py-3 sm:py-2.5 rounded-sm font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                        >
                          <span>Explore System & Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right: Architectural Workflow Schematic */}
                    <div className="lg:col-span-7 bg-canvas-subtle border border-border-subtle rounded-sm p-3.5 sm:p-6 w-full">
                      <div className="flex items-center justify-between pb-3 mb-3 sm:mb-4 border-b border-border-subtle">
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate">SYSTEM PIPELINE ARCHITECTURE</span>
                        </span>
                        <span className="font-mono text-[9px] sm:text-[10px] text-ink-secondary shrink-0">
                          {project.workflow.length} STAGES
                        </span>
                      </div>

                      {/* Step-by-step Flow Visualizer */}
                      <div className="space-y-1.5 sm:space-y-2">
                        {project.workflow.map((step, idx) => (
                          <div
                            key={step.id}
                            className="bg-canvas-card border border-border-subtle p-2.5 sm:p-3 rounded-xs flex items-start gap-2.5 sm:gap-3 hover:border-ink transition-colors"
                          >
                            <span className="font-mono text-[10px] font-bold text-ink-secondary bg-canvas-subtle px-1.5 py-0.5 rounded-xs shrink-0 mt-0.5">
                              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="font-mono text-xs font-bold text-ink tracking-tight break-words">
                                {step.label}
                              </div>
                              <div className="text-xs text-ink-secondary font-sans mt-0.5 leading-snug">
                                {step.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technical Footnote */}
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-border-subtle flex flex-wrap items-center justify-between gap-1.5 text-[9px] sm:text-[10px] font-mono text-ink-secondary">
                        <span className="truncate">FASTAPI · ASYNC PIPELINES · AGENTS</span>
                        <span className="text-ink font-semibold shrink-0">PRODUCTION READY</span>
                      </div>
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
