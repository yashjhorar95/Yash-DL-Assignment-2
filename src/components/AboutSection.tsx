import React from 'react';
import { PORTFOLIO_DATA } from '../config';
import { Code2, Rocket, Sparkles, Zap, Brain, Compass, Terminal, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-pink-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-wider mb-3">
          <Brain className="w-3.5 h-3.5" />
          <span>01 // WHO I AM</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
        </h2>
      </div>

      {/* Main Bio Card */}
      <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-glass mb-14 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/20 transition-all duration-500" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            <p className="text-xl sm:text-2xl font-display font-medium text-white leading-snug">
              I&apos;m <span className="text-cyan-400 font-semibold">Yash Jhorar</span>, a first-year BTech CSE (Core) student at <span className="text-purple-300 font-semibold">JECRC University, Jaipur</span>.
            </p>
            <p>
              I&apos;m a web developer and design creator. I fell in love with coding the moment I started, and my mind just <span className="text-white font-medium italic">&quot;works&quot;</span> with it. I started as a total beginner, I&apos;m learning <strong className="text-cyan-300 font-mono">C</strong> right now, and my goal is to master <strong className="text-purple-300 font-mono">C++</strong> and then go deep into web development and AI.
            </p>
            <p>
              I like turning ideas into real products: websites, brands, and my own AI assistant. Rather than lingering in passive tutorials, I believe in shipping tangible creations that people can use and interact with.
            </p>
          </div>

          {/* Quick Pillars Pill Box */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center gap-3">
              <Compass className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold">Philosophy</h4>
                <p className="text-xs text-slate-300">Turn raw ideas into functional products</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex items-center gap-3">
              <Terminal className="w-5 h-5 text-purple-400 shrink-0" />
              <div>
                <h4 className="text-xs font-mono uppercase text-purple-400 font-bold">Core Focus</h4>
                <p className="text-xs text-slate-300">C Low-Level → C++ Systems → Web AI</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-pink-950/20 border border-pink-500/20 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-pink-400 shrink-0" />
              <div>
                <h4 className="text-xs font-mono uppercase text-pink-400 font-bold">Vision</h4>
                <p className="text-xs text-slate-300">From software code to Arduino hardware</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {PORTFOLIO_DATA.stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-slate-900/80 to-[#0b0f19]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group shadow-glass"
          >
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-1 group-hover:scale-105 transition-transform origin-left">
              {stat.value}
              <span className="text-xl sm:text-2xl text-purple-400 font-normal">{stat.suffix}</span>
            </div>
            <div className="text-sm font-semibold text-white tracking-tight">{stat.label}</div>
            <div className="text-xs font-mono text-slate-400 mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* 4 Quick-Fact Cards */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Quick Facts About My Builder Mindset
          </h3>
          <span className="text-xs font-mono text-slate-400">4 Insights</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.quickFacts.map((fact) => (
            <div
              key={fact.id}
              className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-glass"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${fact.accent}15`,
                    borderColor: `${fact.accent}30`,
                    borderWidth: '1px',
                  }}
                >
                  {getIcon(fact.icon)}
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                  {fact.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {fact.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                <span>Verified Metric</span>
                <span>Active ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
