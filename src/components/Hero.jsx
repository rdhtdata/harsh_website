import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Terminal, FileText, Mail } from 'lucide-react';

const systemNodes = [
  {
    id: 'user',
    step: '01',
    label: 'INPUT & INGESTION',
    tag: 'INPUT STREAM',
    desc: 'Multi-channel query, business brief, API webhook, or scheduled data pipeline trigger',
    spec: 'HTTP POST / REST / Webhooks'
  },
  {
    id: 'app',
    step: '02',
    label: 'FASTAPI GATEWAY',
    tag: 'ORCHESTRATION',
    desc: 'Asynchronous service handling schema validation, authentication, rate-limiting & session state',
    spec: 'Python 3.12 · FastAPI · Pydantic v2'
  },
  {
    id: 'agent',
    step: '03',
    label: 'REASONING & RAG',
    tag: 'INTELLIGENCE LAYER',
    desc: 'Task decomposition, dense vector retrieval (FAISS), tool invocation & structured JSON output',
    spec: 'FAISS / Vector Search · LLMs · Tool Calling'
  },
  {
    id: 'infra',
    step: '04',
    label: 'DATA & SERVICES',
    tag: 'EXECUTION LAYER',
    desc: 'PostgreSQL storage, Redis caching, Playwright browser automation & external API integrations',
    spec: 'PostgreSQL · Redis · Docker · External APIs'
  },
  {
    id: 'workflow',
    step: '05',
    label: 'BUSINESS OUTCOME',
    tag: 'PRODUCTION DELIVERY',
    desc: 'Executed business operation, published campaign, synchronized CRM record, or client platform delivery',
    spec: 'Automated Delivery · Telemetry · Monitored Logs'
  }
];

export default function Hero({ onOpenContact, onOpenResume }) {
  const [activeNodeIndex, setActiveNodeIndex] = useState(1);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-24 border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Core Positioning & Value */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Eyebrow / Production Status */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-canvas-card border border-border-subtle rounded-sm text-xs font-mono font-semibold tracking-wider text-ink uppercase mb-5 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                HARSH TRIPATHI · AI ENGINEER & FOUNDER
              </div>

              {/* Primary Headline */}
              <h1 className="text-hero font-heading font-bold text-ink leading-[1.06] tracking-tight mb-5 sm:mb-6 break-words">
                I build and ship AI systems that automate real-world workflows.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg lg:text-xl text-ink-secondary font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8 font-sans">
                AI engineer working across LLM applications, agentic workflows, RAG, backend systems and machine learning — from architecture to production deployment.
              </p>

              {/* Concise Capability Line */}
              <div className="font-mono text-xs sm:text-sm font-semibold text-accent mb-6 sm:mb-8 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>AI Engineering</span>
                <span className="text-ink-muted">·</span>
                <span>Agentic Systems</span>
                <span className="text-ink-muted">·</span>
                <span>LLM Applications</span>
                <span className="text-ink-muted">·</span>
                <span>Backend</span>
                <span className="text-ink-muted">·</span>
                <span>ML</span>
              </div>

              {/* Clear Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('work')}
                  className="group inline-flex items-center justify-center gap-2 bg-ink text-canvas hover:bg-accent px-5 sm:px-6 py-3.5 rounded-sm font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>View My Work</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center gap-2 bg-canvas-card text-ink hover:text-accent border border-border-subtle hover:border-accent px-5 sm:px-6 py-3.5 rounded-sm font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-1.5 bg-canvas-subtle text-ink-secondary hover:text-ink border border-border-subtle px-4 py-3.5 rounded-sm font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Résumé</span>
                </button>
              </div>

              {/* Direct Outbound Links */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-border-subtle text-xs font-mono">
                <a
                  href="https://github.com/rishabhprojects-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink hover:underline"
                >
                  GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com/in/rdh-tripathi-325752307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink hover:underline"
                >
                  LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://octagramai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink hover:underline"
                >
                  Octagram <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Availability Line */}
            <div className="mt-6 sm:mt-8 pt-4 flex items-center gap-2 text-xs font-mono text-ink-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
              <span className="leading-snug">Paris / Remote · Available for AI Engineering opportunities</span>
            </div>
          </div>

          {/* Right Column: Architectural Schematic Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-canvas-card border border-border-subtle rounded-sm p-4 sm:p-6 shadow-xs">
              
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-ink">
                  <Terminal className="w-4 h-4 text-accent shrink-0" />
                  <span className="truncate">SYSTEM_ARCHITECTURE.flow</span>
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] text-ink-secondary flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  PRODUCTION_PIPELINE
                </div>
              </div>

              {/* Node Sequence */}
              <div className="space-y-1.5 sm:space-y-2">
                {systemNodes.map((node, index) => {
                  const isActive = activeNodeIndex === index;
                  return (
                    <div key={node.id} className="relative">
                      {/* Connector between nodes */}
                      {index > 0 && (
                        <div className="flex justify-center -my-1 py-1">
                          <div className="w-px h-2.5 bg-border-subtle flex items-center justify-center">
                            <span className="w-1 h-1 bg-ink-muted rounded-full"></span>
                          </div>
                        </div>
                      )}

                      {/* Node Button */}
                      <button
                        type="button"
                        onClick={() => setActiveNodeIndex(index)}
                        className={`w-full text-left p-3 sm:p-3.5 rounded-sm border transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                          isActive
                            ? 'bg-canvas-subtle border-ink shadow-xs'
                            : 'bg-canvas-card border-border-subtle hover:border-ink-muted'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="font-mono text-[10px] font-bold text-ink-secondary bg-canvas-subtle px-1.5 py-0.5 rounded-xs shrink-0">
                              {node.step}
                            </span>
                            <span className="font-heading font-bold text-xs sm:text-sm text-ink tracking-tight truncate">
                              {node.label}
                            </span>
                          </div>
                          <span className={`font-mono text-[9px] sm:text-[10px] uppercase ${isActive ? 'text-accent font-semibold' : 'text-ink-muted'}`}>
                            {node.tag}
                          </span>
                        </div>

                        {isActive && (
                          <div className="mt-2 pt-2 border-t border-border-subtle animate-in fade-in duration-150">
                            <p className="text-xs text-ink-secondary leading-relaxed mb-1.5 font-sans">
                              {node.desc}
                            </p>
                            <div className="font-mono text-[10px] sm:text-[11px] text-ink bg-canvas px-2 py-1 border border-border-subtle rounded-xs inline-block break-all max-w-full">
                              <span className="text-accent font-semibold">$</span> {node.spec}
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Footnote */}
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-ink-secondary">
                <span>PRODUCTION ARCHITECTURE</span>
                <span className="text-ink font-semibold">FASTAPI · AGENTS · DOCKER</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
