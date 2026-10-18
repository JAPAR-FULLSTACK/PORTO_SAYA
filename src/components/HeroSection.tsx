import React, { useState } from 'react';
import { ArrowDown, Copy, Check, FileDown, User, Sparkles, MapPin, ExternalLink, ArrowRight, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { copyToClipboard } from '../utils/clipboard';
import { useProfilePhoto } from '../utils/photoStorage';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenCV,
  onShowToast,
}) => {
  const { profile } = PORTFOLIO_DATA;
  const { photo } = useProfilePhoto();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(profile.email);
    if (success) {
      setCopiedEmail(true);
      onShowToast(`Email tersalin: ${profile.email}`, 'success');
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      onShowToast('Gagal menyalin email', 'error');
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-subtle">
      {/* Background subtle radial illumination, no neon clutter */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D9FF3D]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Actions (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Friendly Availability Bar */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121214] border border-[#232326]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ADE80]"></span>
              </span>
              <span className="text-xs font-mono text-[#E4E4E7]">
                {profile.availabilityNote}
              </span>
            </div>

            {/* Title & Identity */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-[#D9FF3D] uppercase">
                // SOFTWARE ENGINEERING STUDENT &amp; <strong>FULLSTACK DEVELOPER</strong>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F4F4F5] leading-[1.08]">
                MUHAMMAD RAFFADIAN PRATAMA
              </h1>
              <p className="font-display font-medium text-lg sm:text-2xl text-[#A1A1AA] pt-1">
                Siswa kelas X RPL di <span className="text-[#F4F4F5]">SMK 1 Antartika Sidoarjo</span>
              </p>
            </div>

            {/* 1-Sentence Friendly Value Proposition */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl leading-relaxed font-body">
              {profile.tagline}
            </p>

            {/* Direct Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Primary Action */}
              <button
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D9FF3D] text-[#0A0A0B] font-display font-bold text-sm tracking-tight hover:bg-[#cbf72c] transition-all cursor-pointer shadow-lg shadow-[#D9FF3D]/10 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Lihat Project saya </span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Direct Draft Email Action */}
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent('Inquiry Proyek / Tawaran Magang Frontend Engineer')}&body=${encodeURIComponent(`Halo Muhammad Raffadian Pratama,\n\nSaya tertarik dengan portofolio Anda dan ingin mendiskusikan peluang kerja sama:\n- Nama:\n- Perusahaan / Institusi:\n- Kebutuhan Proyek / Tawaran:\n\nSalam.`)}`}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#121214] border border-[#232326] hover:border-[#D9FF3D]/60 text-[#F4F4F5] text-sm font-mono transition-all cursor-pointer hover:bg-[#18181B]"
                title="Buka aplikasi email langsung dengan format draft siap kirim"
              >
                <Mail className="w-4 h-4 text-[#D9FF3D]" />
                <span>Format Draft Email</span>
              </a>

              {/* Zero Friction Email Copy Action */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] text-[#A1A1AA] hover:text-[#F4F4F5] text-sm font-mono transition-all cursor-pointer hover:bg-[#18181B]"
                title="Salin alamat email ke clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#4ADE80]" />
                    <span className="text-[#4ADE80]">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#71717A]" />
                    <span>Salin</span>
                  </>
                )}
              </button>

              {/* About Me Trigger Button */}
              <button
                onClick={() => onNavigate('about')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] text-[#A1A1AA] hover:text-[#F4F4F5] text-sm font-mono transition-all cursor-pointer hover:bg-[#18181B]"
              >
                <User className="w-4 h-4 text-[#D9FF3D]" />
                <span>Tentang Saya</span>
              </button>
            </div>

            {/* Micro Specs Strip (5-second proof for Tech Leads) */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#232326]/80 text-xs font-mono">
              <div className="bg-[#121214]/70 border border-[#232326] p-3 rounded-xl">
                <div className="text-[#71717A] text-[10px] uppercase">Lighthouse Avg</div>
                <div className="text-[#D9FF3D] font-bold text-base mt-0.5">{profile.stats.lighthouseAverage}/100</div>
                <div className="text-[10px] text-[#A1A1AA]">5 Proyek Klien</div>
              </div>
              <div className="bg-[#121214]/70 border border-[#232326] p-3 rounded-xl">
                <div className="text-[#71717A] text-[10px] uppercase">Pengurangan Bundle</div>
                <div className="text-[#4ADE80] font-bold text-base mt-0.5">-{profile.stats.bundleSavings}</div>
                <div className="text-[10px] text-[#A1A1AA]">Tree-Shaking &amp; CSS</div>
              </div>
              <div className="bg-[#121214]/70 border border-[#232326] p-3 rounded-xl">
                <div className="text-[#71717A] text-[10px] uppercase">Respon Kerja</div>
                <div className="text-[#F4F4F5] font-bold text-base mt-0.5">{profile.stats.responseTime}</div>
                <div className="text-[10px] text-[#A1A1AA]">WhatsApp / Email</div>
              </div>
              <div className="bg-[#121214]/70 border border-[#232326] p-3 rounded-xl">
                <div className="text-[#71717A] text-[10px] uppercase">Standar Build</div>
                <div className="text-[#D9FF3D] font-bold text-base mt-0.5">Modern &amp; Elegean </div>
                <div className="text-[10px] text-[#A1A1AA]">User &amp; Friendly</div>
              </div>
            </div>

          </div>

          {/* Right Column: Raffa's Photo Showcase Card (4 Cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div 
              onClick={() => onNavigate('about')}
              className="group cursor-pointer p-3 rounded-2xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] transition-all duration-300 max-w-xs w-full shadow-2xl relative"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#18181B] border border-[#27272a]">
                <img
                  src="data:image/jpeg;base64,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"
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating status tag */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#0A0A0B]/85 backdrop-blur-sm border border-[#232326] text-[10px] font-mono text-[#E4E4E7] flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
                  <span>Raffa Pratama</span>
                </div>

                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-[#0A0A0B]/85 backdrop-blur-sm border border-[#232326] text-[10px] font-mono text-[#D9FF3D] group-hover:bg-[#D9FF3D] group-hover:text-[#0A0A0B] transition-colors flex items-center gap-1">
                  <span>Profil &amp; Foto</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Caption */}
              <div className="pt-3 px-1 text-left">
                <div className="font-display font-bold text-sm text-[#F4F4F5] group-hover:text-[#D9FF3D] transition-colors">
                  Muhammad Raffadian Pratama
                </div>
                <div className="text-[11px] font-mono text-[#71717A] mt-0.5">
                  SMK 1 Antartika Sidoarjo (RPL)
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
