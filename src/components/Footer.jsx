import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-border-subtle">
          
          {/* Identity & Status */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-heading font-bold text-base uppercase tracking-tight">
                Harsh Tripathi
              </span>
              <span className="font-mono text-xs text-ink-secondary">·</span>
              <span className="font-mono text-xs font-semibold text-accent">
                AI SOLUTIONS ENGINEER
              </span>
            </div>
            <p className="font-mono text-xs text-ink-secondary">
              Paris · India · Global Remote
            </p>
          </div>

          {/* Direct Outbound Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs">
            <a
              href="https://github.com/rishabhprojects-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink transition-colors"
            >
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/rdh-tripathi-325752307"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink transition-colors"
            >
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:rdht.work@gmail.com"
              className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink transition-colors"
            >
              Email <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="text-ink-secondary hover:text-ink transition-colors cursor-pointer"
            >
              [↑ Top]
            </button>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] sm:text-[11px] text-ink-muted">
          <span>© 2026 Harsh Tripathi. All rights reserved.</span>
          <span>BUILT FOR PRODUCTION & CLARITY</span>
        </div>
      </div>
    </footer>
  );
}
