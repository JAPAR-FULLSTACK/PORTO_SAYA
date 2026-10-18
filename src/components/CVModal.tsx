import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 print:bg-white print:p-0">
      <div className="bg-white w-full max-w-[850px] max-h-[95vh] rounded-xl flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 print:max-h-none print:border-none print:shadow-none print:rounded-none">
        
        {/* Controls Toolbar (hidden during print) */}
        <div className="no-print p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF3D]"></span>
            <span className="font-display font-bold text-sm text-white">
              CV Preview — {profile.name}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D9FF3D] text-black text-sm font-bold hover:bg-[#cbf72c] transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container (Two-Column Layout) */}
        <div className="flex-1 overflow-y-auto bg-white font-sans text-zinc-800 print-document select-text print:overflow-visible">
          <div className="flex flex-col md:flex-row min-h-full">
            
            {/* LEFT COLUMN (Sidebar) */}
            <div className="w-full md:w-[35%] bg-[#F3F4F6] p-6 sm:p-8 flex flex-col gap-6 print:w-[35%] print:bg-zinc-100">
              
              {/* Foto Profil */}
              <div className="w-full aspect-[3/4] bg-zinc-300 overflow-hidden border border-zinc-300 shadow-sm grayscale hover:grayscale-0 transition-all duration-300">
                <img src="data:image/jpeg;base64,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" alt={profile.name} className="w-full h-full object-cover" />
              </div>

              {/* Nama & Role */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-none mb-2 uppercase tracking-tight">
                  {profile.name}
                </h1>
                <p className="text-sm font-semibold text-zinc-600 uppercase tracking-widest">
                  {profile.role}
                </p>
              </div>

              {/* Kontak (Data Pribadi) */}
              <div className="text-sm text-zinc-700 space-y-3">
                <div className="font-bold text-zinc-900 border-b border-zinc-300 pb-1 uppercase tracking-wider text-xs mb-2">
                  Informasi Kontak
                </div>
                <div className="flex gap-2 items-start">
                  <Mail className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                  <span className="break-all">{profile.email}</span>
                </div>
                <div className="flex gap-2 items-start">
                  <Phone className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex gap-2 items-start">
                  <Github className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                  <span className="break-all">{profile.github}</span>
                </div>
              </div>

              {/* Keahlian (Skills) di Sidebar */}
              <div className="text-sm text-zinc-700">
                <div className="font-bold text-zinc-900 border-b border-zinc-300 pb-1 uppercase tracking-wider text-xs mb-3">
                  Keahlian Utama
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <strong className="block text-zinc-900 mb-1">Frontend</strong>
                    <span className="text-zinc-600">React, Next.js, TypeScript, Tailwind</span>
                  </div>
                  <div>
                    <strong className="block text-zinc-900 mb-1">Backend & DB</strong>
                    <span className="text-zinc-600">Node.js, C#, Python, Golang, Rust, PostgreSQL, Prisma, Supabase</span>
                  </div>
                  <div>
                    <strong className="block text-zinc-900 mb-1">Tools & Workflow</strong>
                    <span className="text-zinc-600">Git, GitHub, Cursor, Vercel, Netlify, n8n</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN (Main Content) */}
            <div className="w-full md:w-[65%] p-6 sm:p-8 flex flex-col gap-6 print:w-[65%]">
              
              {/* Tentang Saya */}
              <div>
                <h2 className="text-xl font-bold text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-3 uppercase tracking-wide">
                  Tentang Saya
                </h2>
                <p className="text-sm leading-relaxed text-zinc-700 text-justify">
                  {profile.bio}
                </p>
              </div>

              {/* Pengalaman Kerja */}
              <div>
                <h2 className="text-xl font-bold text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-4 uppercase tracking-wide">
                  Pengalaman Kerja
                </h2>
                <div className="space-y-5">
                  {experience.map((exp) => (
                    <div key={exp.id} className="text-sm">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                        <span className="font-bold text-zinc-900 text-base">{exp.role}</span>
                        <span className="text-zinc-500 font-mono text-xs font-semibold">{exp.period}</span>
                      </div>
                      <div className="text-zinc-700 font-medium text-xs mb-2">
                        {exp.company} <span className="text-zinc-400 mx-1">|</span> {exp.location}
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-1.5 text-zinc-600 text-xs">
                        {exp.highlights.map((hl, i) => (
                          <li key={i} className="leading-relaxed pl-1">{hl}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pendidikan */}
              <div>
                <h2 className="text-xl font-bold text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-3 uppercase tracking-wide">
                  Pendidikan
                </h2>
                <div className="text-sm">
                  <div className="font-bold text-zinc-900">{profile.institution}</div>
                  <div className="text-zinc-600 text-xs mt-1">Jurusan Rekayasa Perangkat Lunak (RPL)</div>
                </div>
              </div>

              {/* Proyek Unggulan (Menggantikan bagian Referensi di gambar) */}
              <div>
                <h2 className="text-xl font-bold text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-4 uppercase tracking-wide">
                  Proyek Unggulan
                </h2>
                <div className="space-y-3">
                  {projects.slice(0, 3).map((p) => (
                    <div key={p.id} className="text-sm">
                      <div className="font-bold text-zinc-900">{p.title}</div>
                      <div className="text-xs text-zinc-600 leading-relaxed mt-1">{p.summary}</div>
                      <div className="text-xs font-mono text-zinc-800 font-medium mt-1">
                        <span className="text-zinc-500">Hasil:</span> {p.outcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sertifikasi */}
              <div>
                <h2 className="text-xl font-bold text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-3 uppercase tracking-wide">
                  Sertifikasi & Prestasi
                </h2>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-zinc-700">
                  {certifications.map((c) => (
                    <li key={c.id} className="pl-1">
                      <strong>{c.title}</strong> — {c.issuer} <span className="text-zinc-500">({c.issueDate})</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};