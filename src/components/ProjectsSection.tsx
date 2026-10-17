import React, { useState } from 'react';
import { ExternalLink, Github, Play, ArrowUpRight, Users, Building2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectDemoModal } from './ProjectDemoModal';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const displayedProjects = filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  const handleOpenLiveDemo = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-[#232326] pb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#D9FF3D] mb-2">
              // KATALOG PROJECT SAYA 
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight">
              SEMUA YANG SAYA KEMBANGKAN 
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                filter === 'all'
                  ? 'bg-[#18181B] text-[#D9FF3D] border-[#3F3F46]'
                  : 'bg-transparent text-[#71717A] border-transparent hover:text-[#F4F4F5]'
              }`}
            >
              Semua Project saya  ({projects.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                filter === 'featured'
                  ? 'bg-[#18181B] text-[#D9FF3D] border-[#3F3F46]'
                  : 'bg-transparent text-[#71717A] border-transparent hover:text-[#F4F4F5]'
              }`}
            >
              POPULER (2)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Card Header & Visual Preview */}
              <div>
                <div className="p-5 sm:p-6 border-b border-[#232326] bg-[#0E0E10] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#A1A1AA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9FF3D]"></span>
                    <span className="uppercase tracking-wider">{project.tag}</span>
                    <span aria-hidden="true" className="text-[#3F3F46]">·</span>
                    <span>{project.year}</span>
                  </div>
                  {project.featured && (
                    <span className="text-[#FBBF24] font-medium tracking-wider flex items-center gap-1">
                      <span>★</span>
                      <span>POPULER</span>
                    </span>
                  )}
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  
                  {/* Title & Direct Demo Trigger */}
                  <h3 className="font-display font-bold text-2xl text-[#F4F4F5] group-hover:text-[#D9FF3D] transition-colors flex items-center justify-between gap-2">
                    <a
                      href={project.demoUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2"
                      title="Buka Demo Live di tab baru"
                    >
                      <span>{project.title}</span>
                      <ExternalLink className="w-4 h-4 text-[#D9FF3D] opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                    </a>
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed font-body">
                    {project.descriptionShort}
                  </p>

                  {/* Tim Pengerja & Asal Tim */}
                  <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-[#232326] space-y-2 text-xs font-mono">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pb-2 border-b border-[#18181B]">
                      <span className="text-[#71717A] text-[10px] uppercase flex items-center gap-1.5 shrink-0">
                        <Users className="w-3.5 h-3.5 text-[#D9FF3D]" />
                        <span>TIM PENGERJA:</span>
                      </span>
                      <span className="text-[#F4F4F5] font-medium sm:text-right">
                        {project.teamMembers?.join(', ') || 'Muhammad Raffadian Pratama'}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-[#71717A] text-[10px] uppercase flex items-center gap-1.5 shrink-0">
                        <Building2 className="w-3.5 h-3.5 text-[#4ADE80]" />
                        <span>ASAL TIM:</span>
                      </span>
                      <span className="text-[#A1A1AA] sm:text-right">
                        {project.teamOrigin || 'SMK 1 Antartika Sidoarjo'}
                      </span>
                    </div>
                  </div>

                  {/* Progres Proyek Bar */}
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[#71717A]">PROGRES PROYEK:</span>
                      <span className="text-[#D9FF3D] font-bold">
                        {project.progressStatus || `${project.progress || 100}% Selesai`}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#18181B] rounded-full overflow-hidden border border-[#232326]">
                      <div
                        className="h-full bg-[#D9FF3D] rounded-full transition-all duration-500"
                        style={{ width: `${project.progress || 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Outcome Highlight Box */}
                  <div className="p-3 rounded-xl bg-[#0A0A0B] border border-[#232326] font-mono text-xs">
                    <div className="text-[10px] text-[#71717A] uppercase mb-0.5">HASIL TERUKUR:</div>
                    <div className="text-[#4ADE80] font-medium">{project.outcome}</div>
                  </div>

                  {/* Metric Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#18181B] text-[11px] font-mono text-[#E4E4E7] border border-[#232326]"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-[#71717A] bg-[#18181B]/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions: Demo Live (Direct) + Source Code + Spek */}
              <div className="p-5 sm:p-6 pt-4 border-t border-[#232326] bg-[#0E0E10]/50 flex flex-wrap items-center justify-between gap-3">
                
                {/* Direct Live Demo Button (Throws user directly to the live website!) */}
                <a
                  href={project.demoUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D9FF3D] text-[#0A0A0B] text-xs font-mono font-bold hover:bg-[#cbf72c] transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  title="Klik untuk langsung membuka website demo live di tab baru"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo Live ↗</span>
                </a>

                {/* Secondary Actions */}
                <div className="flex items-center gap-2">
                  {/* Source Code GitHub */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#18181B] border border-[#232326] text-xs font-mono text-[#F4F4F5] hover:border-[#3F3F46] hover:text-[#D9FF3D] transition-colors"
                      title="Lihat Source Code di GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Source Code</span>
                    </a>
                  )}

                  {/* Spek & Viewport Simulator */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl bg-[#121214] border border-[#232326] text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-[#3F3F46] transition-colors cursor-pointer"
                    title="Buka detail studi kasus & simulator viewport"
                  >
                    <Play className="w-3 h-3 text-[#D9FF3D]" />
                    <span className="hidden md:inline">Spek</span>
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Embedded Live Demo & Viewport Switcher Modal */}
      <ProjectDemoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
