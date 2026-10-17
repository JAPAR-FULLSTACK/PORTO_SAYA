import React from 'react';
import { Quote, UserCheck, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-[#232326] pb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#D9FF3D] mb-2">
              // TESTIMONIAL
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight">
              TESTIMONI SAYA
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md font-body">
            
          </p>
        </div>

        {/* Testimonials Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-[#18181B] text-[#D9FF3D]">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18181B] text-[#71717A] border border-[#232326]">
                    {test.relation}
                  </span>
                </div>

                <p className="text-sm text-[#E4E4E7] leading-relaxed mb-6 font-body italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#232326] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#18181B] border border-[#232326] flex items-center justify-center font-display font-bold text-xs text-[#D9FF3D]">
                  {test.authorName.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-sm text-[#F4F4F5] truncate">
                    {test.authorName}
                  </div>
                  <div className="text-xs text-[#A1A1AA] font-mono truncate">
                    {test.authorRole}
                  </div>
                  <div className="text-[11px] text-[#71717A] font-mono truncate">
                    {test.authorCompany}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
