import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, Copy, Check, MessageSquare, MapPin, Clock } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSending(true);
    // Simulate sending message
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 600);
  };

  return (
    <section id="contacto" className="py-24 bg-[#07080d] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>HABLEMOS DE TU PROYECTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Tienes una idea en mente?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Estoy disponible para desarrollo full stack, optimizaciones de código, automatizaciones y colaboraciones técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Column: Direct Info Cards (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#0c0e18] border border-white/[0.08] hover:border-violet-500/30 transition-all glow-card">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-zinc-400 uppercase font-mono tracking-wider">Correo Electrónico</p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base font-mono font-semibold text-white hover:text-violet-300 transition-colors mt-1 block break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl bg-[#0c0e18] border border-white/[0.08] hover:border-violet-500/30 transition-all glow-card">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-300 transition-colors"
                >
                  Visitar &rarr;
                </a>
              </div>
              <p className="text-xs text-zinc-400 uppercase font-mono tracking-wider">Perfil de GitHub</p>
              <p className="text-base font-mono font-semibold text-white mt-1">
                github.com/{PERSONAL_INFO.githubUsername}
              </p>
            </div>

            {/* Availability & Mode Card */}
            <div className="p-5 rounded-2xl bg-[#0c0e18] border border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Estado de Disponibilidad</span>
              </div>
              <p className="text-sm font-semibold text-zinc-200">
                Abierto a proyectos Freelance & Contratos Remotos
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" /> Remoto
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" /> Respuesta rápida
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0d16] border border-white/[0.08] relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Envíame un mensaje directo
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Cuéntame qué requieres construir y te responderé a la brevedad.
              </p>

              {sent && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>¡Mensaje enviado con éxito! Gracias por contactarme, Meyel te responderá pronto.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Tu Nombre
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#111422] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-sm text-white placeholder-zinc-500 font-sans transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Tu Correo
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#111422] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-sm text-white placeholder-zinc-500 font-sans transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Detalles del Proyecto o Consulta
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe brevemente la idea, tecnologías deseadas o fecha tentativa..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#111422] border border-white/[0.08] focus:border-violet-500 focus:outline-none text-sm text-white placeholder-zinc-500 font-sans transition-colors resize-none"
                  />
                </div>

                <button
                  id="submit-message-btn"
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{sending ? 'Enviando...' : 'Enviar Mensaje'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
