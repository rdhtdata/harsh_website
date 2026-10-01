import React, { useState } from 'react';
import { ArrowUpRight, GraduationCap, Award, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { experience, education } from '../data/experience';

export default function Experience({ onOpenResume }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="experience" className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border-subtle gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
              04 / TRAJECTORY
            </span>
            <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
              Experience & Education
            </h2>
          </div>
          
          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 font-mono text-xs font-semibold text-ink hover:text-accent border border-ink hover:border-accent px-4 py-2.5 sm:py-2 rounded-sm transition-colors cursor-pointer bg-canvas-card"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Full Résumé</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Timeline of Experience with Accordion Expand */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-ink"></span>
                PROFESSIONAL TIMELINE
              </h3>
              <span className="font-mono text-[11px] text-ink-secondary">
                CLICK TO EXPAND DETAILS
              </span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {experience.map((item, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <div
                    key={`${item.company}-${item.period}`}
                    className={`bg-canvas-card border rounded-sm transition-all overflow-hidden ${
                      isExpanded ? 'border-ink shadow-xs' : 'border-border-subtle hover:border-ink-muted'
                    }`}
                  >
                    {/* Header Bar */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(index)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-3 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    >
                      <div className="space-y-1.5 min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="font-heading font-bold text-base sm:text-lg text-ink tracking-tight">
                            {item.company}
                          </span>
                          {item.badge && (
                            <span className="font-mono text-[10px] sm:text-[11px] text-accent bg-accent-subtle px-2 py-0.5 rounded-xs font-semibold border border-accent/20">
                              {item.badge}
                            </span>
                          )}
                          {item.highlight && (
                            <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-xs font-semibold border border-emerald-600/30">
                              {item.highlight}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs font-mono">
                          <span className="text-ink font-semibold">{item.role}</span>
                          <span className="text-ink-muted">·</span>
                          <span className="text-ink-secondary">{item.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 mt-1">
                        <span className="font-mono text-[11px] sm:text-xs font-semibold text-ink-secondary">
                          {item.period}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-ink-secondary" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-ink-secondary" />
                        )}
                      </div>
                    </button>

                    {/* Expandable Details Body */}
                    {isExpanded && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-border-subtle animate-in fade-in duration-150 space-y-4">
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans pt-4">
                          {item.description}
                        </p>

                        <div className="space-y-2 pt-2">
                          <span className="font-mono text-[11px] font-bold text-ink uppercase tracking-wider block">
                            KEY DELIVERABLES:
                          </span>
                          <ul className="space-y-1.5">
                            {item.highlights.map((h, i) => (
                              <li key={i} className="text-xs sm:text-sm text-ink flex items-start gap-2 font-sans">
                                <span className="font-mono text-accent text-xs select-none mt-0.5 font-bold">✓</span>
                                <span className="leading-snug text-ink-secondary">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education & Credentials */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span>
              EDUCATION & CREDENTIALS
            </h3>

            <div className="space-y-4 sm:space-y-5">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="bg-canvas-card border border-border-subtle p-5 sm:p-6 rounded-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-ink-secondary bg-canvas-subtle px-2 py-0.5 rounded-xs border border-border-subtle">
                      {edu.period}
                    </span>
                    <GraduationCap className="w-4 h-4 text-accent" />
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-base text-ink tracking-tight">
                      {edu.institution}
                    </h4>
                    <p className="font-mono text-xs text-accent font-semibold">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border-subtle font-mono text-xs">
                    <span className="text-ink font-bold block mb-1">{edu.details}</span>
                    <p className="text-[11px] text-ink-secondary font-sans leading-relaxed">
                      {edu.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Career Trajectory Narrative */}
            <div className="bg-canvas-subtle border border-border-subtle p-5 sm:p-6 rounded-sm font-mono text-xs space-y-2.5">
              <div className="font-bold text-ink uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-ink shrink-0" />
                CAREER TRAJECTORY
              </div>
              <p className="text-[11px] text-ink-secondary font-sans leading-relaxed">
                Data / ML &rarr; Applied AI &rarr; LLM &amp; RAG Systems &rarr; Agentic Systems &rarr; Production AI &rarr; Founder at Octagram.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
