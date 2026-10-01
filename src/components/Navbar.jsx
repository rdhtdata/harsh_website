import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';

export default function Navbar({ currentTheme, onToggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = currentTheme === 'obsidian-dark';

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'CAPABILITIES', href: '#capabilities' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROCESS', href: '#process' },
    { name: 'TECH', href: '#technology' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-border-subtle py-3.5 shadow-xs'
          : 'bg-canvas border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-3 text-ink no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <span className="font-mono text-xs font-semibold tracking-wider bg-ink text-canvas px-1.5 py-0.5 rounded-sm">
            HT
          </span>
          <span className="font-heading font-bold text-sm sm:text-base tracking-tight uppercase group-hover:text-accent transition-colors">
            Harsh Tripathi
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-xs font-medium tracking-wider text-ink-secondary hover:text-ink transition-colors uppercase relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="h-4 w-px bg-border-subtle" aria-hidden="true" />

          {/* Availability Pill */}
          <div className="flex items-center gap-2 px-2.5 py-1 bg-canvas-card border border-border-subtle rounded-full shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="font-mono text-[11px] font-medium tracking-wide text-ink uppercase">
              AVAILABLE · OCT 2026
            </span>
          </div>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 font-mono text-xs font-medium text-ink hover:text-accent px-2.5 py-1 bg-canvas-card border border-border-subtle hover:border-accent rounded transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            title={isDark ? 'Switch to Editorial Cream (Light Mode)' : 'Switch to Obsidian Studio (Dark Mode)'}
            aria-label="Toggle light / dark viewing mode"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px]">LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-[11px]">DARK</span>
              </>
            )}
          </button>

          {/* Résumé Quick Action */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 font-mono text-xs font-medium text-ink hover:text-accent px-3 py-1 border border-ink hover:border-accent rounded transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
        </div>

        {/* Medium and Mobile Navigation */}
        <div className="flex items-center gap-2.5 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 text-ink hover:text-accent border border-border-subtle rounded bg-canvas-card cursor-pointer"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-canvas-card border border-border-subtle rounded-full text-[10px] font-mono font-medium text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
            OCT '26
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink hover:text-accent border border-border-subtle rounded bg-canvas-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-canvas border-b border-border-subtle px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-sm font-semibold tracking-wider text-ink hover:text-accent py-2 border-b border-border-subtle/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex items-center justify-between">
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 font-mono text-xs font-medium text-ink bg-canvas-card border border-border-subtle px-3 py-1.5 rounded"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
                <span>{isDark ? 'LIGHT MODE' : 'DARK MODE'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-1.5 font-mono text-xs font-semibold text-accent bg-canvas-card border border-accent/30 px-3 py-1.5 rounded"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW RÉSUMÉ</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
