import React, { useRef, useState, useEffect } from 'react';
import {
  Globe,
  Layout,
  Cpu,
  Binary,
  Terminal,
  Bot,
  Smartphone,
  ShoppingBag,
  Sparkles,
  Scissors,
  Code2,
  Layers,
  LucideIcon,
} from 'lucide-react';
import { PORTFOLIO_CONTENT, MarqueeTile } from '../content';
import { useReducedMotion } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layout,
  Cpu,
  Binary,
  Terminal,
  Bot,
  Smartphone,
  ShoppingBag,
  Sparkles,
  Scissors,
  Code2,
  Layers,
};

const TileCard: React.FC<{ tile: MarqueeTile }> = ({ tile }) => {
  const IconComponent = iconMap[tile.iconName] || Sparkles;

  return (
    <div
      className="flex-shrink-0 w-[280px] h-[180px] sm:w-[350px] sm:h-[220px] md:w-[420px] md:h-[270px] rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent border border-white/10 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center p-6 shadow-2xl transition-all duration-300 hover:border-[#D7E2EA]/40 select-none group"
      style={{
        boxShadow: `0 10px 30px -10px ${tile.glowColor || 'rgba(0, 240, 255, 0.15)'}`,
      }}
    >
      {/* Subtle Glow */}
      <div
        className="absolute -top-12 -left-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
        style={{
          background: tile.glowColor || 'rgba(0, 240, 255, 0.3)',
        }}
        aria-hidden="true"
      />

      {/* Glass Icon Box */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-3 sm:mb-4 text-[#D7E2EA] group-hover:scale-110 group-hover:text-white transition-all duration-300 shadow-inner">
        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </div>

      {/* Label */}
      <span className="font-medium uppercase tracking-wider text-sm sm:text-base md:text-xl text-[#D7E2EA] text-center px-4">
        {tile.label}
      </span>
    </div>
  );
};

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldReduceMotion]);

  const tiles = PORTFOLIO_CONTENT.marqueeTiles;
  const half = Math.ceil(tiles.length / 2);
  const firstHalf = tiles.slice(0, half);
  const secondHalf = tiles.slice(half);

  // Tripled for seamless scrolling
  const row1Tiles = [...firstHalf, ...firstHalf, ...firstHalf];
  const row2Tiles = [...secondHalf, ...secondHalf, ...secondHalf];

  const row1Transform = shouldReduceMotion
    ? 'translateX(0px)'
    : `translateX(${offset - 200}px)`;

  const row2Transform = shouldReduceMotion
    ? 'translateX(0px)'
    : `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative select-none"
      aria-label="Interactive Showcase Marquee"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves RIGHT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {row1Tiles.map((tile, idx) => (
            <TileCard key={`row1-${tile.id}-${idx}`} tile={tile} />
          ))}
        </div>

        {/* Row 2 - Moves LEFT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {row2Tiles.map((tile, idx) => (
            <TileCard key={`row2-${tile.id}-${idx}`} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
