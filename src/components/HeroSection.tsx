import React, { useState, useEffect, useRef } from 'react';
import { SITE, PORTFOLIO_DATA } from '../config';
import { ArrowRight, Terminal, Sparkles, MapPin, Code2, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Typewriter effect cycling through SITE.roles
  useEffect(() => {
    const roles = SITE.roles;
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 45 : 110;

    if (!isDeleting && displayedText === currentRole) {
      typingSpeed = 2200; // Pause when role is completed
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // 3D Tilt calculation on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Typewriter, Tagline, CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
          {/* Floating Badge: BTech CSE @ JECRC University */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.25)] mb-6 animate-float-slow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs sm:text-sm font-mono text-cyan-300 font-medium">
              BTech CSE @ JECRC University
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 ml-1">
              1st Year
            </span>
          </div>

          {/* Name Display */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-4">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              {SITE.name}
            </span>
          </h1>

          {/* Typewriter Subheading cycling through SITE.roles */}
          <div className="h-10 sm:h-12 flex items-center gap-2 mb-6 text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-300">
            <span className="text-slate-400">Crafting as</span>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400">
              {displayedText}
            </span>
            <span className="inline-block w-0.5 h-7 bg-cyan-400 animate-pulse ml-0.5" />
          </div>

          {/* One-Line Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-2xl mb-8 font-light border-l-2 border-purple-500/50 pl-4 bg-purple-950/10 py-1 rounded-r-lg">
            &ldquo;{PORTFOLIO_DATA.tagline}&rdquo;
          </p>

          {/* Location & Quick Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-slate-400 mb-8">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-pink-400" />
              {SITE.location}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-cyan-400" />
              C → C++ Explorer
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Nova • Happy • Offcult
            </span>
          </div>

          {/* Action Buttons: View My Work & Contact Me */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            {/* View My Work Button */}
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              data-cursor-hover
              className="px-7 py-3.5 rounded-xl font-display font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 shadow-neon-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Contact Me Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              data-cursor-hover
              className="px-7 py-3.5 rounded-xl font-display font-semibold text-sm sm:text-base text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-white/15 hover:border-cyan-400/50 backdrop-blur-md shadow-glass transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>

            {/* Quick Sites Hub Link */}
            <a
              href="#sites"
              onClick={(e) => scrollToSection(e, 'sites')}
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors underline decoration-dotted ml-1"
            >
              Explore 4 Live Sites ↓
            </a>
          </div>
        </div>

        {/* Right Column: 3D Tilt Cyber Terminal Card */}
        <div className="lg:col-span-5 flex justify-center perspective-container">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: tilt.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out',
            }}
            className="w-full max-w-md rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#0b0f19]/90 to-[#06080d]/90 border border-purple-500/30 p-6 backdrop-blur-xl shadow-2xl relative group preserve-3d"
          >
            {/* Ambient halo behind card */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-600/30 to-pink-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity -z-10" />

            {/* Card Header: Mac-style traffic lights & title */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_6px_#f43f5e]" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_6px_#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_6px_#10b981]" />
              </div>
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                yash-workspace.sh
              </span>
              <span className="font-mono text-[10px] text-purple-400 font-bold bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                LIVE
              </span>
            </div>

            {/* Code / System Feed */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-cyan-400 select-none">$</span>
                <span>whoami</span>
              </div>
              <div className="pl-4 text-purple-300 bg-purple-950/20 p-2 rounded-lg border border-purple-500/20">
                &quot;{SITE.name}&quot; — {SITE.degree}
              </div>

              <div className="flex items-start gap-2 text-slate-300 pt-1">
                <span className="text-cyan-400 select-none">$</span>
                <span>cat current_focus.c</span>
              </div>
              <div className="pl-4 text-slate-300 bg-black/40 p-2.5 rounded-lg border border-white/5 font-mono text-[11px] leading-relaxed">
                <span className="text-purple-400">#include</span> &lt;stdio.h&gt;<br />
                <span className="text-pink-400">void</span> <span className="text-cyan-300">build_future</span>() &#123;<br />
                &nbsp;&nbsp;learn(<span className="text-emerald-300">&quot;C&quot;</span>);<br />
                &nbsp;&nbsp;master(<span className="text-emerald-300">&quot;C++&quot;</span>);<br />
                &nbsp;&nbsp;ship(<span className="text-emerald-300">&quot;Nova, Happy, Offcult&quot;</span>);<br />
                &#125;
              </div>

              <div className="flex items-start gap-2 text-slate-300 pt-1">
                <span className="text-cyan-400 select-none">$</span>
                <span>sys_status --all</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 flex flex-col">
                  <span className="text-[10px] text-cyan-400 uppercase">Projects</span>
                  <span className="font-bold text-white text-sm">3 Deployed</span>
                </div>
                <div className="p-2.5 rounded-lg bg-pink-950/20 border border-pink-500/20 flex flex-col">
                  <span className="text-[10px] text-pink-400 uppercase">Makerspace</span>
                  <span className="font-bold text-white text-sm">Happy Robot</span>
                </div>
              </div>
            </div>

            {/* Bottom active chip */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Cpu className="w-3.5 h-3.5" />
                Vercel Ready
              </span>
              <span className="text-slate-500">2026 Core Edition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
