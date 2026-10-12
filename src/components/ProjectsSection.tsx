import React, { useState } from 'react';
import { SITE, PORTFOLIO_DATA, isPlaceholderLink } from '../config';
import { ProjectModal, ProjectDetail } from './ProjectModal';
import { Info, Clock, FolderGit2, ArrowUpRight, Scissors, Bot, ShoppingBag } from 'lucide-react';

interface ProjectsSectionProps {
  onShowToast: (msg: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onShowToast }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'nova':
        return <Scissors className="w-5 h-5 text-purple-400" />;
      case 'happy':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'offcult':
        return <ShoppingBag className="w-5 h-5 text-pink-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handleVisit = (project: ProjectDetail, e: React.MouseEvent) => {
    const siteConfig = SITE.projects.find((p) => p.id === project.id);
    const link = siteConfig?.link;
    if (isPlaceholderLink(link)) {
      e.preventDefault();
      onShowToast(`"${project.name}" link is currently in progress. Full deployment coming soon!`);
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-wider mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>04 // FEATURED BUILDS</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          Showcase <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl font-light">
          Three major products born from real startup pitches, personal daily automation needs, and a passion to bridge digital commerce with street culture.
        </p>
      </div>

      {/* 3 Detailed Showcase Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {PORTFOLIO_DATA.detailedProjects.map((project) => {
          const siteConfig = SITE.projects.find((p) => p.id === project.id);
          const liveUrl = siteConfig?.link;
          const isPending = isPlaceholderLink(liveUrl);

          return (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/60 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-glass relative overflow-hidden"
            >
              {/* Card Top Preview / Gradient Mockup Banner */}
              <div
                className={`h-48 w-full p-5 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${project.gradient} border-b border-white/10`}
              >
                {/* Subtle mock browser dots */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-mono text-slate-300 ml-1.5 uppercase">
                      {project.id}.app
                    </span>
                  </div>

                  {/* Status Badge */}
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-sm"
                    style={{
                      backgroundColor: `${project.accentColor}25`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}60`,
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Big Aesthetic Monogram & Title */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/50 border border-white/10"
                    >
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="font-mono text-xs text-slate-300 uppercase tracking-widest">
                      {project.subtitle}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight drop-shadow-md">
                    {project.name}
                  </h3>
                </div>

                {/* Soft ambient orb in banner */}
                <div
                  className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full blur-2xl opacity-40 pointer-events-none group-hover:opacity-75 transition-opacity"
                  style={{ backgroundColor: project.accentColor }}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Short Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {project.shortSummary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Visit Site & Details */}
                <div className="pt-5 border-t border-white/10 flex items-center gap-3">
                  {/* Details Button (Opens Modal) */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    data-cursor-hover
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-display font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-purple-400/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-purple-400" />
                    <span>Details</span>
                  </button>

                  {/* Visit Site Button (Respects placeholder rule) */}
                  {isPending ? (
                    <button
                      onClick={(e) => handleVisit(project, e)}
                      data-cursor-hover
                      title="Deployment link in progress"
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-400 bg-slate-900/90 border border-slate-700/60 hover:border-amber-400/40 hover:text-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Coming Soon</span>
                    </button>
                  ) : (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-display font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-neon-cyan transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Visit Site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Details Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onShowToast={onShowToast}
      />
    </section>
  );
};

export default ProjectsSection;
