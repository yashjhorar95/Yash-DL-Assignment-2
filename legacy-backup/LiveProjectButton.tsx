import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  url?: string;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  url,
  className = '',
  label = 'Live Project',
}) => {
  const hasUrl = Boolean(url && url.trim().length > 0);

  if (!hasUrl) {
    // Disabled/placeholder ghost button
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA]/50 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base select-none cursor-not-allowed transition-colors ${className}`}
        title="URL not added yet (Placeholder)"
        aria-disabled="true"
      >
        <span>{label}</span>
        <ArrowUpRight className="w-4 h-4 opacity-50" />
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 active:scale-95 transition-all duration-200 cursor-pointer ${className}`}
      aria-label={`${label} (opens in new tab)`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
};

export default LiveProjectButton;
