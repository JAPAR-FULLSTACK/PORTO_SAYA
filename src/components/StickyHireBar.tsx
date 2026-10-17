import React, { useState, useEffect } from 'react';
import { Copy, Check, FileDown, Command, Mail } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface StickyHireBarProps {
  onOpenCV: () => void;
  onOpenCommand: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const StickyHireBar: React.FC<StickyHireBarProps> = ({
  onOpenCV,
  onOpenCommand,
  onShowToast,
}) => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercentage = window.scrollY / scrollHeight;
      // Show after 25-30% scroll
      setVisible(scrollPercentage > 0.25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard('raffa.dian0869@gmail.com');
    if (success) {
      setCopied(true);
      onShowToast('Email berhasil disalin: raffa.dian0869@gmail.com', 'success');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-lg w-[92%] sm:w-auto animate-in slide-in-from-bottom-5 duration-300 no-print">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-[#121214]/90 backdrop-blur-md border border-[#232326] shadow-2xl">
        {/* Availability Dot & Text */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
          </span>
          <span className="text-xs font-mono text-[#F4F4F5] hidden sm:inline">
            Tersedia untuk Kerja
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Direct Draft Email Button */}
          <a
            href={`mailto:raffa.dian0869@gmail.com?subject=${encodeURIComponent('Inquiry Proyek / Tawaran Magang Frontend Engineer')}&body=${encodeURIComponent('Halo Raffa,\n\nSaya tertarik dengan portofolio Anda dan ingin mendiskusikan peluang kerja sama:\n- Nama:\n- Perusahaan / Institusi:\n- Kebutuhan:\n\nSalam.')}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#18181B] hover:bg-[#232326] text-xs font-mono text-[#E4E4E7] border border-[#232326] transition-colors cursor-pointer"
            title="Kirim Draft Email"
          >
            <Mail className="w-3.5 h-3.5 text-[#D9FF3D]" />
            <span>Kirim Email</span>
          </a>

          {/* Download CV */}
          <button
            onClick={onOpenCV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D9FF3D] hover:bg-[#cbf72c] text-xs font-mono font-bold text-[#0A0A0B] transition-colors cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Command Palette Icon */}
          <button
            onClick={onOpenCommand}
            className="p-1.5 rounded-full text-[#71717A] hover:text-[#F4F4F5] hover:bg-[#18181B] transition-colors cursor-pointer hidden md:flex"
            title="Command Palette (Cmd+K)"
          >
            <Command className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
