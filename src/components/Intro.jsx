import React from 'react';

export default function Intro() {
  return (
    <section className="py-16 sm:py-24 md:py-28 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          
          {/* Label Column */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block">
              00 / PERSPECTIVE
            </span>
          </div>

          {/* Statement Column */}
          <div className="lg:col-span-9">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-heading font-semibold text-ink leading-[1.2] tracking-tight mb-4 sm:mb-6 break-words">
              I work at the intersection of AI, software engineering and business automation.
            </h2>
            <p className="text-sm sm:text-lg text-ink-secondary font-normal leading-relaxed max-w-3xl font-sans">
              My work focuses on turning ambiguous problems into practical systems — combining LLMs, automation, data, APIs and backend engineering into software that can actually be deployed and used.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
