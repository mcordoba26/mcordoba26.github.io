import React, { useState } from 'react';
import { CODE_SNIPPETS } from '../data/portfolioData';
import { Play, Copy, Check, Terminal, FileCode, CheckCircle } from 'lucide-react';

export const CodePlayground: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('typescript');
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(true);
  const [copied, setCopied] = useState(false);

  const currentSnippet =
    CODE_SNIPPETS.find((s) => s.language === selectedLang) || CODE_SNIPPETS[0];

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 450);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 bg-[#07080c] border-y border-white/[0.06] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>TERMINAL INTERACTIVA & MULTILENGUAJE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Código en Acción
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Explora cómo estructuro la lógica en distintos lenguajes: desde APIs web tipadas hasta scripts de servidores y algoritmos compilados.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              id="copy-code-btn"
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111422] hover:bg-[#161a2d] border border-white/[0.08] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copiar Snippet</span>
                </>
              )}
            </button>

            <button
              id="run-code-btn"
              type="button"
              onClick={handleRun}
              disabled={isRunning}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono font-semibold shadow-md shadow-violet-600/30 hover:shadow-violet-600/50 transition-all disabled:opacity-50 cursor-pointer"
            >
              <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Ejecutando...' : 'Ejecutar'}</span>
            </button>
          </div>
        </div>

        {/* Code Terminal Mockup */}
        <div className="rounded-2xl bg-[#0b0d16] border border-white/[0.1] shadow-2xl overflow-hidden">
          {/* Terminal Titlebar with Language Tabs */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#0f121e] border-b border-white/[0.08] gap-3">
            {/* Window control dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block" />
              <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">
                meyel-terminal ~ {currentSnippet.extension}
              </span>
            </div>

            {/* Language Switcher Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto py-1">
              {CODE_SNIPPETS.map((snippet) => (
                <button
                  key={snippet.language}
                  id={`lang-tab-${snippet.language}`}
                  type="button"
                  onClick={() => setSelectedLang(snippet.language)}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    selectedLang === snippet.language
                      ? 'bg-violet-600/25 text-violet-300 border border-violet-500/40 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05]'
                  }`}
                >
                  <FileCode className="w-3 h-3" />
                  <span>{snippet.displayName}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Editor Body */}
          <div className="p-4 sm:p-6 bg-[#090b12] overflow-x-auto text-sm font-mono leading-relaxed">
            <pre className="text-zinc-300 font-mono text-xs sm:text-sm">
              <code>{currentSnippet.code}</code>
            </pre>
          </div>

          {/* Terminal Output Console */}
          <div className="bg-[#05060a] border-t border-white/[0.08] p-4 sm:p-5 font-mono text-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-zinc-400 flex items-center gap-2 text-[11px] tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Salida de Consola ({currentSnippet.displayName})
              </span>
              <span className="text-zinc-500 text-[11px]">Salida simulada</span>
            </div>

            <div className="p-3 rounded-lg bg-[#090a10] border border-white/[0.04] text-zinc-300 whitespace-pre-line min-h-[60px] flex items-center">
              {isRunning ? (
                <span className="text-violet-400 animate-pulse">Compilando y ejecutando proceso...</span>
              ) : showOutput ? (
                <span className="text-emerald-400 font-mono">{currentSnippet.output}</span>
              ) : (
                <span className="text-zinc-600">Presiona "Ejecutar" para ver la salida.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
