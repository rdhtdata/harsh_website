import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import SelectedWork from './components/SelectedWork';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import Experience from './components/Experience';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Now from './components/Now';
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
      {/* Navigation with Light/Dark Mode Switch */}
      <Navbar
        currentTheme={currentTheme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenContact={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
        
        <Intro />
        
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />
        
        <Capabilities />
        
        <Process />
        
        <Experience onOpenResume={() => setIsResumeOpen(true)} />
        
        <About />
        
        <Philosophy />
        
        <Now />
        
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {isResumeOpen && (
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      )}
    </div>
  );
}
