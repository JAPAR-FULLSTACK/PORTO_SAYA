import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { PORTFOLIO_DATA, EducationEntry } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 md:py-28 bg-[#0A0A0B] border-y border-[#232326] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-[#232326] pb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#D9FF3D] mb-2">
              // PENDIDIKAN
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight">
              Latar Belakang Pendidikan
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md font-body">
            Rekam jejak akademis dari Sekolah Dasar hingga Sekolah Menengah Kejuruan dengan fokus spesifik pada rekayasa perangkat lunak.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#232326] space-y-12">
          {education.map((edu, idx) => {
            const initials = edu.institution
              .split(' ')
              .map((w) => w[0])
              .join('')
              .substring(0, 2)
              .toUpperCase();

            return (
              <div key={idx} className="relative group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0A0A0B] border-2 border-[#D9FF3D] group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(217,255,61,0.4)]" />

                <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#232326] group-hover:border-[#3F3F46] transition-all">
                  
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Logo / Monogram Fallback */}
                      <div className="w-12 h-12 rounded-xl bg-[#18181B] border border-[#232326] flex items-center justify-center font-mono font-bold text-sm text-[#D9FF3D] shrink-0">
                        {initials}
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F5] group-hover:text-[#D9FF3D] transition-colors">
                          {edu.institution}
                        </h3>
                        {edu.major && (
                          <div className="text-sm font-medium text-[#4ADE80] font-mono mt-0.5">
                            {edu.major}
                          </div>
                        )}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A1A1AA] mt-1.5">
                          <span className="flex items-center gap-1 text-[#F4F4F5]">
                            <Calendar className="w-3.5 h-3.5 text-[#71717A]" />
                            <span>{edu.period.start} – {edu.period.end}</span>
                          </span>
                          {edu.isCurrent && (
                            <>
                              <span aria-hidden="true" className="text-[#3F3F46]">·</span>
                              <span className="px-2 py-0.5 rounded-full bg-[#D9FF3D]/10 border border-[#D9FF3D]/30 text-[#D9FF3D] text-[10px] font-semibold tracking-wide">
                                Sekarang
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed max-w-4xl font-body">
                      {edu.description}
                    </p>
                  )}

                  {/* Topics Chips */}
                  {edu.topics && edu.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {edu.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-[#18181B] border border-[#232326] text-xs font-mono text-[#E4E4E7] group-hover:border-[#3F3F46] transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Location */}
                  {edu.location && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#71717A] pt-4 border-t border-[#232326]/60">
                      <MapPin className="w-3.5 h-3.5 text-[#D9FF3D]" />
                      <span>{edu.location}</span>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
