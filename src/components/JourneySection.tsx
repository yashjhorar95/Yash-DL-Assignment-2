import React from 'react';
import { PORTFOLIO_DATA } from '../config';
import { Route, GraduationCap, Heart, Cpu, Terminal, Rocket, Globe, Target } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-pink-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-300" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      default:
        return <Route className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-wider mb-3">
          <Route className="w-3.5 h-3.5" />
          <span>06 // PROGRESSION & EVOLUTION</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Journey</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl font-light">
          From my first day as a total beginner at JECRC to falling in love with code, mastering procedural C, and shipping real-world platforms.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative mb-20">
        {/* Central Connecting Neon Spine */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-30" />

        <div className="space-y-8 md:space-y-12">
          {PORTFOLIO_DATA.journeyMilestones.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Milestone Content Box */}
                <div className="w-full md:w-[46%]">
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group shadow-glass">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${item.accent}20`,
                          color: item.accent,
                          border: `1px solid ${item.accent}40`,
                        }}
                      >
                        Step {item.step} • {item.subtitle}
                      </span>
                      <span className="font-mono text-xs text-slate-500">Milestone</span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Central Node Circle */}
                <div className="hidden md:flex items-center justify-center w-[8%] my-4 md:my-0">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-slate-950 border-2 z-10 shadow-lg group-hover:scale-110 transition-transform"
                    style={{
                      borderColor: item.accent,
                      boxShadow: `0 0 15px ${item.accent}50`,
                    }}
                  >
                    {getTimelineIcon(item.icon)}
                  </div>
                </div>

                {/* Counterpart Spacer */}
                <div className="hidden md:block w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Goals Strip */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900/90 to-cyan-950/60 border border-purple-500/30 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-glass">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-2xl text-white">
                Next Goals & Future Roadmap
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                What lies ahead on the horizon
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/30">
            5 Priority Objectives
          </span>
        </div>

        {/* 5 Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.nextGoals.map((goal, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-500/40 font-mono text-xs text-cyan-300 font-bold flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-white">
                  {goal.title}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light pl-8">
                {goal.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
