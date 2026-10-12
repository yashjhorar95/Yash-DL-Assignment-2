/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bitcount Ink"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        bitcount: ['"Bitcount Ink"', 'cursive', 'system-ui', 'sans-serif'],
        pixel: ['basis33', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          950: '#030508',
          900: '#06080d',
          850: '#0b0f19',
          800: '#111827',
          700: '#1e293b',
          600: '#334155',
        },
        neon: {
          purple: '#a855f7',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          sky: '#38bdf8',
          pink: '#ec4899',
          fuchsia: '#d946ef',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.5))' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'neon-purple': '0 0 25px -5px rgba(168, 85, 247, 0.35)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'neon-pink': '0 0 25px -5px rgba(236, 72, 153, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
