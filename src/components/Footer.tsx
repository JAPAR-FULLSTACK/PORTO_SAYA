import React from 'react';
import { Terminal, Github, Mail, Phone, BookOpen, RefreshCw, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (id: string) => void;
  onOpenPRD: () => void;
  onOpenCV: () => void;
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCV,
  onReplayIntro,
}) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#232326] bg-[#0E0E10] text-[#71717A] text-xs font-mono py-16 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Identity & School */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-[#F4F4F5] font-display font-bold text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF3D]"></span>
              <span>RAFFA.DEVOPS</span>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed font-body">
              {profile.name} &mdash; Siswa Rekayasa Perangkat Lunak di SMK 1 Antartika Sidoarjo &amp; Frontend UI Engineer.
            </p>
            <div className="text-[11px] text-[#71717A]">
              Buduran, Sidoarjo, Jawa Timur, Indonesia
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <div className="text-[#F4F4F5] text-xs font-semibold uppercase tracking-wider mb-3">
              Navigasi Halaman
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#D9FF3D] transition-colors cursor-pointer">
                  Tentang Saya (About Me)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-[#D9FF3D] transition-colors cursor-pointer">
                  Proyek Unggulan (Projects)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experience')} className="hover:text-[#D9FF3D] transition-colors cursor-pointer">
                  Pengalaman Kerja (Experience)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('principles')} className="hover:text-[#D9FF3D] transition-colors cursor-pointer">
                  5 Prinsip Engineering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skills')} className="hover:text-[#D9FF3D] transition-colors cursor-pointer">
                  Matriks Keahlian &amp; Bukti
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-[#D9FF3D] transition-colors cursor-pointer">
                  Alur Kerja (How I Work)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Documents & Tools */}
          <div className="space-y-2">
            <div className="text-[#F4F4F5] text-xs font-semibold uppercase tracking-wider mb-3">
              Dokumen &amp; Perangkat
            </div>
            <ul className="space-y-2">
              
               
              <li>
                <button
                  onClick={onOpenCV}
                  className="hover:text-[#D9FF3D] transition-colors cursor-pointer"
                >
                  Curriculum Vitae (PDF Resume)
                </button>
              </li>
              <li>
                <button
                  onClick={onReplayIntro}
                  className="hover:text-[#D9FF3D] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Putar Ulang Boot Intro</span>
                </button>
              </li>
              <li>
                <a
                  href="-"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D9FF3D] transition-colors"
                >
                  
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="space-y-2">
            <div className="text-[#F4F4F5] text-xs font-semibold uppercase tracking-wider mb-3">
              Kontak Langsung
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-[#D9FF3D] transition-colors truncate block"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D9FF3D] transition-colors"
                >
                  WhatsApp: {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D9FF3D] transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>https://github.com/JAPAR-FULLSTACK </span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#232326] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; 2026 {profile.name}   STUDENT IN ANTARTIKA 1 SIDOARJO.
          </div>

          <div className="flex items-center gap-4">
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#A1A1AA] hover:text-[#D9FF3D] transition-colors cursor-pointer"
            >
              <span>Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
