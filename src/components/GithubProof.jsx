import React from 'react';
import { ArrowUpRight, GitFork, Star, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { selectedRepositories } from '../data/projects';

export default function GithubProof() {
  const githubUrl = "https://github.com/rishabhprojects-stack";

  return (
    <section id="github" className="py-20 sm:py-28 md:py-32 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border-subtle gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
              07 / CODE & REPOSITORIES
            </span>
            <h2 className="text-section-title font-heading font-bold text-ink tracking-tight">
              Selected Repositories
            </h2>
          </div>
          
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold text-ink hover:text-accent border border-ink hover:border-accent px-4 py-2.5 sm:py-2 rounded-sm transition-colors cursor-pointer bg-canvas-card"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {selectedRepositories.map((repo) => (
            <div
              key={repo.name}
              className="bg-canvas-card border border-border-subtle hover:border-ink p-5 sm:p-7 rounded-sm flex flex-col justify-between transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm font-bold text-ink group-hover:text-accent transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-ink-secondary uppercase bg-canvas-subtle px-2 py-0.5 rounded-xs border border-border-subtle">
                    OPEN SOURCE / CODE
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-ink-secondary font-sans leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="p-3 bg-canvas-subtle border border-border-subtle rounded-xs mb-4">
                  <span className="font-mono text-[10px] text-ink-muted uppercase block mb-1">
                    WHAT IT DEMONSTRATES:
                  </span>
                  <span className="font-mono text-xs text-ink leading-snug block">
                    {repo.demonstrates}
                  </span>
                </div>
              </div>

              <div className="pt-3.5 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {repo.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 bg-canvas border border-border-subtle text-ink rounded-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
