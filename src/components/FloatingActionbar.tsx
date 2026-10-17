import React, { useState } from 'react';
import { Command, FileText, Mail, X } from 'lucide-react';

interface FloatingActionBarProps {
  onOpenCommand: () => void;
  onOpenCV: () => void;
  onOpenEmail: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  onOpenCommand,
  onOpenCV,
  onOpenEmail,
}) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('raffa_floating_bar_closed') !== 'true';
    }
    return true;
  });

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('raffa_floating_bar_closed', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-[#121214]/95 backdrop-blur-md border border-[#232326] rounded-full shadow-2xl">
        
        {/* Status Indikator */}
        <div className="flex items-center gap-2 pl-1 pr-1 sm:pr-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ADE80]"></span>
          </span>
          <span className="text-xs font-mono text-[#F4F4F5] hidden sm:inline-block">
            Tersedia untuk Kerja
          </span>
        </div>

        {/* Garis Pemisah */}
        <div className="w-[1px] h-5 bg-[#232326] hidden sm:block"></div>

        {/* Tombol Email */}
        <button
          type="button"
          onClick={onOpenEmail}
          className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors cursor-pointer px-1.5 sm:px-2 py-1"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline-block">Kirim Email</span>
        </button>

        {/* Tombol CV */}
        <button
          type="button"
          onClick={onOpenCV}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D9FF3D] text-[#0A0A0B] text-xs font-bold font-mono hover:bg-[#cbf72c] transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
        >
          <FileText className="w-4 h-4" />
          <span>CV</span>
        </button>

        {/* Tombol Command Palette */}
        <button
          type="button"
          onClick={onOpenCommand}
          className="p-1.5 text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors cursor-pointer"
          title="Buka Command Palette (⌘K)"
        >
          <Command className="w-4 h-4" />
        </button>

        {/* 🔥 TOMBOL CLOSE (X) 🔥 */}
        <button
          type="button"
          onClick={handleClose}
          className="ml-1 p-1.5 rounded-full text-[#71717A] hover:text-[#EF4444] hover:bg-[#232326] transition-all cursor-pointer"
          title="Tutup Menu"
        >
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
