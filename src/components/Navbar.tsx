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
              <img src={photo} alt="Raffa" className="w-full h-full object-cover" />
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