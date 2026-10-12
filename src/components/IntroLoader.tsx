import React, { useEffect, useState } from 'react';
import { SITE } from '../config';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setFade(true), 150);
          setTimeout(onComplete, 650);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06080d] transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-500/20 blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-md">
        {/* Futuristic Hexagon/Emblem */}
        <div className="relative mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/30 border border-cyan-500/30 shadow-neon-cyan">
          <span className="font-display font-black text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            YJ
          </span>
          <div className="absolute inset-0 rounded-2xl border border-white/10 animate-ping opacity-25" />
        </div>

        {/* Name with glow */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-2">
          {SITE.name}
        </h1>

        {/* University & Degree pill */}
        <p className="text-xs uppercase tracking-widest text-cyan-400/90 font-mono mb-8">
          BTech CSE • JECRC University
        </p>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-64 h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-white/10 mb-3 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(168,85,247,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <div className="flex items-center justify-between w-56 sm:w-64 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            Initializing Portfolio
          </span>
          <span className="text-cyan-300 font-semibold">{progress}%</span>
        </div>

        {/* Skip button */}
        <button
          onClick={() => {
            setFade(true);
            setTimeout(onComplete, 300);
          }}
          className="mt-8 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest cursor-pointer underline decoration-dotted"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
};

export default IntroLoader;
