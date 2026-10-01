import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, MapPin, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "rdht.work@gmail.com";
  const linkedin = "https://linkedin.com/in/rdh-tripathi-325752307";
  const github = "https://github.com/rishabhprojects-stack";

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 pb-6 border-b border-border-subtle">
          <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary uppercase block mb-3">
            09 / DIRECT CONTACT
          </span>
          <h2 className="text-section-title font-heading font-bold text-ink tracking-tight mb-3 sm:mb-4 break-words">
            Let's build something useful.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ink-secondary font-normal leading-relaxed max-w-2xl font-sans">
            I'm interested in AI engineering opportunities where I can work on real products, intelligent systems and production infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Main Direct Action Card */}
          <div className="lg:col-span-7 bg-canvas-card border border-ink p-5 sm:p-8 md:p-10 rounded-sm shadow-xs flex flex-col justify-between space-y-6 sm:space-y-8">
            <div>
              <div className="flex items-center justify-between pb-3.5 sm:pb-4 mb-4 sm:mb-6 border-b border-border-subtle">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  DIRECT INBOX
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-ink-secondary">RESPONSE &lt; 24H</span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <span className="font-mono text-[11px] sm:text-xs text-ink-muted uppercase">EMAIL ADDRESS</span>
                <div className="text-base sm:text-2xl lg:text-3xl font-heading font-bold text-ink tracking-tight break-all">
                  {email}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-border-subtle">
              <a
                href={`mailto:${email}?subject=AI%20Engineering%20Opportunity%20/%20Inquiry`}
                className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-accent text-canvas px-5 sm:px-6 py-3 rounded-sm font-mono text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Email Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 bg-canvas hover:bg-canvas-subtle text-ink border border-border-subtle px-4 sm:px-5 py-3 rounded-sm font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Channels & Location Metadata */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Online Profiles */}
            <div className="bg-canvas-card border border-border-subtle p-5 sm:p-6 rounded-sm space-y-3.5 sm:space-y-4">
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block pb-3 border-b border-border-subtle">
                PROFILES & CHANNELS
              </span>

              <div className="space-y-2.5 font-mono text-xs">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 sm:p-3 bg-canvas border border-border-subtle hover:border-ink rounded-xs group transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <LinkedinIcon className="w-4 h-4 text-ink shrink-0" />
                    <span className="font-semibold text-ink">LinkedIn</span>
                  </div>
                  <span className="text-ink-secondary group-hover:text-accent flex items-center gap-1 text-[11px] truncate">
                    rdh-tripathi <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </span>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 sm:p-3 bg-canvas border border-border-subtle hover:border-ink rounded-xs group transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <GithubIcon className="w-4 h-4 text-ink shrink-0" />
                    <span className="font-semibold text-ink">GitHub</span>
                  </div>
                  <span className="text-ink-secondary group-hover:text-accent flex items-center gap-1 text-[11px] truncate">
                    rishabhprojects <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Location & Availability Specs */}
            <div className="bg-canvas-card border border-border-subtle p-5 sm:p-6 rounded-sm space-y-3.5 sm:space-y-4">
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block pb-3 border-b border-border-subtle">
                LOCATION & AVAILABILITY
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs">
                <div>
                  <div className="flex items-center gap-1.5 text-ink-muted uppercase text-[10px] mb-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    LOCATION
                  </div>
                  <span className="font-semibold text-ink block">Paris, France</span>
                  <span className="text-[11px] text-ink-secondary font-sans">Open to remote & onsite</span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-ink-muted uppercase text-[10px] mb-1">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    AVAILABILITY
                  </div>
                  <span className="font-semibold text-accent block">October 2026</span>
                  <span className="text-[11px] text-ink-secondary font-sans">AI Engineering roles</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
