import React from 'react';
import { PORTFOLIO_DATA } from '../config';
import { Globe, Palette, Bot, Cpu, Terminal, Sparkles, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-pink-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-300 font-mono text-xs uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>03 // EXPERTISE & CRAFT</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          What I Do & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">Skills</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl font-light">
          A balanced fusion of visual craftsmanship, web development, intelligent assistants, and low-level computer science foundations.
        </p>
      </div>

      {/* Animated Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {PORTFOLIO_DATA.skills.map((skill, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 sm:p-7 bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-glass"
          >
            <div>
              {/* Top Row: Icon & Progress Ring/Pill */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-inner transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${skill.accent}15`,
                    borderColor: `${skill.accent}30`,
                  }}
                >
                  {getSkillIcon(skill.icon)}
                </div>

                {/* Progress Pill / Level Indicator */}
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/40 border border-white/10">
                  <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.accent,
                        boxShadow: `0 0 8px ${skill.accent}`,
                      }}
                    />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-300">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 leading-snug">
                {skill.category}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-5">
                {skill.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
              {skill.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5 group-hover:border-white/15 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* "Currently Learning" Continuous Marquee Ticker */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/90 to-cyan-950/40 border border-purple-500/30 p-4 sm:p-5 backdrop-blur-xl shadow-glass overflow-hidden">
        <div className="flex items-center gap-3 mb-3 px-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Currently Learning & Exploring:
          </div>
          <span className="text-slate-500 text-xs hidden sm:inline">• Live Knowledge Feed</span>
        </div>

        {/* Ticker Stream */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="flex gap-4 w-max animate-marquee">
            {PORTFOLIO_DATA.learningTicker.concat(PORTFOLIO_DATA.learningTicker).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-slate-300 whitespace-nowrap hover:border-cyan-400/50 transition-colors"
              >
                <Sparkles className="w-3 h-3 text-purple-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
