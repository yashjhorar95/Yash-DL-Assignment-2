import React, { useEffect } from 'react';
import { SITE, isPlaceholderLink } from '../config';
import { X, ExternalLink, Clock, Sparkles, CheckCircle2, Layers, Lightbulb, Cpu } from 'lucide-react';

export interface ProjectDetail {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  tags: string[];
  accentColor: string;
  gradient: string;
  shortSummary: string;
  origin: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  roadmap: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onShowToast }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const siteConfig = SITE.projects.find((p) => p.id === project.id);
  const liveUrl = siteConfig?.link;
  const isPending = isPlaceholderLink(liveUrl);

  const handleVisitClick = (e: React.MouseEvent) => {
    if (isPending) {
      e.preventDefault();
      onShowToast(`${project.name} is currently in active development. Live deployment coming soon!`);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b0f19] border border-purple-500/30 p-6 sm:p-8 md:p-10 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow behind modal header */}
        <div
          className="absolute top-0 right-1/4 w-96 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: `${project.accentColor}25`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}50`,
                }}
              >
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">ID: #{project.id}</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mt-0.5 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 pt-6 relative z-10">
          {/* Origin & Story Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1.5 font-semibold">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              Origin Story
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {project.origin}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold mb-2">
                The Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {project.problem}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                The Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Key Features & Architectural Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Tags */}
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-300 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-pink-400" />
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Next Roadmap */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-start gap-3">
            <Cpu className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono uppercase text-purple-400 font-bold">Current Roadmap:</span>
              <p className="text-xs text-slate-300 mt-0.5">{project.roadmap}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div className="text-xs font-mono text-slate-400">
            {isPending ? (
              <span className="flex items-center gap-1.5 text-amber-400">
                <Clock className="w-3.5 h-3.5" />
                Live deployment scheduled
              </span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Deployment Active
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
            >
              Close
            </button>

            {/* Visit Site Button honoring placeholder rule */}
            {isPending ? (
              <button
                onClick={handleVisitClick}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-slate-400 bg-slate-800/80 border border-slate-700 flex items-center gap-2 cursor-pointer hover:bg-slate-700/80 transition-colors"
                title="Link pending: click for details"
              >
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Coming Soon</span>
              </button>
            ) : (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-neon-purple flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
