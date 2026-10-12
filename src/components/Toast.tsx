import React from 'react';
import { Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] max-w-sm rounded-2xl bg-[#0b0f19]/95 border border-purple-500/40 p-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300 flex items-start gap-3">
      <div className="p-2 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-400 shrink-0">
        <Sparkles className="w-4 h-4" />
      </div>

      <div className="flex-1 pr-2">
        <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider font-semibold block">
          Portfolio Notice
        </span>
        <p className="text-xs text-slate-200 mt-0.5 leading-relaxed font-sans">
          {message}
        </p>
      </div>

      <button
        onClick={onClose}
        aria-label="Close notification"
        className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
