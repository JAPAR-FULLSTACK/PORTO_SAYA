import React from 'react';
import { 
  FileSearch, 
  ShieldAlert, 
  Fingerprint, 
  BrainCircuit, 
  Activity 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PrinciplesSection: React.FC = () => {
  const { principles } = PORTFOLIO_DATA;

  // Ikon diganti dengan ikon yang lebih relevan dengan 5 Prinsip baru Anda
  const icons = [
    <FileSearch key="1" className="w-5 h-5 text-[#D9FF3D]" strokeWidth={1.5} />,    // Spec-Driven
    <ShieldAlert key="2" className="w-5 h-5 text-[#D9FF3D]" strokeWidth={1.5} />,   // Scope Discipline
    <Fingerprint key="3" className="w-5 h-5 text-[#D9FF3D]" strokeWidth={1.5} />,   // Meticulous QA
    <BrainCircuit key="4" className="w-5 h-5 text-[#D9FF3D]" strokeWidth={1.5} />,  // AI Integration
    <Activity key="5" className="w-5 h-5 text-[#D9FF3D]" strokeWidth={1.5} />,      // Empirical Performance
  ];

  return (
    <section id="principles" className="py-24 md:py-32 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-3">
              <h2>PRINSIP SAYA </h2>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F4F4F5] tracking-tight leading-tight">
              5 Prinsip Saya <br className="hidden md:block"/> 
              <span className="text-[#A1A1AA]">Dalam project yang saya kerjakan.</span>
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-sm font-body leading-relaxed border-l border-[#232326] pl-4">
            Komitmen fundamental yang membedakan pendekatan saya dalam merancang sistem, mengelola kode, dan memvalidasi hasil akhir.
          </p>
        </div>

        {/* Grid List - Clean & Structured */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Principle (Spec-Driven) - Spanning 12 columns on mobile, 12 on desktop for the first one */}
          {principles.slice(0, 1).map((pr) => (
            <div 
              key={pr.number}
              className="lg:col-span-12 group relative p-8 md:p-10 rounded-2xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#18181B] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1 flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A0A0B] border border-[#232326] group-hover:border-[#D9FF3D]/30 transition-colors">
                  {icons[0]}
                </div>
                
                <div className="md:col-span-7">
                  <div className="font-mono text-xs text-[#71717A] mb-2">PRINSIP {pr.number}</div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-[#F4F4F5] mb-4">
                    {pr.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed">
                    {pr.description}
                  </p>
                </div>

                <div className="md:col-span-4 md:border-l border-[#232326] md:pl-8 flex flex-col justify-center h-full">
                  <div className="text-[10px] font-mono text-[#71717A] uppercase mb-2">Target Output</div>
                  <div className="text-sm font-mono text-[#D9FF3D] bg-[#0A0A0B] inline-block px-3 py-2 rounded-lg border border-[#232326]">
                    {pr.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Remaining 4 Principles (Grid 2x2) */}
          {principles.slice(1).map((pr, index) => (
            <div 
              key={pr.number}
              className="lg:col-span-6 group relative p-6 md:p-8 rounded-2xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0A0A0B] border border-[#232326] group-hover:border-[#D9FF3D]/30 transition-colors">
                    {icons[index + 1]}
                  </div>
                  <span className="font-mono text-xs text-[#71717A]">PRINSIP {pr.number}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#F4F4F5] mb-3">
                  {pr.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8">
                  {pr.description}
                </p>
              </div>

              <div className="pt-5 border-t border-[#232326] flex items-center justify-between gap-3">
                <div className="text-[10px] font-mono text-[#71717A] uppercase">Target Output</div>
                <div className="text-xs font-mono text-[#D9FF3D] text-right">
                  {pr.metric}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};