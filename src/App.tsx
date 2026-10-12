import React, { useState } from 'react';
import IntroLoader from './components/IntroLoader';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import SitesSection from './components/SitesSection';
import JourneySection from './components/JourneySection';
import ContactSection from './components/ContactSection';
import Toast from './components/Toast';

export const App: React.FC = () => {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [glowMode, setGlowMode] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light-mode');
        showToast('Switched to Dark Cyber Mode');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light-mode');
        showToast('Switched to Frost Light Mode');
      }
      return next;
    });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4500);
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'bg-[#06080d] text-[#e2e8f0]' : 'bg-[#f1f5f9] text-[#0f172a]'} font-sans relative selection:bg-[#a855f7]/30 selection:text-white transition-colors duration-300 ${
        glowMode ? 'ambient-glow-active' : ''
      }`}
    >
      {/* 0. INTRO LOADER ANIMATION */}
      {!loaderComplete && (
        <IntroLoader onComplete={() => setLoaderComplete(true)} />
      )}

      {/* 1. CUSTOM GLOWING CURSOR WITH TRAIL */}
      <CustomCursor />

      {/* 2. DYNAMIC BACKGROUND PARTICLES & NEON MESH */}
      <BackgroundEffects />

      {/* 3. STICKY NAVBAR WITH SCROLL PROGRESS BAR */}
      <Navbar
        glowMode={glowMode}
        onToggleGlow={() => setGlowMode(!glowMode)}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* MAIN SINGLE-PAGE SCROLLING SECTIONS */}
      <main className="relative z-10 flex flex-col">
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. ABOUT ME SECTION */}
        <AboutSection />

        {/* 3. EDUCATION SECTION */}
        <EducationSection />

        {/* 4. WHAT I DO / SKILLS SECTION */}
        <SkillsSection />

        {/* 5. PROJECTS SECTION (3 DETAILED SHOWCASE CARDS + MODAL) */}
        <ProjectsSection onShowToast={showToast} />

        {/* 6. ALL MY SITES IN ONE PLACE (LIVE-SITE GRID + DEFINITIONS) */}
        <SitesSection onShowToast={showToast} />

        {/* 7. MY JOURNEY (TIMELINE + NEXT GOALS STRIP) */}
        <JourneySection />

        {/* 8. CONTACT & PERSONAL DETAILS (COORDINATES + FORM + 2026 FOOTER) */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* NOTIFICATION TOAST */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export default App;
