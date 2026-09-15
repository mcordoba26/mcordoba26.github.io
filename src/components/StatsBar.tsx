import React from 'react';
import { STATS } from '../data/portfolioData';
import { Code, Layers, Zap, Calendar } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const icons = [
    <Code className="w-5 h-5 text-violet-400" />,
    <Layers className="w-5 h-5 text-indigo-400" />,
    <Zap className="w-5 h-5 text-amber-400" />,
    <Calendar className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            id={`stat-card-${index}`}
            className="p-4 sm:p-5 rounded-xl bg-[#0e101a]/90 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/30 transition-all glow-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                {stat.value}
              </span>
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                {icons[index % icons.length]}
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-zinc-200">
                {stat.label}
              </p>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 line-clamp-1">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
