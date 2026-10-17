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
                  src={photo}
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
