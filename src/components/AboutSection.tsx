import React, { useState, useRef } from 'react';
import { Camera, Upload, Trash2, Check, Sparkles, MapPin, GraduationCap, Heart, Terminal, Coffee, Layers, Compass, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoStorage';

interface AboutSectionProps {
  onOpenCV: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV, onShowToast }) => {
  const { profile } = PORTFOLIO_DATA;
  const { photo, savePhoto, resetPhoto, isCustom } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState<'journey' | 'philosophy' | 'setup' | 'personal'>('journey');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      onShowToast('Mohon pilih file gambar (JPG, PNG, WebP)', 'error');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      onShowToast('Ukuran gambar maksimal 5MB', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        savePhoto(result);
        onShowToast('Foto profil Anda berhasil dipasang & tersimpan!', 'success');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    resetPhoto();
    onShowToast('Foto profil dikembalikan ke avatar default', 'info');
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0E0E10] border-t border-[#232326] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-[#232326] pb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#D9FF3D] mb-2">
              // TENTANG SAYA · BIOGRAFI &amp; PERSONALITAS
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight">
              Kehidupan saya &amp; kreasi saya 
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md font-body">
            Lebih bgaimana cara menghibur  diri sendiri dengan tenang  &mdash; mengenal cara nya menghadapi betina yang sangat galak
          </p>
        </div>

        {/* Content Layout: Photo & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait & Identity (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Photo Card with Fine Editorial Frame */}
            <div className="p-3 rounded-2xl bg-[#121214] border border-[#232326] relative group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#18181B] border border-[#27272a] flex items-center justify-center">
                <img
                  src={photo}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle Location & Status Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0A0A0B]/85 backdrop-blur-sm border border-[#232326] text-[11px] font-mono text-[#E4E4E7] flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3 h-3 text-[#D9FF3D]" />
                  <span> buduran, Sidoarjo, Jawa Timur</span>
                </div>

                {/* Photo Change Indicator */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0B]/90 backdrop-blur-md border border-[#3F3F46] hover:border-[#D9FF3D] text-xs font-mono text-[#F4F4F5] hover:text-[#D9FF3D] transition-all cursor-pointer shadow-lg"
                    title="Unggah foto asli Anda"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>{isCustom ? 'Ganti Foto' : 'Pasang Foto Saya'}</span>
                  </button>

                  {isCustom && (
                    <button
                      onClick={handleRemovePhoto}
                      className="p-1.5 rounded-lg bg-[#0A0A0B]/90 backdrop-blur-md border border-[#3F3F46] hover:border-[#EF4444] text-[#71717A] hover:text-[#EF4444] transition-all cursor-pointer shadow-lg"
                      title="Reset ke avatar default"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {/* Photo helper info */}
              <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span>Format: 4:5 Portrait High-Res</span>
                <span className="text-[#A1A1AA]">{isCustom ? 'Foto Kustom Aktif' : 'Default Avatar'}</span>
              </div>
            </div>

            {/* Quick Personal Attributes Card */}
            <div className="p-5 rounded-2xl bg-[#121214] border border-[#232326] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#232326]">
                <span className="text-[#71717A]">NAMA LENGKAP</span>
                <span className="text-[#F4F4F5] font-semibold">{profile.name}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#232326]">
                <span className="text-[#71717A]">SEKOLAH</span>
                <span className="text-[#F4F4F5]">SMK 1 Antartika Sidoarjo</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#232326]">
                <span className="text-[#71717A]">JURUSAN</span>
                <span className="text-[#D9FF3D]">Rekayasa Perangkat Lunak (RPL)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#232326]">
                <span className="text-[#71717A]">FOKUS SAYA </span>
                <span className="text-[#F4F4F5]">FULLSTACK  &amp; CYBERSECURITY </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#71717A]">STATUS</span>
                <span className="text-[#4ADE80] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"></span>
                  Siap bekerja  &amp; siap Panggilan 
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Story Tabs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Friendly Tab Selector (Not Pill Slop, Clean Segmented Controls) */}
            <div className="flex items-center gap-1.5 p-1 bg-[#121214] border border-[#232326] rounded-xl overflow-x-auto text-xs font-mono">
              <button
                onClick={() => setActiveTab('journey')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'journey'
                    ? 'bg-[#18181B] text-[#D9FF3D] font-bold border border-[#3F3F46] shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
                }`}
              >
                Cerita Singkat saya
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'philosophy'
                    ? 'bg-[#18181B] text-[#D9FF3D] font-bold border border-[#3F3F46] shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
                }`}
              >
                Filosofi saya
              </button>
              <button
                onClick={() => setActiveTab('setup')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'setup'
                    ? 'bg-[#18181B] text-[#D9FF3D] font-bold border border-[#3F3F46] shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
                }`}
              >
                Tools &amp; Setup Harian
              </button>
              <button
                onClick={() => setActiveTab('personal')}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'personal'
                    ? 'bg-[#18181B] text-[#D9FF3D] font-bold border border-[#3F3F46] shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
                }`}
              >
                Di Balik Layar
              </button>
            </div>

            {/* Tab 1: Cerita Singkat */}
            {activeTab === 'journey' && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#232326] space-y-4 text-sm text-[#A1A1AA] leading-relaxed font-body">
                <div className="text-xs font-mono uppercase text-[#D9FF3D] tracking-wider mb-1">
                  // AWAL MULA saya yaitu pada saat melakukan sebuah membuat suatu Program  bot telegram menggunakan device di hp &amp; pada saat itu lah saya tertarik pada it
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F5]">
                  &ldquo;error dalam suatu pengembangan menjadi  motivasi untuk memperbaik nya &rdquo;
                </h3>
                
                <p>
                  Perjalanan saya di dunia pemrograman dimulai dari Hp lewat termux  <strong>Di rumah </strong>. Ketika pertama kali belajar Rekayasa Perangkat Lunak (RPL), saya sering mengembangkan sebuah bebarapa website atau aplikasi 
                  Rasa penasaran  tentang error itu mendorong saya untuk mendalami bagaimana browser merender setiap elemen di layar. Saya mulai membedah <em>Critical Rendering Path</em>, <em>Core Web Vitals</em>, dan teknik pemangkasan <em>JavaScript bundle</em>. Bagi saya, sebuah aplikasi web yang baik tidak hanya harus fungsional, tetapi harus terasa user friendly dan bisa di gunakan orang itu lebih mudah
                </p>

                <p>
                  Selama setahun terakhir, saya aktif mengerjakan proyek mandiri, berkontribusi di github dan komunitas google developer indonsia
                </p>

                <div className="pt-4 border-t border-[#232326] flex items-center justify-between text-xs font-mono text-[#71717A]">
                  <span>Pendidikan Terkini: SMK 1 Antartika Sidoarjo (RPL)</span>
                  <span className="text-[#4ADE80]">Target: saya adalah Bisa menjadi programer advance</span>
                </div>
              </div>
            )}

            {/* Tab 2: Filosofi & Cara Pandang */}
            {activeTab === 'philosophy' && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#232326] space-y-4 text-sm text-[#A1A1AA] leading-relaxed font-body">
                <div className="text-xs font-mono uppercase text-[#D9FF3D] tracking-wider mb-1">
                  // PROSES PENGEMBANGAN
              Dikembangkan dengan metode Vibe Coding — kombinasi penulisan
              kode manual, AI-assisted development, dan review menyeluruh
              di setiap tahap. Setiap baris kode dipahami, diuji, dan
              dapat dipertanggungjawabkan.

                </div>
                <h1 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F5]">
                  Saya mulai belajar coding sebelum AI jadi sepopuler sekarang.
Waktu itu, kalau ada error, saya baca dokumentasi, buka Stack Overflow,
dan coba satu-satu sampai jalan. Sekarang AI ada di samping saya —
bukan untuk menggantikan cara berpikir saya, tapi untuk mempercepat
hal-hal yang sudah saya pahami. Setiap baris tetap saya baca,
saya uji, dan kadang saya ubah karena saya tidak setuju.
                </h1>

                <p>
                  Saya sudah beberapa kali lihat alat baru datang dengan
janji yang sama: "ini akan mengubah cara kita bekerja."
Beberapa benar. Beberapa cuma ramai sebentar.

Yang saya pelajari dari semua itu: alat tidak pernah
jadi masalah. Yang jadi masalah adalah orang yang
memakainya tanpa tahu apa yang dia mau.

AI sekarang ada di posisi yang sama. Saya pakai.
Setiap hari. Tapi saya tidak pernah biarkan dia
memutuskan hal-hal yang seharusnya saya putuskan:
warna, jarak, kapan animasi harus berhenti. Hal-hal
kecil yang bikin website terasa hidup — atau cuma
jalan.

Banyak website hari ini cuma jalan. Saya mengerti
kenapa. Tapi saya tidak mau berhenti di sana.
                </p>

                <p>
                  Itulah alasan saya menjadi programer
                </p>

                <div className="space-y-2.5 my-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#0A0A0B] border border-[#232326] text-[#E4E4E7] flex items-start gap-2.5">
                    <span className="text-[#D9FF3D] font-bold">01.</span>
                    <span>Masalah Dulu, Alat Kemudian
    Framework dipilih setelah masalah dipahami.
    Bukan sebelum.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A0A0B] border border-[#232326] text-[#E4E4E7] flex items-start gap-2.5">
                    <span className="text-[#D9FF3D] font-bold">02.</span>
                    <span>Kode Dibaca Manusia
    Saya tulis dengan asumsi akan dibaca lagi
    enam bulan dari sekarang. </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A0A0B] border border-[#232326] text-[#E4E4E7] flex items-start gap-2.5">
                    <span className="text-[#D9FF3D] font-bold">03.</span>
                    <span>a Garis yang Tidak Saya Lewati
    Aksesibilitas, semantik, kontras. Tidak
    diminta. Tetap dikerjakan.</span>
    
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A0A0B] border border-[#232326] text-[#E4E4E7] flex items-start gap-2.5">
                    <span className="text-[#D9FF3D] font-bold">04.</span>
                    <span> Alat Bukan Pengganti Keputusan
    Alatnya ganti. Prinsipnya tetap.</span>
    
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A0A0B] border border-[#232326] text-[#E4E4E7] flex items-start gap-2.5">
                    <span className="text-[#D9FF3D] font-bold">05.</span>
                    <span>Keputusan Kecil yang Bikin Beda
    Warna hover, jarak, kapan animasi berhenti.
    Di sini bedanya.</span>
    
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A0A0B] border border-[#232326] text-[#E4E4E7] flex items-start gap-2.5">
                    <span className="text-[#D9FF3D] font-bold">06.</span>
                    <span>aBelajar dari yang Sudah Lewat
    Proyek yang gagal mengajarkan hal yang
    tidak bisa diajarkan proyek yang berhasiln.</span>
    
                  </div>
           
                </div>
              </div>
            )}

            {/* Tab 3: Tools & Setup Harian */}
            {activeTab === 'setup' && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#232326] space-y-4 text-sm text-[#A1A1AA] leading-relaxed font-body">
                <div className="text-xs font-mono uppercase text-[#D9FF3D] tracking-wider mb-1">
                  //INI LAH WORKSPACE SAYA DI BELAKANG LAYAR
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F5]">
                  Stack Minimalis, Berorientasi Performa Dan modern 
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono pt-1">
                  <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-[#232326] space-y-1">
                    <div className="text-[#71717A] text-[10px] uppercase">EDITOR UTAMA</div>
                    <div className="text-[#F4F4F5] font-semibold">VS Code , Cursor AI , opencode , 9router ,antigratvity &amp; hermes</div>
                    
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-[#232326] space-y-1">
                    <div className="text-[#71717A] text-[10px] uppercase">CORE FRAMEWORK</div>
                    <div className="text-[#D9FF3D] font-semibold">React 19 , Next.js , Vite ,django , fastapi , node js, vuejs, supa base   </div>
                    
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-[#232326] space-y-1">
                    <div className="text-[#71717A] text-[10px] uppercase">STYLING ENGINE</div>
                    <div className="text-[#60A5FA] font-semibold">Tailwind CSS v4 &amp; bootsrtap</div>
                 
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-[#232326] space-y-1">
                    <div className="text-[#71717A] text-[10px] uppercase">AUDIT &amp; QUALITY</div>
                    <div className="text-[#4ADE80] font-semibold">Chrome DevTools &amp; Lighthouse</div>
                   
                  </div>
                </div>

                <p className="text-xs text-[#71717A] pt-2">
                 HARUS BISA CLEAN CODE DAN DESIGN YANG RAPI  <strong> DENGAN BANTUAN AI   </strong>
                </p>
              </div>
            )}

            {/* Tab 4: Di Balik Layar */}
            {activeTab === 'personal' && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#232326] space-y-4 text-sm text-[#A1A1AA] leading-relaxed font-body">
                <div className="text-xs font-mono uppercase text-[#D9FF3D] tracking-wider mb-1">
                  // SISI PERSONAL  SAYA 
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F5]">
                 Sebagian besar tools yang saya bangun bukan
karena diminta. Tapi karena saya sendiri butuh.
                </h3>

                <p>
                  Saya bukan tipe developer yang menunggu brief. Kalau ada masalah kecil yang mengganggu pekerjaan saya, saya lebih memilih menyelesaikannya sendiri daripada menunggu ada yang membuatkan tools-nya. Hasilnya macam-macam — ada yang cuma script 30 baris, ada yang tumbuh jadi aplikasi web kecil, ada juga yang akhirnya dibuang karena masalahnya bukan di situ.
                </p>

                <p>
                  FDari semua itu, saya belajar bahwa tools yang bagus tidak selalu yang canggih. Kadang yang paling berguna justru yang paling sederhana — asal tepat menyelesaikan masalahnya. Dan tidak semua yang saya bangun harus jadi sesuatu. kadang nilainya justru di prosesnya, yang memaksa saya memahami masalah lebih dalam sebelum mulai menulis kode
                </p>

                <div className="p-4 rounded-xl bg-[#0A0A0B] border border-[#232326] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-[#D9FF3D]" />
                    <span className="text-xs text-[#E4E4E7] font-mono">
                      Tertarik mengobrol dengan fortofolio saya  yuk ngobrol
                    </span>
                  </div>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#18181B] text-[#D9FF3D] border border-[#232326] text-xs font-mono hover:bg-[#232326] transition-colors"
                  >
                    salam  via WhatsApp →
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Direct Action Bar */}
            <div className="p-4 rounded-xl bg-[#121214] border border-[#232326] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#A1A1AA]">
                <GraduationCap className="w-4 h-4 text-[#D9FF3D]" />
                <span>Siswa RPL Aktif · Siap Kontribusi Nyata dalam dunia teknologi </span>
              </div>

              <button
                onClick={onOpenCV}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D9FF3D] text-[#0A0A0B] font-bold hover:bg-[#cbf72c] transition-colors cursor-pointer"
              >
                <span>Lihat Curriculum Vitae Lengkap</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
