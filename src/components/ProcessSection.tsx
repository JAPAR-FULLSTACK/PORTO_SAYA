import React from 'react';
import { 
  FileSearch, 
  LayoutTemplate, 
  Network, 
  BrainCircuit, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const { howIWork } = PORTFOLIO_DATA;

  // Mapping Ikon & Warna Modern untuk 6 Langkah
  const stepStyles = [
    { 
      icon: FileSearch, 
      color: "text-[#D9FF3D]", 
      bg: "bg-[#D9FF3D]/10", 
      border: "group-hover:border-[#D9FF3D]/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(217,255,61,0.15)]"
    },
    { 
      icon: LayoutTemplate, 
      color: "text-[#60A5FA]", 
      bg: "bg-[#60A5FA]/10", 
      border: "group-hover:border-[#60A5FA]/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]"
    },
    { 
      icon: Network, 
      color: "text-[#A78BFA]", 
      bg: "bg-[#A78BFA]/10", 
      border: "group-hover:border-[#A78BFA]/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]"
    },
    { 
      icon: BrainCircuit, 
      color: "text-[#4ADE80]", 
      bg: "bg-[#4ADE80]/10", 
      border: "group-hover:border-[#4ADE80]/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]"
    },
    { 
      icon: ShieldCheck, 
      color: "text-[#FB923C]", 
      bg: "bg-[#FB923C]/10", 
      border: "group-hover:border-[#FB923C]/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(251,146,60,0.15)]"
    },
    { 
      icon: Rocket, 
      color: "text-[#F472B6]", 
      bg: "bg-[#F472B6]/10", 
      border: "group-hover:border-[#F472B6]/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(244,114,182,0.15)]"
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#0E0E10] border-t border-[#232326] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-[#232326] pb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#D9FF3D] mb-2">
              // METODOLOGI KERJA
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight">
              BAGAIMANA SAYA BEKERJA (01 → 06)
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md font-body">
            Alur kerja terstruktur dari perumusan spesifikasi teknis (PRD), perancangan UI/UX, hingga proses rilis dan monitoring. Memastikan hasil akhir yang fungsional, aman, dan siap digunakan.
          </p>
        </div>

        {/* Grid 3 Kolom (Agar 6 kartu seimbang: 3 di atas, 3 di bawah) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {howIWork.map((step, idx) => {
            // Ambil style berdasarkan index (jika langkah lebih dari 6, akan berulang dari awal)
            const style = stepStyles[idx % stepStyles.length];
            const IconComponent = style.icon;

            return (
              <div
                key={step.step}
                className={`p-6 rounded-2xl bg-[#121214] border border-[#232326] transition-all duration-300 flex flex-col justify-between group ${style.border} ${style.glow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Nomor Langkah */}
                    <span className="font-display font-bold text-2xl text-[#3F3F46] group-hover:text-[#F4F4F5] transition-colors">
                      {step.step}
                    </span>
                    
                    {/* Ikon Modern dengan efek Glow */}
                    <div className={`p-2.5 rounded-xl border border-[#232326] transition-all duration-300 group-hover:scale-110 ${style.bg}`}>
                      <IconComponent className={`w-5 h-5 ${style.color}`} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Tagline & Title */}
                  <div className={`text-[10px] sm:text-xs font-mono mb-1.5 uppercase tracking-wider ${style.color}`}>
                    {step.tagline}
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#F4F4F5] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 font-body">
                    {step.description}
                  </p>
                </div>

                {/* Output Utama */}
                <div className="pt-4 border-t border-[#232326]/80">
                  <div className="text-[10px] font-mono text-[#71717A] uppercase mb-2 tracking-wider">
                    Output Utama:
                  </div>
                  <div className="space-y-2">
                    {step.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs font-mono text-[#E4E4E7]">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${style.color}`} />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};