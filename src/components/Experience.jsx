import React from 'react';
import { ArrowUpRight, GraduationCap, Award, FileText } from 'lucide-react';
import { experience, education } from '../data/experience';

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border-subtle gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
              04 / TRAJECTORY & EXPERIENCE
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
          
          {/* Left Column: Timeline of Experience */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-ink"></span>
              PROFESSIONAL TIMELINE
            </h3>

            <div className="space-y-5 sm:space-y-6">
              {experience.map((item) => (
                <div
                  key={`${item.company}-${item.period}`}
                  className="bg-canvas-card border border-border-subtle p-5 sm:p-7 rounded-sm hover:border-ink transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="font-heading font-bold text-base sm:text-lg text-ink tracking-tight">
                        {item.company}
                      </span>
                      {item.badge && (
                        <span className="font-mono text-[10px] sm:text-[11px] text-accent bg-accent-subtle px-2 py-0.5 rounded-xs font-semibold border border-accent/20">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs font-semibold text-ink-secondary">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono text-accent font-semibold mb-3">
                    <span>{item.role}</span>
                    <span className="text-ink-muted font-normal">{item.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4 font-sans">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-border-subtle pt-3">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-ink flex items-start gap-2 font-sans">
                        <span className="font-mono text-ink-muted text-[11px] select-none">—</span>
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Credentials */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span>
              EDUCATION & CREDENTIALS
            </h3>

            <div className="space-y-5 sm:space-y-6">
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

            {/* Quick Skills Summary Card */}
            <div className="bg-canvas-subtle border border-border-subtle p-5 sm:p-6 rounded-sm font-mono text-xs space-y-3">
              <div className="font-bold text-ink uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-ink shrink-0" />
                CORE COMPETENCIES
              </div>
              <p className="text-[11px] text-ink-secondary font-sans leading-relaxed">
                Applied AI architecture, LLM agent pipelines, API integrations, high-performance Python backends, and data science workflows.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
