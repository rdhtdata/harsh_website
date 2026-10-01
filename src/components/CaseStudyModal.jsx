import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="bg-canvas w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] rounded-sm border border-border-subtle shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-canvas-card border-b border-border-subtle shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="font-mono text-xs font-bold text-ink bg-canvas-subtle px-2 py-0.5 rounded-xs border border-border-subtle shrink-0">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs text-ink-secondary uppercase truncate">
              {project.organization}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent hover:underline"
              >
                VISIT {project.title} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-ink-secondary hover:text-ink hover:bg-canvas-subtle rounded transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-4 sm:px-10 py-6 sm:py-8 space-y-8 sm:space-y-10">
          
          {/* Main Title Block */}
          <div>
            <h2 id="case-study-title" className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-ink tracking-tight mb-2 break-words">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary font-medium max-w-2xl mb-5 sm:mb-6">
              {project.subtitle}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3.5 sm:p-4 bg-canvas-card border border-border-subtle rounded-sm font-mono text-xs">
              <div>
                <span className="text-ink-muted block mb-1 text-[11px]">ROLE</span>
                <span className="font-semibold text-ink">{project.role}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-ink-muted block mb-1 text-[11px]">CORE FOCUS</span>
                <span className="font-semibold text-ink">{project.focus}</span>
              </div>
            </div>
          </div>

          {/* 1. THE PROBLEM */}
          <section className="space-y-2.5 sm:space-y-3 border-t border-border-subtle pt-6 sm:pt-8">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
              <span className="w-2 h-2 bg-ink shrink-0"></span>
              THE PROBLEM
            </div>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
              {project.caseStudy.problem}
            </p>
          </section>

          {/* 2. APPROACH */}
          <section className="space-y-2.5 sm:space-y-3 border-t border-border-subtle pt-6 sm:pt-8">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
              <span className="w-2 h-2 bg-ink shrink-0"></span>
              APPROACH
            </div>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
              {project.caseStudy.approach}
            </p>
          </section>

          {/* 3. ARCHITECTURE & SYSTEM PIPELINE */}
          <section className="space-y-3 sm:space-y-4 border-t border-border-subtle pt-6 sm:pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
                <span className="w-2 h-2 bg-accent shrink-0"></span>
                SYSTEM ARCHITECTURE & WORKFLOW
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] text-ink-secondary hidden sm:inline">
                CLICK NODES TO INSPECT
              </span>
            </div>

            {/* Interactive Workflow Visualizer */}
            <div className="bg-canvas-card border border-border-subtle rounded-sm p-3.5 sm:p-5 space-y-3 sm:space-y-4">
              <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
                {project.workflow.map((node, index) => {
                  const isSelected = activeWorkflowIndex === index;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveWorkflowIndex(index)}
                      className={`font-mono text-xs px-2.5 sm:px-3 py-1.5 rounded-sm border transition-all cursor-pointer text-left flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-ink text-canvas border-ink'
                          : 'bg-canvas text-ink border-border-subtle hover:border-ink-muted'
                      }`}
                    >
                      <span className={`text-[10px] ${isSelected ? 'text-ink-muted' : 'text-ink-secondary'}`}>
                        {index + 1}.
                      </span>
                      <span>{node.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Node Detail Card */}
              {project.workflow[activeWorkflowIndex] && (
                <div className="bg-canvas border border-border-subtle p-3.5 sm:p-4 rounded-sm font-mono text-xs">
                  <div className="text-[10px] sm:text-[11px] text-accent font-semibold mb-1">
                    STAGE {activeWorkflowIndex + 1} // {project.workflow[activeWorkflowIndex].label}
                  </div>
                  <div className="text-ink font-sans text-xs sm:text-sm">
                    {project.workflow[activeWorkflowIndex].desc}
                  </div>
                </div>
              )}
            </div>

            {/* Architectural Layer Breakdown */}
            <div className="space-y-2 mt-3 sm:mt-4">
              {project.caseStudy.architectureDetails.map((layer, idx) => (
                <div key={idx} className="p-3 sm:p-3.5 bg-canvas-card border border-border-subtle rounded-sm">
                  <span className="font-mono text-xs font-semibold text-ink block mb-1">
                    {layer.layer}
                  </span>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-normal font-sans">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. MY ROLE */}
          <section className="space-y-2.5 sm:space-y-3 border-t border-border-subtle pt-6 sm:pt-8">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
              <span className="w-2 h-2 bg-ink shrink-0"></span>
              MY ROLE
            </div>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
              {project.caseStudy.myRole}
            </p>
          </section>

          {/* 5. TECHNOLOGY */}
          <section className="space-y-2.5 sm:space-y-3 border-t border-border-subtle pt-6 sm:pt-8">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
              <span className="w-2 h-2 bg-ink shrink-0"></span>
              TECHNOLOGY
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 bg-canvas-card border border-border-subtle text-ink rounded-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Categorized Tech Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-canvas-card border border-border-subtle rounded-sm font-mono text-xs">
              {Object.entries(project.caseStudy.techStackDetails).map(([key, val]) => (
                <div key={key}>
                  <span className="text-ink-muted uppercase text-[10px] block mb-0.5">{key}</span>
                  <span className="text-ink font-medium">{val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. OUTCOME */}
          <section className="space-y-2.5 sm:space-y-3 border-t border-border-subtle pt-6 sm:pt-8 pb-2 sm:pb-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase tracking-wider">
              <span className="w-2 h-2 bg-emerald-600 shrink-0"></span>
              OUTCOME
            </div>
            <p className="text-sm sm:text-base text-ink font-medium leading-relaxed font-sans bg-canvas-card p-3.5 sm:p-4 border border-border-subtle rounded-sm">
              {project.caseStudy.outcome}
            </p>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-canvas-card border-t border-border-subtle flex items-center justify-between shrink-0 font-mono text-xs">
          <span className="text-ink-secondary text-[11px] truncate mr-2">FACTUAL CASE STUDY</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 sm:py-2 bg-ink text-canvas hover:bg-accent rounded-sm cursor-pointer transition-colors shrink-0"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
}
