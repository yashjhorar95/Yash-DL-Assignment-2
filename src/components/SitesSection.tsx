import React from 'react';
import { SITE, PORTFOLIO_DATA, isPlaceholderLink } from '../config';
import { Globe, ArrowUpRight, Clock, Scissors, Bot, ShoppingBag, Sparkles, Layers } from 'lucide-react';

interface SitesSectionProps {
  onShowToast: (msg: string) => void;
}

export const SitesSection: React.FC<SitesSectionProps> = ({ onShowToast }) => {
  const getSiteIcon = (id: string) => {
    switch (id) {
      case 'nova':
        return <Scissors className="w-5 h-5 text-purple-400" />;
      case 'happy':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'offcult':
        return <ShoppingBag className="w-5 h-5 text-pink-400" />;
      case 'portfolio':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <Globe className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getSiteUrl = (site: typeof PORTFOLIO_DATA.allSites[0]) => {
    if (site.customLink) return site.customLink;
    if (site.configKey) {
      const match = SITE.projects.find((p) => p.id === site.configKey);
      return match?.link || '#';
    }
    return '#';
  };

  const handleOpenSite = (site: typeof PORTFOLIO_DATA.allSites[0], e: React.MouseEvent) => {
    const url = getSiteUrl(site);
    if (site.customLink && site.customLink.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(site.customLink.replace('#', ''));
      if (el) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (isPlaceholderLink(url)) {
      e.preventDefault();
      onShowToast(`"${site.name}" URL is currently being configured in SITE.projects config.`);
    }
  };

  return (
    <section id="sites" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-3">
          <Globe className="w-3.5 h-3.5" />
          <span>05 // CENTRAL HUB</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          All My Sites In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">One Place</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl font-light">
          A synchronized directory of my web applications, platforms, and personal corner of the internet. Easily extensible directly from the config.
        </p>
      </div>

      {/* Grid of Live-Site Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {PORTFOLIO_DATA.allSites.map((site) => {
          const url = getSiteUrl(site);
          const isPending = !site.customLink && isPlaceholderLink(url);

          return (
            <div
              key={site.id}
              className="rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-glass overflow-hidden"
            >
              {/* Preview Thumbnail: Styled Gradient Browser Mockup Placeholder */}
              <div
                className={`h-40 w-full p-4 flex flex-col justify-between bg-gradient-to-br ${site.colorGradient} border-b border-white/10 relative overflow-hidden`}
              >
                {/* Mockup Browser Top Bar */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 bg-black/50 px-2 py-0.5 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[9px] font-mono text-slate-400 ml-1">
                      {site.id === 'portfolio' ? 'yash.dev' : `${site.id}.app`}
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/40 border border-white/10 text-white"
                  >
                    {site.roleBadge}
                  </span>
                </div>

                {/* Center Stylized Preview Icon */}
                <div className="flex items-center justify-center my-auto relative z-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-black/60 border shadow-lg group-hover:scale-110 transition-transform"
                    style={{ borderColor: `${site.accent}40` }}
                  >
                    {getSiteIcon(site.id)}
                  </div>
                </div>

                {/* Ambient glow in preview */}
                <div
                  className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full blur-xl opacity-30 pointer-events-none group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: site.accent }}
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-display font-bold text-xl text-white">
                      {site.name}
                    </h3>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: isPending ? '#f59e0b' : '#10b981',
                        boxShadow: `0 0 8px ${isPending ? '#f59e0b' : '#10b981'}`,
                      }}
                      title={isPending ? 'Pending config' : 'Active'}
                    />
                  </div>

                  {/* One-Line Definition */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-5">
                    {site.oneLiner}
                  </p>
                </div>

                {/* "Open Site" Button */}
                <div className="pt-3 border-t border-white/5">
                  {isPending ? (
                    <button
                      onClick={(e) => handleOpenSite(site, e)}
                      data-cursor-hover
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-mono font-medium text-slate-400 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Coming Soon</span>
                    </button>
                  ) : (
                    <a
                      href={url}
                      target={site.customLink ? '_self' : '_blank'}
                      rel={site.customLink ? '' : 'noopener noreferrer'}
                      onClick={(e) => handleOpenSite(site, e)}
                      data-cursor-hover
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-display font-semibold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 shadow-glass flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Open Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Under Grid: "What each site does" Block (2-3 line definition per site) */}
      <div className="rounded-3xl bg-slate-900/70 border border-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-glass">
        <div className="flex items-center gap-2 mb-6">
          <Layers className="w-5 h-5 text-purple-400" />
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            What Each Site Does (Quick Breakdown)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.allSites.map((site) => (
            <div
              key={site.id}
              className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${site.accent}20` }}
                >
                  {getSiteIcon(site.id)}
                </div>
                <h4 className="font-display font-bold text-base text-white">
                  {site.name}
                </h4>
                <span className="text-[11px] font-mono text-slate-500">
                  — {site.roleBadge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {site.detailedDesc}
              </p>
            </div>
          ))}
        </div>

        {/* Note on Extensibility */}
        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Config-Driven Architecture</span>
          <span>Add new cards anytime in `SITE.projects`</span>
        </div>
      </div>
    </section>
  );
};

export default SitesSection;
