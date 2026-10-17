import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TechIntro } from './components/TechIntro';
import { CommandPalette } from './components/CommandPalette';
import { HeroSection } from './components/HeroSection';
import { EducationStrip } from './components/EducationStrip';
import { AboutSection } from './components/AboutSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { WorkExperienceSection } from './components/WorkExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { StickyHireBar } from './components/StickyHireBar';
import { FloatingActionBar } from './components/FloatingActionbar';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';

// Lazy-loaded for zero wasted bytes (PRD Section 7.2 JavaScript Budget)
const CVModal = React.lazy(() => import('./components/CVModal').then((m) => ({ default: m.CVModal })));
const PRDViewer = React.lazy(() => import('./components/PRDViewer').then((m) => ({ default: m.PRDViewer })));

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Only show intro once per session unless requested
    if (typeof window !== 'undefined') {
      const seen = sessionStorage.getItem('raffa_intro_seen_v24');
      return !seen;
    }
    return false;
  });

  const [activeView, setActiveView] = useState<'portfolio' | 'prd'>('portfolio');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const addToast = (text: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const newToast: ToastMessage = { id, text, type };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToSection = (id: string) => {
    if (activeView !== 'portfolio') {
      setActiveView('portfolio');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('raffa_intro_seen_v24', 'true');
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F4F4F5] selection:bg-[#D9FF3D] selection:text-[#0A0A0B]">
      
      {/* Cinematic Terminal Boot Intro */}
      {showIntro && (
        <TechIntro
          onComplete={handleIntroComplete}
          forceShow={true}
        />
      )}

      {/* Global Navigation Bar */}
      <Navbar
        onOpenCommand={() => setCommandPaletteOpen(true)}
        onOpenCV={() => setCvModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      {activeView === 'portfolio' ? (
        <main>
          {/* Hero Section */}
          <HeroSection
            onNavigate={scrollToSection}
            onOpenCV={() => setCvModalOpen(true)}
            onShowToast={addToast}
          />

          {/* Institutional Reputation Strip */}
          <EducationStrip />

          {/* About Me Section with Photo & Narrative */}
          <AboutSection
            onOpenCV={() => setCvModalOpen(true)}
            onShowToast={addToast}
          />

          {/* Work Experience Timeline */}
          <WorkExperienceSection />

          {/* Education Timeline */}
          <EducationSection />

          {/* Featured Projects with Live Sandbox */}
          <ProjectsSection />

          {/* 5 Core Engineering Principles */}
          <PrinciplesSection />

          {/* Skills Matrix with Proof */}
          <SkillsSection />

          {/* Testimonials & Recommendations */}
          <TestimonialsSection />

          {/* How I Work 01-04 Process */}
          <ProcessSection />

          {/* Zero Friction Contact & Hire Form */}
          <ContactSection
            onShowToast={addToast}
            onOpenCV={() => setCvModalOpen(true)}
          />

          {/* Sticky Bottom Bar (appears after 30% scroll) */}
          <StickyHireBar
            onOpenCV={() => setCvModalOpen(true)}
            onOpenCommand={() => setCommandPaletteOpen(true)}
            onShowToast={addToast}
          />

          {/* Floating Action Bar with Close Button */}
          <FloatingActionBar
            onOpenCommand={() => setCommandPaletteOpen(true)}
            onOpenCV={() => setCvModalOpen(true)}
            onOpenEmail={() => {
              window.location.href = `mailto:raffa.dian0869@gmail.com?subject=${encodeURIComponent('Inquiry Proyek')}`;
              addToast('Membuka aplikasi email...', 'info');
            }}
          />
        </main>
      ) : (
        /* PRD-PORTO-MASTER-V24-FINAL Document & PDF Studio View */
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-xs text-[#D9FF3D]">Memuat PRD V24 Studio...</div>}>
          <PRDViewer
            onBackToPortfolio={() => setActiveView('portfolio')}
            onShowToast={addToast}
          />
        </React.Suspense>
      )}

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPRD={() => {
          setActiveView('prd');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCV={() => setCvModalOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={scrollToSection}
        onOpenPRD={() => {
          setActiveView('prd');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCV={() => setCvModalOpen(true)}
        onReplayIntro={handleReplayIntro}
        onShowToast={addToast}
      />

      {/* Curriculum Vitae Modal & Print Engine */}
      <React.Suspense fallback={null}>
        {cvModalOpen && (
          <CVModal
            isOpen={cvModalOpen}
            onClose={() => setCvModalOpen(false)}
          />
        )}
      </React.Suspense>

      {/* Toast Notifications */}
      <ToastContainer
        toasts={toasts}
        onDismiss={removeToast}
      />
    </div>
  );
}
