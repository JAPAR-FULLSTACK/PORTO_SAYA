import React from 'react';

interface PRDViewerProps {
  onBackToPortfolio: () => void;
  onShowToast: (text: string, type?: 'success' | 'info' | 'error') => void;
}

export const PRDViewer: React.FC<PRDViewerProps> = ({ onBackToPortfolio }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F4F4F5] p-6 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBackToPortfolio}
          className="mb-8 px-4 py-2 rounded-lg bg-[#18181B] border border-[#232326] text-xs font-mono text-[#D9FF3D] hover:border-[#D9FF3D] transition-colors"
        >
          &larr; Kembali ke Portofolio
        </button>
        <h1 className="text-3xl font-bold font-display mb-4">PRD Studio &amp; Dokumentasi</h1>
        <p className="text-sm text-[#A1A1AA] mb-6">Dokumen spesifikasi produk dan rancangan teknis portofolio.</p>
        <div className="p-6 rounded-2xl bg-[#121214] border border-[#232326] font-mono text-xs text-[#E4E4E7] space-y-3">
          <div>Status: ✅ FINAL — LOCKED FOR IMPLEMENTATION</div>
          <div>Cakupan: Arsitektur Sistem, Desain Tokens, Performa, dan Pengalaman Kerja &amp; Pendidikan.</div>
        </div>
      </div>
    </div>
  );
};
