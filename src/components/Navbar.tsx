import React, { useState, useEffect } from 'react';
import { SITE, PORTFOLIO_DATA } from '../config';
import { Menu, X, Sparkles, Terminal, ChevronRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  glowMode: boolean;
  onToggleGlow: () => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  glowMode,
  onToggleGlow,
  isDarkMode = true,
  onToggleTheme,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / (totalScroll || 1)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'sites', 'journey', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-slate-900/40">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.9)] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#06080d]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Go to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-purple-600/30 to-pink-500/20 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_22px_rgba(168,85,247,0.6)] group-hover:border-purple-400 transition-all duration-300">
              <span className="font-display font-black text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                YJ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors text-base sm:text-lg leading-tight">
                {SITE.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                CSE @ JECRC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 backdrop-blur-md shadow-glass">
            {PORTFOLIO_DATA.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold shadow-inner'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/25 via-purple-500/25 to-pink-500/25 border border-purple-500/40 -z-10 shadow-[0_0_12px_rgba(168,85,247,0.3)]" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Dark/Light Toggle, Glow Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleTheme}
              data-cursor-hover
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono border border-white/10 hover:border-cyan-400 bg-slate-900/70 text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-glass"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-cyan-400" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* Ambient Glow Mode Toggle */}
            <button
              onClick={onToggleGlow}
              data-cursor-hover
              aria-label="Toggle neon ambient glow mode"
              title={glowMode ? 'Switch to Stealth Theme' : 'Switch to Neon Overdrive'}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono border transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                glowMode
                  ? 'bg-purple-950/50 border-purple-400 text-purple-300 shadow-[0_0_16px_rgba(168,85,247,0.5)]'
                  : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${glowMode ? 'text-pink-400 animate-spin-slow' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">
                {glowMode ? 'Neon' : 'Stealth'}
              </span>
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              data-cursor-hover
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.35)] hover:shadow-[0_0_22px_rgba(168,85,247,0.6)] transition-all duration-300"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-white/10 md:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 p-5 rounded-2xl bg-[#0b0f19]/95 border border-purple-500/30 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {PORTFOLIO_DATA.navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-purple-600/20 text-cyan-300 border border-purple-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600"
                >
                  Contact Yash Jhorar
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
