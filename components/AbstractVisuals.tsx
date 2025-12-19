
import React from 'react';
import { BrainCircuit, Cpu, Target, Zap } from 'lucide-react';

interface AbstractVisualsProps {
  mousePos?: { x: number; y: number };
}

export const AbstractVisuals: React.FC<AbstractVisualsProps> = ({ mousePos = { x: 0, y: 0 } }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      
      {/* Connection Lines (SVG) - Contained */}
      <svg className="absolute w-full h-full overflow-visible z-0 opacity-20" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef9d56" stopOpacity="0" />
            <stop offset="50%" stopColor="#74a6af" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef9d56" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 100 100 Q 250 250 400 100" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5,5" />
        <path d="M 100 400 Q 250 250 400 400" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5,5" />
      </svg>

      {/* Central Hub */}
      <div 
        className="relative w-32 h-32 bg-brand-dark rounded-full shadow-[0_20px_50px_-10px_rgba(15,23,42,0.3)] border border-slate-700 flex items-center justify-center z-10 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-brand-orange/10 blur-3xl animate-pulse"></div>
        <img 
          src="/Worknova_Logo.webp" 
          alt="WN" 
          className="w-16 h-auto brightness-0 invert"
        />
        {/* Orbit Rings */}
        <div className="absolute -inset-4 rounded-full border border-slate-800 animate-spin-slow"></div>
        <div className="absolute -inset-8 rounded-full border border-slate-800/50 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* Floating Nodes (Professionally placed to avoid clipping) */}
      <div 
        className="absolute top-[10%] left-[10%] p-4 bg-white border border-slate-100 rounded-2xl shadow-xl flex items-center gap-3 transition-transform duration-300 ease-out animate-float"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shadow-inner">
          <BrainCircuit size={20} />
        </div>
        <div>
          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">AI Matching</div>
          <div className="text-[13px] font-bold text-brand-dark leading-tight">Smart Search</div>
        </div>
      </div>

      <div 
        className="absolute top-[10%] right-[10%] p-4 bg-white border border-slate-100 rounded-2xl shadow-xl flex items-center gap-3 transition-transform duration-300 ease-out animate-float-delayed"
        style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * 0.8}px)` }}
      >
        <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shadow-inner">
          <Cpu size={20} />
        </div>
        <div>
          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Process</div>
          <div className="text-[13px] font-bold text-brand-dark leading-tight">Digital Sync</div>
        </div>
      </div>

      <div 
        className="absolute bottom-[10%] left-[10%] p-4 bg-white border border-slate-100 rounded-2xl shadow-xl flex items-center gap-3 transition-transform duration-300 ease-out animate-float-delayed"
        style={{ transform: `translate(${mousePos.x * 0.7}px, ${mousePos.y * -0.7}px)` }}
      >
        <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shadow-inner">
          <Target size={20} />
        </div>
        <div>
          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Strategy</div>
          <div className="text-[13px] font-bold text-brand-dark leading-tight">Success Base</div>
        </div>
      </div>

      <div 
        className="absolute bottom-[10%] right-[10%] p-4 bg-white border border-slate-100 rounded-2xl shadow-xl flex items-center gap-3 transition-transform duration-300 ease-out animate-float"
        style={{ transform: `translate(${mousePos.x * -0.9}px, ${mousePos.y * -0.9}px)` }}
      >
        <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shadow-inner">
          <Zap size={20} />
        </div>
        <div>
          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Growth</div>
          <div className="text-[13px] font-bold text-brand-dark leading-tight">Next Level</div>
        </div>
      </div>

    </div>
  );
};
