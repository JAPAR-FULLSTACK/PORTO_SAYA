import React, { useState, useEffect } from 'react';
import { Command, FileDown, Menu, X } from 'lucide-react';
import { useProfilePhoto } from '../utils/photoStorage';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenCV: () => void;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommand,
  onOpenCV,
  onNavigate,
}) => {
  const [timeStr, setTimeStr] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { photo } = useProfilePhoto();

  // 1. LOGIKA KEYBOARD SHORTCUT (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cek jika tombol Cmd (Mac) atau Ctrl (Windows) + K ditekan
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault(); // Mencegah browser membuka search bar bawaan
        onOpenCommand();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenCommand]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format WIB (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeStr(`${now.toLocaleTimeString('id-ID', options)} WIB`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'about', label: 'Tentang' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'projects', label: 'Proyek' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'principles', label: 'Prinsip' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'process', label: 'Alur Kerja' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0B]/85 backdrop-blur-md border-b border-[#232326] py-3 shadow-xl'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Top Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#232326]/40 overflow-hidden pointer-events-none">
        <div 
          className="h-full bg-[#D9FF3D] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(217,255,61,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Monogram & Availability */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('hero')}
            className="group flex items-center gap-2.5 text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#121214] border border-[#232326] group-hover:border-[#D9FF3D] flex items-center justify-center transition-colors overflow-hidden shrink-0">
              <img src="data:image/jpeg;base64,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" alt="Raffa" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-[#F4F4F5] tracking-tight group-hover:text-[#D9FF3D] transition-colors flex items-center gap-1.5">
                RAFFA OPSDEV
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-[#A1A1AA] font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
                </span>
                {/* Teks diperbaiki agar lebih profesional */}
                <span>TERSEDIA UNTUK KERJA</span>
              </div>
            </div>
          </button>

          {/* Time Badge - Desktop */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121214] border border-[#232326] text-[11px] font-mono text-[#71717A]">
            {/* Spasi berlebih dihapus */}
            <span>BUDURAN, SIDOARJO, JATIM</span>
            <span className="text-[#3F3F46]">·</span>
            <span className="text-[#A1A1AA]">{timeStr || '18:10:00 WIB'}</span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121214]/80 border border-[#232326] px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="px-3 py-1 text-xs text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#18181B] rounded-full transition-all cursor-pointer font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Actions (Cmd+K, Download CV) */}
        <div className="flex items-center gap-2.5">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#121214] border border-[#232326] text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-[#3F3F46] text-xs font-mono transition-all cursor-pointer"
            title="Buka Command Palette (Cmd + K / Ctrl + K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="hidden md:inline">K</span>
          </button>

          {/* Download CV Action */}
          <button
            onClick={onOpenCV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D9FF3D] text-[#0A0A0B] font-medium text-xs hover:bg-[#cbf72c] transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Unduh CV</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#121214] border border-[#232326] text-[#A1A1AA] hover:text-[#F4F4F5]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0B] border-b border-[#232326] px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#232326]">
            <span className="text-xs font-mono text-[#71717A]">{timeStr}</span>
            <span className="text-xs font-mono text-[#4ADE80]">● Siap Magang / Freelance</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-xs text-left text-[#A1A1AA] hover:text-[#F4F4F5] bg-[#121214] rounded-lg border border-[#232326]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};