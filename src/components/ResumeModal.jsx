import React, { useEffect } from 'react';
import { X, Printer, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { experience, education } from '../data/experience';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10 bg-black/65 backdrop-blur-xs animate-in fade-in duration-150 print:p-0 print:bg-white print:static"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onClick={onClose}
    >
      <div
        className="bg-canvas w-full max-w-4xl max-h-[94vh] sm:max-h-[92vh] rounded-sm border border-border-subtle shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 print:max-h-none print:shadow-none print:border-none print:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-canvas-card border-b border-border-subtle shrink-0 print:hidden">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink">
            <span className="w-2 h-2 bg-accent"></span>
            <span>RÉSUMÉ / CV</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-canvas hover:bg-canvas-subtle border border-border-subtle rounded-xs font-mono text-xs font-medium text-ink cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
              <span className="sm:hidden">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-ink-secondary hover:text-ink hover:bg-canvas-subtle rounded transition-colors cursor-pointer"
              aria-label="Close Résumé"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Content Paper */}
        <div className="overflow-y-auto px-4 sm:px-12 py-6 sm:py-10 space-y-6 sm:space-y-8 bg-canvas-card print:p-0 text-ink">
          
          {/* Top Header */}
          <div className="border-b border-ink pb-5 sm:pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2 mb-2">
              <h1 id="resume-title" className="text-2xl sm:text-4xl font-heading font-bold text-ink tracking-tight break-words">
                HARSH TRIPATHI
              </h1>
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                AI Solutions Engineer
              </span>
            </div>

            <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl mb-4 font-sans leading-relaxed">
              Applied AI engineer designing and deploying production LLM applications, autonomous automation pipelines, and scalable Python/FastAPI backend services.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 font-mono text-[11px] sm:text-xs text-ink">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-accent shrink-0" /> rdht.work@gmail.com
              </span>
              <span className="text-border-subtle hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" /> Paris, France · Remote
              </span>
              <span className="text-border-subtle hidden sm:inline">|</span>
              <a
                href="https://linkedin.com/in/rdh-tripathi-325752307"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-0.5 text-accent"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-border-subtle hidden sm:inline">|</span>
              <a
                href="https://github.com/rishabhprojects-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-0.5 text-accent"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Technical Competencies */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-ink uppercase tracking-wider border-b border-border-subtle pb-1">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 font-mono text-xs">
              <div className="p-3 bg-canvas border border-border-subtle rounded-xs">
                <span className="text-ink-muted uppercase text-[10px] block mb-1">AI & LLM SYSTEMS</span>
                <span className="text-ink leading-relaxed">LLMs, AI Agents, RAG Pipelines, Tool Calling, Vector Search (FAISS), Multimodal AI, Ollama</span>
              </div>
              <div className="p-3 bg-canvas border border-border-subtle rounded-xs">
                <span className="text-ink-muted uppercase text-[10px] block mb-1">BACKEND & INFRASTRUCTURE</span>
                <span className="text-ink leading-relaxed">Python, FastAPI, Docker, PostgreSQL, REST APIs, Redis, Microservices, Async Architecture</span>
              </div>
              <div className="p-3 bg-canvas border border-border-subtle rounded-xs">
                <span className="text-ink-muted uppercase text-[10px] block mb-1">AUTOMATION & INTEGRATION</span>
                <span className="text-ink leading-relaxed">Playwright, Browser Automation, Webhooks, CRM APIs (HubSpot/Notion), Workflow Pipelines</span>
              </div>
              <div className="p-3 bg-canvas border border-border-subtle rounded-xs">
                <span className="text-ink-muted uppercase text-[10px] block mb-1">DATA & MACHINE LEARNING</span>
                <span className="text-ink leading-relaxed">Pandas, NumPy, Scikit-learn, SQL, Feature Engineering, Predictive Modeling</span>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs font-bold text-ink uppercase tracking-wider border-b border-border-subtle pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-4 sm:space-y-5">
              {experience.map((item) => (
                <div key={`${item.company}-${item.period}`} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="font-heading font-bold text-sm sm:text-base text-ink">
                        {item.company}
                      </span>
                      <span className="font-mono text-xs text-accent font-semibold">
                        — {item.role}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs text-ink-secondary">
                      {item.period} | {item.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-secondary font-sans">
                    {item.description}
                  </p>

                  <ul className="space-y-1 pt-1">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-ink flex items-start gap-2 font-sans">
                        <span className="font-mono text-ink-muted select-none">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-ink uppercase tracking-wider border-b border-border-subtle pb-1">
              EDUCATION & CERTIFICATIONS
            </h2>

            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-mono text-xs">
                  <div>
                    <span className="font-bold text-ink">{edu.institution}</span> — {edu.degree} ({edu.details})
                    <p className="text-[11px] text-ink-secondary font-sans mt-0.5">{edu.focus}</p>
                  </div>
                  <span className="text-ink-secondary text-[11px]">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-canvas-card border-t border-border-subtle flex items-center justify-between shrink-0 font-mono text-xs print:hidden">
          <span className="text-ink-secondary text-[11px]">OCTOBER 2026 AVAILABILITY</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 sm:py-2 bg-ink text-canvas hover:bg-accent rounded-sm cursor-pointer transition-colors"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
}
