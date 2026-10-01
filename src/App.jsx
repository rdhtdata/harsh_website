import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Process from './components/Process';
import Technology from './components/Technology';
import GithubProof from './components/GithubProof';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('ht_portfolio_theme') || 'obsidian-dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('ht_portfolio_theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'obsidian-dark' ? 'warm-cream' : 'obsidian-dark'));
  };

  return (
    <div
      data-theme={currentTheme}
      className="min-h-screen bg-canvas text-ink selection:bg-accent/15 selection:text-ink transition-colors duration-200"
    >
      {/* Sticky Navigation with Light/Dark Mode Switch */}
      <Navbar
        currentTheme={currentTheme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections in Strategic 2026 AI Engineer Hierarchy */}
      <main id="main-content">
        {/* 01: Hero */}
        <Hero
          onOpenContact={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        
        {/* 02: What I Build (5 Concise Capability Cards) */}
        <Capabilities />
        
        {/* 03: Featured Case Studies (Octagram Flagship + FOREO Systems) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />
        
        {/* 04: Experience & Education Timeline */}
        <Experience onOpenResume={() => setIsResumeOpen(true)} />
        
        {/* 05: Engineering Process (01-05 Lifecycle) */}
        <Process />
        
        {/* 06: Technology Stack (Structured Disciplines) */}
        <Technology />

        {/* 07: Selected Repositories & Code Proof */}
        <GithubProof />
        
        {/* 08: Context, Career Story & Active Focus */}
        <About />
        
        {/* 09: Engineering Perspectives & Principles */}
        <Philosophy />
        
        {/* 10: Final CTA & Direct Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Deep-Dive Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Full Printable / Viewable Résumé Modal */}
      {isResumeOpen && (
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      )}
    </div>
  );
}
