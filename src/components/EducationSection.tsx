import React from 'react';
import { PORTFOLIO_DATA } from '../config';
import { GraduationCap, BookOpen, Award, CheckCircle2, Cpu } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>02 // ACADEMIC FOUNDATIONS</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Curriculum</span>
        </h2>
      </div>

      {/* Main Education Card */}
      <div className="rounded-3xl bg-gradient-to-b from-slate-900/80 to-[#0b0f19]/80 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-glass relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
        {/* Glow ambient background */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-600/20 transition-all duration-500" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            {/* University & Degree */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase font-semibold">
                Undergraduate
              </span>
              <span className="text-slate-400 font-mono text-xs">
                {education.currentYear}
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-2">
              {education.degree}
            </h3>

            <div className="text-base sm:text-lg text-purple-300 font-medium flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
              <span>{education.institution}</span>
            </div>
          </div>

          {/* Prompt Required Badge: "Currently Learning: C → C++" */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900/80 to-cyan-950/60 border border-purple-500/40 shadow-neon-purple shrink-0">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                Active Trajectory
              </span>
              <span className="font-mono font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
                {education.statusBadge}
              </span>
            </div>
            <Cpu className="w-5 h-5 text-purple-400 ml-1 hidden sm:block" />
          </div>
        </div>

        {/* Detailed Points */}
        <div className="relative z-10 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 space-y-4">
            <h4 className="font-display font-semibold text-white text-base flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              Program Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {education.overview}
            </p>
          </div>

          <div className="md:col-span-6 space-y-3">
            <h4 className="font-display font-semibold text-white text-base flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              Key Pillars & Initiatives
            </h4>
            <div className="space-y-2.5">
              {education.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
