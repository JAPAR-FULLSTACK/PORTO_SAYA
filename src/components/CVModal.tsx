import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, ExternalLink, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoStorage';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { photo } = useProfilePhoto();
  if (!isOpen) return null;

  const { profile, experience, skills, certifications, projects } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121214] border border-[#232326] w-full max-w-4xl max-h-[92vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Controls Toolbar (hidden during print) */}
        <div className="no-print p-4 bg-[#0E0E10] border-b border-[#232326] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF3D]"></span>
            <span className="font-display font-bold text-sm text-[#F4F4F5]">
              Curriculum Vitae — Muhammad Raffadian Pratama
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D9FF3D] text-[#0A0A0B] text-xs font-mono font-bold hover:bg-[#cbf72c] transition-colors cursor-pointer"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#71717A] hover:text-[#F4F4F5] hover:bg-[#18181B] transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-12 bg-white text-zinc-900 font-sans print-document select-text">
          
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-20 rounded-md overflow-hidden bg-zinc-100 border border-zinc-300 shrink-0">
                  <img src={photo} alt={profile.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-display">
                    {profile.name}
                  </h1>
                  <p className="text-sm font-semibold text-zinc-700 mt-0.5">
                    {profile.role}
                  </p>
                  <p className="text-xs text-zinc-600">
                    {profile.institution}
                  </p>
                </div>
              </div>

              <div className="text-xs text-zinc-600 font-mono space-y-0.5 sm:text-right">
                <div>Email: {profile.email}</div>
                <div>Telepon: {profile.phone}</div>
                <div>Lokasi: {profile.location}</div>
                <div>GitHub: github.com/raffadian</div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
              Ringkasan Profesional
            </h2>
            <p className="text-xs leading-relaxed text-zinc-700">
              {profile.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-3 font-mono">
              Pengalaman Kerja &amp; Kepemimpinan
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-zinc-900">{exp.role}</span>
                    <span className="text-zinc-600 font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <div className="text-zinc-700 font-medium text-[11px] mb-1.5">{exp.company} · {exp.location}</div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 pl-1">
                    {exp.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-3 font-mono">
              Proyek Rekayasa Unggulan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="p-2.5 rounded border border-zinc-200 bg-zinc-50">
                  <div className="font-bold text-zinc-900">{p.title}</div>
                  <div className="text-[11px] text-zinc-600 mt-0.5">{p.summary}</div>
                  <div className="text-[11px] font-mono text-zinc-800 font-medium mt-1">
                    Hasil: {p.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
                Matriks Keahlian Teknis
              </h2>
              <div className="space-y-1 text-xs text-zinc-700">
                <div><strong>Frontend:</strong> React 19, Next.js, TypeScript, Tailwind CSS v4, HTML5/CSS3</div>
                <div><strong>Performance:</strong> Core Web Vitals (LCP, FID/INP, CLS), Lighthouse 98+, Tree-Shaking</div>
                <div><strong>Tools &amp; Workflow:</strong> Git, GitHub, Vite, Headless CMS, RESTful APIs, Vercel</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
                Sertifikasi &amp; Prestasi
              </h2>
              <div className="space-y-1 text-xs text-zinc-700">
                {certifications.map((c) => (
                  <div key={c.id}>
                    • <strong>{c.title}</strong> — {c.issuer} ({c.issueDate})
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
