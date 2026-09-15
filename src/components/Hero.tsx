import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Copy, Check, Sparkles, Code2, Layers, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);

  const phrases = [
    'Desarrollo Web Full Stack',
    'TypeScript, React & Node.js',
    'Python & Microservicios Asíncronos',
    'Scripting en Lua & Rendimiento en C++',
    'Arquitecturas Limpias en C# & Java',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [phrases.length]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const polyglotBadges = [
    { label: 'TypeScript', color: 'border-blue-500/30 text-blue-400 bg-blue-500/10' },
    { label: 'JavaScript', color: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' },
    { label: 'Python', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' },
    { label: 'Lua', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' },
    { label: 'C#', color: 'border-purple-500/30 text-purple-400 bg-purple-500/10' },
    { label: 'C++', color: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10' },
    { label: 'Java', color: 'border-amber-500/30 text-amber-400 bg-amber-500/10' },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern border-b border-white/[0.06]"
    >
      {/* Ambient Void Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[260px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          
          {/* Top Status Capsule */}
          <div
            id="hero-status-pill"
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#131624] border border-violet-500/30 shadow-lg shadow-violet-950/40 text-xs font-mono text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200 font-semibold">{PERSONAL_INFO.name}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-violet-400 font-medium">Full Stack & Systems</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Transformando ideas en software{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-white">
              eficiente y escalable.
            </span>
          </h1>

          {/* Dynamic Typing Specialty Subtitle */}
          <div className="h-8 flex items-center justify-center">
            <p className="text-lg sm:text-xl font-mono text-violet-300 flex items-center gap-2 bg-[#121524]/60 px-4 py-1.5 rounded-lg border border-violet-500/20">
              <span className="text-zinc-500">&gt;</span>
              <span className="transition-all duration-300 key={typingIndex}">
                {phrases[typingIndex]}
              </span>
              <span className="w-2 h-5 bg-violet-400 inline-block animate-pulse" />
            </p>
          </div>

          {/* Short Bio */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Polyglot Tech Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 max-w-2xl">
            {polyglotBadges.map((badge) => (
              <span
                key={badge.label}
                className={`px-3 py-1 text-xs font-mono font-medium rounded-md border ${badge.color} transition-all hover:scale-105`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              id="hero-cta-projects"
              href="#proyectos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-all hover:-translate-y-0.5"
            >
              <span>Explorar Proyectos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              id="hero-cta-terminal"
              href="#terminal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#121522] hover:bg-[#191e30] text-zinc-200 border border-white/[0.08] hover:border-violet-500/30 text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Ver Código Interactivo</span>
            </a>

            <button
              id="hero-copy-email-btn"
              type="button"
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-zinc-300 border border-white/[0.08] text-sm font-mono transition-colors"
              title="Copiar correo al portapapeles"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-sans text-xs">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs">{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
