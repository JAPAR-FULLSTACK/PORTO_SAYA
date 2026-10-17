import React from 'react';
import { Award, GraduationCap, CheckCircle, Layers } from 'lucide-react';

export const EducationStrip: React.FC = () => {
  // 1. Data dipisah dari UI agar lebih bersih
  const credentials = [
    { 
      label: "SMK 1 Antartika Sidoarjo", 
      sub: "Rekayasa Perangkat Lunak (RPL)", 
      Icon: GraduationCap, 
      color: "text-[#D9FF3D]", // Neon Yellow
      href: "#education" // Opsional: arahkan ke section pendidikan
    },
    { 
      label: "Dicoding Indonesia", 
      sub: "Front-End Web Expert Certified", 
      Icon: Award, 
      color: "text-[#4ADE80]", // Green
      href: "#" // Ganti dengan link sertifikat Dicoding Anda
    },
    { 
      label: "Lighthouse CI Certified", 
      sub: "Performance ≥ 98 / 100", 
      Icon: CheckCircle, 
      color: "text-[#D9FF3D]",
      href: "#"
    },
    { 
      label: "Tailwind CSS v4 & React 19", 
      sub: "Modern Component Architecture", 
      Icon: Layers, 
      color: "text-[#60A5FA]", // Blue
      href: "#skills"
    },
  ];

  return (
    <section className="border-y border-[#232326] bg-[#0E0E10] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] mb-4 text-center sm:text-left">
          // Akademik &amp; Prestasi
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {credentials.map((cred, idx) => {
            const IconComponent = cred.Icon;
            
            return (
              <a 
                key={idx} 
                href={cred.href}
                className="group flex items-center gap-3 p-3 rounded-xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Ikon dengan animasi membesar saat di-hover */}
                <div className={`p-2 rounded-lg bg-[#18181B] shrink-0 group-hover:scale-110 transition-transform duration-300 ${cred.color}`}>
                  <IconComponent className="w-4 h-4" strokeWidth={2.5} />
                </div>

                {/* Teks */}
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-[#F4F4F5] truncate font-display group-hover:text-[#D9FF3D] transition-colors">
                    {cred.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#A1A1AA] truncate font-mono mt-0.5">
                    {cred.sub}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};