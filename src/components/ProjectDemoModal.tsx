import React, { useState } from 'react';
import { X, Monitor, Tablet, Smartphone, ExternalLink, Github, CheckCircle2, Shield, AlertTriangle } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'casestudy'>('preview');

  if (!project) return null;

  const viewportWidths = {
    desktop: 'w-full max-w-[1020px]',
    tablet: 'w-full max-w-[768px]',
    mobile: 'w-full max-w-[375px]',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121214] border border-[#232326] w-full max-w-5xl h-[90vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Modal Header */}
        <div className="p-4 bg-[#0E0E10] border-b border-[#232326] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#18181B] text-[#D9FF3D] border border-[#232326]">
              {project.tag}
            </span>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#F4F4F5] truncate">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Viewport Switcher */}
            <div className="hidden sm:flex items-center bg-[#18181B] border border-[#232326] rounded-lg p-1 gap-1">
              <button
                onClick={() => setViewport('desktop')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewport === 'desktop' ? 'bg-[#232326] text-[#D9FF3D]' : 'text-[#71717A] hover:text-[#F4F4F5]'
                }`}
                title="Desktop (1440px)"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewport('tablet')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewport === 'tablet' ? 'bg-[#232326] text-[#D9FF3D]' : 'text-[#71717A] hover:text-[#F4F4F5]'
                }`}
                title="Tablet (768px)"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewport('mobile')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewport === 'mobile' ? 'bg-[#232326] text-[#D9FF3D]' : 'text-[#71717A] hover:text-[#F4F4F5]'
                }`}
                title="Mobile (375px)"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#71717A] hover:text-[#F4F4F5] hover:bg-[#18181B] transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#121214] border-b border-[#232326] text-xs font-mono">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('preview')}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'border-[#D9FF3D] text-[#D9FF3D] font-bold'
                  : 'border-transparent text-[#71717A] hover:text-[#F4F4F5]'
              }`}
            >
              Live Interactive Sandbox
            </button>
            <button
              onClick={() => setActiveTab('casestudy')}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${
                activeTab === 'casestudy'
                  ? 'border-[#D9FF3D] text-[#D9FF3D] font-bold'
                  : 'border-transparent text-[#71717A] hover:text-[#F4F4F5]'
              }`}
            >
              Case Study &amp; Technical Specs
            </button>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto bg-[#0A0A0B] p-4 sm:p-6 flex flex-col items-center justify-center">
          {activeTab === 'preview' ? (
            <div className="w-full h-full flex flex-col items-center justify-center">
              {/* Device Frame */}
              <div className={`${viewportWidths[viewport]} h-full max-h-[580px] bg-[#121214] border border-[#232326] rounded-xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300`}>
                
                {/* Browser Mockup Chrome */}
                <div className="bg-[#18181B] px-4 py-2 border-b border-[#232326] flex items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]/60"></div>
                  </div>
                  <div className="bg-[#0A0A0B] px-3 py-1 rounded text-[11px] text-[#A1A1AA] truncate max-w-xs border border-[#232326]/60">
                    https://demo.raffa.dev/{project.slug}
                  </div>
                  <span className="text-[10px] text-[#71717A] uppercase">{viewport}</span>
                </div>

                {/* Embedded Live Simulation Frame */}
                <div className="flex-1 bg-[#0A0A0B] p-6 overflow-y-auto text-left flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#232326] pb-3">
                      <div>
                        <div className="text-xs font-mono text-[#D9FF3D] uppercase">// LIVE APP INSTANCE</div>
                        <h4 className="font-display font-bold text-xl text-[#F4F4F5]">{project.title}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#18181B] text-[#4ADE80] border border-[#232326]">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {project.descriptionShort}
                    </p>

                    {/* Interactive Widget / Metric Showcase */}
                    <div className="p-4 rounded-xl bg-[#121214] border border-[#232326] space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center text-[#71717A]">
                        <span>CORE WEB VITALS BENCHMARK</span>
                        <span className="text-[#4ADE80] font-bold">100% PASS</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="p-2 rounded bg-[#18181B] border border-[#232326] text-center">
                            <div className="text-[10px] text-[#71717A]">METRIC {idx + 1}</div>
                            <div className="text-xs font-bold text-[#F4F4F5] mt-0.5">{metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div>
                      <div className="text-[10px] font-mono text-[#71717A] uppercase mb-1.5">STACK ARSITEKTUR:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#18181B] text-[#E4E4E7] border border-[#232326]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#232326] flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#4ADE80]" />
                      <span>PRD Section 3.1.3: Sandboxed Simulation</span>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#D9FF3D] hover:underline flex items-center gap-1"
                      >
                        <span>Lihat Source Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Case Study Tab (Section 16.4) */
            <div className="w-full max-w-3xl space-y-6 text-left py-4">
              <div className="p-6 rounded-2xl bg-[#121214] border border-[#232326] space-y-4">
                <div>
                  <div className="text-xs font-mono text-[#EF4444] uppercase mb-1">01 / PROBLEM STATEMENT</div>
                  <h4 className="font-display font-bold text-lg text-[#F4F4F5] mb-2">Masalah Yang Dihadapi</h4>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#232326]">
                  <div className="text-xs font-mono text-[#4ADE80] uppercase mb-1">02 / ARCHITECTURAL SOLUTION</div>
                  <h4 className="font-display font-bold text-lg text-[#F4F4F5] mb-2">Solusi Rekayasa</h4>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#232326]">
                  <div className="text-xs font-mono text-[#D9FF3D] uppercase mb-1">03 / MEASURED OUTCOMES</div>
                  <h4 className="font-display font-bold text-lg text-[#F4F4F5] mb-2">Hasil Terukur</h4>
                  <p className="text-sm text-[#F4F4F5] font-mono leading-relaxed bg-[#0A0A0B] p-3 rounded-xl border border-[#232326]">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
