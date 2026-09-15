import React, { useState } from 'react';
import { INITIAL_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, FolderGit2, Star, Filter, Sparkles, PlusCircle, X } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Full Stack', 'Backend', 'Systems / Scripting'];

  const filteredProjects =
    activeCategory === 'Todos'
      ? INITIAL_PROJECTS
      : INITIAL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTAFOLIO DE DESARROLLO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos Destacados
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Soluciones full stack, librerías de scripts y aplicaciones diseñadas con énfasis en escalabilidad y código limpio.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/[^a-z]/g, '')}`}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'bg-[#10131f] text-zinc-400 hover:text-white border border-white/[0.05] hover:border-white/[0.12]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="rounded-2xl bg-[#0c0e18] border border-white/[0.08] hover:border-violet-500/40 p-6 flex flex-col justify-between transition-all duration-300 glow-card group relative"
          >
            {/* Top Bar: Category & Status */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  {project.category}
                </span>

                <div className="flex items-center gap-3">
                  {project.status && (
                    <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                      {project.status}
                    </span>
                  )}
                  {project.stars && (
                    <span className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                      {project.stars}
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#131625] text-zinc-300 border border-white/[0.05]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
              >
                Ver detalles &rarr;
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                    title="Ver repositorio"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                    title="Ver demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Helpful note for Meyel */}
      <div className="mt-12 p-4 rounded-xl bg-[#0f121e]/80 border border-violet-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-zinc-300">
            <strong className="text-white">¿Listo para conectar tus proyectos reales?</strong>{' '}
            Podemos añadir los repositorios o demos reales cuando quieras con un solo mensaje.
          </span>
        </div>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 font-mono transition-colors whitespace-nowrap"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Ver GitHub @{PERSONAL_INFO.githubUsername}</span>
        </a>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-lg bg-[#0e111d] border border-violet-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded border border-violet-500/20">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold text-white mt-3">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-mono text-zinc-400 uppercase mb-2">Tecnologías Utilizadas</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-[#141829] text-xs font-mono text-zinc-200 border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white"
              >
                Cerrar
              </button>
              <a
                href={selectedProject.githubUrl || PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 shadow-md shadow-violet-600/30"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Ver en GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
