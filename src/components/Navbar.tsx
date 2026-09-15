import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Código & Stack', href: '#terminal' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#inicio"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-tight text-white flex items-center gap-1.5">
                MEYEL<span className="text-violet-400">.DEV</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-[#10131d]/70 px-4 py-1.5 rounded-full border border-white/[0.07] backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-violet-600/25 border border-violet-500/30'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Status Badge & Contact */}
          <div className="hidden lg:flex items-center gap-3">
            <div
              id="availability-pill"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span>Disponible</span>
            </div>

            <a
              id="github-nav-btn"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
              title="Ver perfil de GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              id="contact-nav-btn"
              href="#contacto"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/20 hover:shadow-violet-600/35 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="github-nav-btn-mobile"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05]"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-[#0a0c14] border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-3 mt-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Disponible para nuevos proyectos</span>
          </div>
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-500"
          >
            <Mail className="w-4 h-4" />
            <span>Escribir Mensaje</span>
          </a>
        </div>
      )}
    </header>
  );
};
