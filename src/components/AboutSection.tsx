import React, { useState } from 'react';
import { MapPin, GraduationCap, Coffee, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCV: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV, onShowToast }) => {
  const { profile } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'journey' | 'philosophy' | 'setup' | 'personal'>('journey');

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
                
                {/* FOTO DIKUNCI DI SINI (Tidak ada upload dari website) */}
                <img
                  src="data:image/jpeg;base64,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" 
                  // ^^^ Jika mau ganti dengan fotomu, ganti link di atas dengan "/nama-foto.jpg" (taruh di folder public)
                  alt={profile.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle Location & Status Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0A0A0B]/85 backdrop-blur-sm border border-[#232326] text-[11px] font-mono text-[#E4E4E7] flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3 h-3 text-[#D9FF3D]" />
                  <span> buduran, Sidoarjo, Jawa Timur</span>
                </div>

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
                <span className="text-[#F4F4F5]">FULLSTACK  </span>
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
            
            {/* Friendly Tab Selector */}
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
                    <span> Garis yang Tidak Saya Lewati
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
                    <span>Belajar dari yang Sudah Lewat
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
                  Dari semua itu, saya belajar bahwa tools yang bagus tidak selalu yang canggih. Kadang yang paling berguna justru yang paling sederhana — asal tepat menyelesaikan masalahnya. Dan tidak semua yang saya bangun harus jadi sesuatu. kadang nilainya justru di prosesnya, yang memaksa saya memahami masalah lebih dalam sebelum mulai menulis kode
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