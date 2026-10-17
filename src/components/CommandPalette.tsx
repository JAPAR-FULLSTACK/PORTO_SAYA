import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, Briefcase, Sparkles, Mail, Phone, ExternalLink, RefreshCw, X, ArrowRight, BookOpen } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenPRD: () => void;
  onOpenCV: () => void;
  onReplayIntro: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigasi' | 'Proyek' | 'Aksi Cepat' | 'Dokumentasi';
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenPRD,
  onOpenCV,
  onReplayIntro,
  onShowToast,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = [
    
    {
      id: 'act-cv',
      title: 'Unduh / Pratinjau Curriculum Vitae (PDF)',
      category: 'Aksi Cepat',
      shortcut: 'CV',
      icon: <FileText className="w-4 h-4 text-[#D9FF3D]" />,
      action: () => {
        onOpenCV();
        onClose();
      }
    },
    {
      id: 'act-draft-email',
      title: 'Kirim Format Draft Email Langsung (Buka Gmail / Mail Client)',
      category: 'Aksi Cepat',
      shortcut: 'MAIL',
      icon: <Mail className="w-4 h-4 text-[#D9FF3D]" />,
      action: () => {
        window.location.href = `mailto:raffa.dian0869@gmail.com?subject=${encodeURIComponent('Inquiry Proyek / Tawaran Magang Frontend Engineer')}&body=${encodeURIComponent('Halo Muhammad Raffadian Pratama,\n\nSaya tertarik dengan portofolio Anda dan ingin mendiskusikan peluang kerja sama:\n- Nama:\n- Perusahaan / Institusi:\n- Kebutuhan:\n\nSalam.')}`;
        onShowToast('Membuka aplikasi email dengan format draft terisi...', 'info');
        onClose();
      }
    },
    {
      id: 'act-email',
      title: 'Salin Email: raffa.dian0869@gmail.com',
      category: 'Aksi Cepat',
      shortcut: 'COPY',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: async () => {
        await copyToClipboard('raffa.dian0869@gmail.com');
        onShowToast('Email berhasil disalin ke clipboard: raffa.dian0869@gmail.com', 'success');
        onClose();
      }
    },
    {
      id: 'act-wa',
      title: 'Kirim Pesan WhatsApp (+62 881-4952-272)',
      category: 'Aksi Cepat',
      shortcut: 'CHAT',
      icon: <Phone className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.open('https://wa.me/6281234567890?text=Halo%20Raffa%2C%20saya%20tertarik%20dengan%20portofolio%20Anda', '_blank');
        onClose();
      }
    },
    {
      id: 'nav-about',
      title: 'Tentang Saya (Biografi Saya )',
      category: 'Navigasi',
      shortcut: 'ABOUT',
      icon: <FileText className="w-4 h-4 text-[#D9FF3D]" />,
      action: () => {
        onNavigate('about');
        onClose();
      }
    },
    {
      id: 'nav-education',
      title: 'Latar Belakang Pendidikan (SMK 1 Antartika, SMP, SD)',
      category: 'Navigasi',
      shortcut: 'EDU',
      icon: <BookOpen className="w-4 h-4 text-[#D9FF3D]" />,
      action: () => {
        onNavigate('education');
        onClose();
      }
    },
    {
      id: 'nav-projects',
      title: 'Lihat Project saya ( my project )',
      category: 'Navigasi',
      shortcut: 'PROJ',
      icon: <Briefcase className="w-4 h-4 text-[#A1A1AA]" />,
      action: () => {
        onNavigate('projects');
        onClose();
      }
    },
    {
      id: 'nav-exp',
      title: 'Riwayat Pengalaman Kerja & Magang (Work Experience)',
      category: 'Navigasi',
      shortcut: 'EXP',
      icon: <Briefcase className="w-4 h-4 text-[#A1A1AA]" />,
      action: () => {
        onNavigate('experience');
        onClose();
      }
    },
    {
      id: 'nav-principles',
      title: 'Prinsip Engineering (My prisip)',
      category: 'Navigasi',
      shortcut: 'CORE',
      icon: <Sparkles className="w-4 h-4 text-[#A1A1AA]" />,
      action: () => {
        onNavigate('principles');
        onClose();
      }
    },
    {
      id: 'nav-skills',
      title: 'Skill/keahlihan saya  (Skills Saya )',
      category: 'Navigasi',
      shortcut: 'SKILLS',
      icon: <Sparkles className="w-4 h-4 text-[#A1A1AA]" />,
      action: () => {
        onNavigate('skills');
        onClose();
      }
    },
    {
      id: 'nav-process',
      title: 'Alur Kerja (Bagaimana cara kerja saya )',
      category: 'Navigasi',
      shortcut: 'FLOW',
      icon: <ArrowRight className="w-4 h-4 text-[#A1A1AA]" />,
      action: () => {
        onNavigate('process');
        onClose();
      }
    },
    {
      id: 'act-intro',
      title: 'Kemabli ke awal (HOME)',
      category: 'Aksi Cepat',
      shortcut: 'BOOT',
      icon: <RefreshCw className="w-4 h-4 text-[#A1A1AA]" />,
      action: () => {
        onReplayIntro();
        onClose();
      }
    }
  ];

  const filteredCommands = commands.filter((cmd) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      (cmd.shortcut && cmd.shortcut.toLowerCase().includes(q))
    );
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl bg-[#121214] border border-[#232326] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-label="Pencarian Cepat Command Palette"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#232326]">
          <Search className="w-5 h-5 text-[#71717A] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Cari proyek, keahlian, atau aksi kontak..."
            className="w-full bg-transparent text-[#F4F4F5] placeholder-[#71717A] text-sm focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="text-[#71717A] hover:text-[#F4F4F5] p-1 rounded-md transition-colors"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-xs text-[#71717A] font-mono">
              Tidak ada hasil yang cocok dengan &quot;{query}&quot;
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#18181B] text-[#F4F4F5] border border-[#3F3F46]'
                      : 'text-[#A1A1AA] hover:bg-[#18181B]/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0">{cmd.icon}</div>
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-medium truncate">{cmd.title}</div>
                      <div className="text-[10px] text-[#71717A] font-mono">{cmd.category}</div>
                    </div>
                  </div>
                  {cmd.shortcut && (
                    <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-[#232326] text-[#A1A1AA]">
                      {cmd.shortcut}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#0A0A0B] border-t border-[#232326] flex items-center justify-between text-[11px] text-[#71717A] font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Pilih</span>
            <span>↵ Eksekusi</span>
            <span>ESC Tutup</span>
          </div>
          <span className="text-[#A1A1AA]">Raffa V24 Master Spec</span>
        </div>
      </div>
    </div>
  );
};
