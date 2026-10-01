import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react';

const systemNodes = [
  {
    id: 'user',
    step: '01',
    label: 'USER / CLIENT',
    tag: 'INPUT STREAM',
    desc: 'Multi-channel query, business brief, or triggered webhook payload',
    spec: 'HTTP POST / REST / Webhook payload'
  },
  {
    id: 'app',
    step: '02',
    label: 'AI APPLICATION',
    tag: 'GATEWAY & ORCHESTRATION',
    desc: 'FastAPI service validating schemas, auth, rate-limits & session state',
    spec: 'Python 3.12 · FastAPI · Pydantic v2'
  },
  {
    id: 'agent',
    step: '03',
    label: 'AGENTS / RAG / TOOLS',
    tag: 'REASONING LAYER',
    desc: 'Task decomposition, dense vector retrieval & deterministic tool execution',
    spec: 'FAISS / Vector Search · LLM APIs · Tool Calling'
  },
  {
    id: 'infra',
    step: '04',
    label: 'APIs / DATABASE / SERVICES',
    tag: 'DATA & EXECUTION',
    desc: 'Relational storage, third-party platform APIs, Dockerized workers & caching',
    spec: 'PostgreSQL · Redis · Docker · External REST APIs'
  },
  {
    id: 'workflow',
    step: '05',
    label: 'BUSINESS WORKFLOW',
    tag: 'DEPLOYED OUTCOME',
    desc: 'Executed business operation, verified ad campaign, or automated CRM update',
    spec: 'Automated Delivery · Telemetry · Continuous Feedback'
  }
];

export default function Hero({ onOpenContact }) {
  const [activeNodeIndex, setActiveNodeIndex] = useState(1);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-24 border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Core Positioning & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-canvas-card border border-border-subtle rounded-sm text-xs font-mono font-semibold tracking-wider text-ink uppercase mb-5 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                AI SOLUTIONS ENGINEER
              </div>

              {/* Headline */}
              <h1 className="text-hero font-heading font-bold text-ink leading-[1.05] tracking-tight mb-5 sm:mb-6 break-words">
                I build AI systems that solve real business problems.
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-xl text-ink-secondary font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8">
                I design and ship production-oriented LLM applications, AI automation systems, and backend services — taking ideas from ambiguous requirements to deployed software.
              </p>

              {/* Core Pillars */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-10">
                {[
                  'AI APPLICATIONS',
                  'AI AUTOMATION',
                  'BACKEND SYSTEMS'
                ].map((pillar) => (
                  <span
                    key={pillar}
                    className="font-mono text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 bg-canvas-card border border-border-subtle text-ink rounded-sm"
                  >
                    {pillar}
                  </span>
                ))}
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('work')}
                  className="group inline-flex items-center justify-center gap-2 bg-ink text-canvas hover:bg-accent px-5 sm:px-6 py-3.5 rounded-sm font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>View Selected Work</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center gap-2 bg-canvas-card text-ink hover:text-accent border border-border-subtle hover:border-accent px-5 sm:px-6 py-3.5 rounded-sm font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Get In Touch</span>
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
                  href="mailto:rdht.work@gmail.com"
                  className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink hover:underline"
                >
                  Email <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="mt-6 sm:mt-8 pt-4 flex items-center gap-2 text-xs font-mono text-ink-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
              <span className="leading-snug">Available from October 2026 · Open to remote & onsite roles</span>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-canvas-card border border-border-subtle rounded-sm p-4 sm:p-6 shadow-xs">
              
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-ink">
                  <Terminal className="w-4 h-4 text-accent shrink-0" />
                  <span className="truncate">SYSTEM_ARCHITECTURE.flow</span>
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] text-ink-secondary flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
                  LIVE_PIPELINE
                </div>
              </div>

              {/* Node Sequence */}
              <div className="space-y-1.5 sm:space-y-2">
                {systemNodes.map((node, index) => {
                  const isActive = activeNodeIndex === index;
                  return (
                    <div key={node.id} className="relative">
                      {/* Connector Line between nodes */}
                      {index > 0 && (
                        <div className="flex justify-center -my-1 py-1">
                          <div className="w-px h-2.5 bg-border-subtle flex items-center justify-center">
                            <span className="w-1 h-1 bg-ink-muted rounded-full"></span>
                          </div>
                        </div>
                      )}

                      {/* Node Box */}
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

              {/* Footnote about system design */}
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-ink-secondary">
                <span>SYSTEM · DEPLOYMENT</span>
                <span className="text-ink font-medium">FASTAPI / DOCKER</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
