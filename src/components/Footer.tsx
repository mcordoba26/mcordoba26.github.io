import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#050609] border-t border-white/[0.06] text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Bio note */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-[11px] text-zinc-400">
                Full Stack & Systems Developer
              </p>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#habilidades" className="hover:text-white transition-colors">Habilidades</a>
            <a href="#terminal" className="hover:text-white transition-colors">Terminal</a>
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors cursor-pointer"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-zinc-400 text-[11px]">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Diseñado con estética oscura minimalista. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
