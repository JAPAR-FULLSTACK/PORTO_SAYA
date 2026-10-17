import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const WorkExperienceSection: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0E0E10] border-y border-[#232326] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-[#232326] pb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#D9FF3D] mb-2">
             PENGALAMAN SAYA 
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight">
              PENGALAMAN KERJA SAYA 
            </h2>
          </div>
          
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2 text-xs font-mono text-[#A1A1AA]">
                    <span className="text-[#D9FF3D] font-medium">{exp.type}</span>
                    <span aria-hidden="true" className="text-[#3F3F46]">·</span>
                    <span className="flex items-center gap-1 text-[#71717A]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span aria-hidden="true" className="text-[#3F3F46]">·</span>
                    <span className="flex items-center gap-1 text-[#71717A]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F5] group-hover:text-[#D9FF3D] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-[#A1A1AA] font-mono mt-0.5">
                    {exp.company}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed max-w-4xl">
                {exp.description}
              </p>

              {/* Highlights formatted strictly as [Action] + [Metric] + [Impact] */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3">
                  Pencapaian &amp; Hasil Terukur:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.highlights.map((hl, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0A0A0B] border border-[#232326] text-xs sm:text-sm text-[#E4E4E7]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-[#232326] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#71717A] mr-2">Tech:</span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-[#18181B] text-[#A1A1AA] text-xs font-mono border border-[#232326]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
