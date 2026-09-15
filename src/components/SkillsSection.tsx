import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Server, Cpu, CheckCircle2, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-violet-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      default:
        return <Terminal className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="habilidades" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400">
          <span>STACK TÉCNICO & POLÍGLOTA</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Habilidades y Tecnologías
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Dominio integral desde la arquitectura frontend y consumo de APIs hasta desarrollo backend, lógica de servidores en Lua y optimizaciones de bajo nivel.
        </p>
      </div>

      {/* Grid of 3 Major Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, catIndex) => (
          <div
            key={category.title}
            id={`skill-category-${catIndex}`}
            className="rounded-2xl bg-[#0c0e18] border border-white/[0.08] hover:border-violet-500/30 p-6 flex flex-col justify-between transition-all duration-300 glow-card"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3 mt-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-[#111422] border border-white/[0.04] hover:border-white/[0.12] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-3 border-l border-zinc-800 ml-0.5">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom summary note */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>{category.skills.length} Tecnologías Clave</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verificado
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
