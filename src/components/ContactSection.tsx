import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Github,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { copyToClipboard } from '../utils/clipboard';

interface ContactSectionProps {
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
  onOpenCV: () => void;
}

type TopicKey =
  | 'magang'
  | 'job'
  | 'website'
  | 'mobile'
  | 'api'
  | 'freelance'
  | 'diskusi';

const TOPIC_SUBJECTS: Record<TopicKey, string> = {
  magang:
    'Tawaran Magang / Internship Full Stack Developer',
  job:
    'Peluang Kerja Full Stack Developer (Website & Aplikasi)',
  website:
    'Penawaran Proyek Pengembangan Website',
  mobile:
    'Penawaran Proyek Pengembangan Aplikasi Mobile / Desktop',
  api:
    'Penawaran Proyek Backend / API / Integrasi Sistem',
  freelance:
    'Penawaran Proyek Freelance Full Stack',
  diskusi:
    'Diskusi Kolaborasi & Full Stack Engineering',
};

const TOPIC_LABELS: Record<TopicKey, string> = {
  magang: 'Magang',
  job: 'Full Time',
  website: 'Website',
  mobile: 'Aplikasi',
  api: 'Backend / API',
  freelance: 'Freelance',
  diskusi: 'Kolaborasi',
};

export const ContactSection: React.FC<ContactSectionProps> = ({
  onShowToast,
  onOpenCV,
}) => {
  const { profile } = PORTFOLIO_DATA;
  const TARGET_EMAIL = profile.email || 'raffa.dian0869@gmail.com';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [topic, setTopic] = useState<TopicKey>('job');
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [message, setMessage] = useState('');

  
  const buildEmail = () => {
    const name = senderName.trim() || '[Nama Anda]';
    const company = senderCompany.trim() || '[Perusahaan / Institusi]';
    const detail =
      message.trim() ||
      'Kami memiliki kebutuhan pengembangan website, aplikasi, atau sistem backend dan bermaksud mendiskusikan ketersediaan waktu serta jadwal Bapak lebih lanjut.';

    const subject = `${TOPIC_SUBJECTS[topic]} - ${
      senderName.trim() ? name : 'Inquiry Portofolio'
    }`;

    const body = `Dengan hormat,

Perkenalkan, saya ${name}${
      senderCompany.trim() ? ` dari ${company}` : ''
    }. Saya menghubungi Bapak Muhammad Raffadian Pratama sehubungan dengan ketertarikan kami terhadap portofolio dan kompetensi Bapak sebagai Full Stack Developer yang menangani pengembangan website, aplikasi, serta sistem backend.

Setelah meninjau portofolio yang Bapak bangun, kami sangat mengapresiasi pendekatan Bapak yang rapi, cepat, dan menyeluruh — mulai dari antarmuka pengguna, logika backend, desain basis data, hingga proses deployment. Kami meyakini bahwa keahlian Bapak dapat memberikan kontribusi yang berarti bagi kami. Oleh karena itu, kami bermaksud menyampaikan detail peluang kerja sama sebagai berikut:

  • Nama Pengirim        : ${name}
  • Perusahaan/Institusi : ${company}
  • Jenis Kebutuhan      : ${TOPIC_SUBJECTS[topic]}
  • Detail / Catatan     :
${detail}

Besar harapan kami apabila Bapak berkenan meluangkan waktu untuk berdiskusi lebih lanjut mengenai peluang ini. Kami sangat terbuka untuk menyesuaikan jadwal dengan ketersediaan Bapak.

Demikian surat ini kami sampaikan. Atas perhatian, waktu, dan kesediaan Bapak, kami ucapkan terima kasih yang sebesar-besarnya.

Hormat saya,

${name}
${company}`;

    return { subject, body };
  };

 
  const buildWhatsAppMessage = () => {
    const name = senderName.trim() || '[Nama Anda]';
    const company = senderCompany.trim() || '[Perusahaan / Institusi]';
    const detail =
      message.trim() ||
      'Kami memiliki kebutuhan pengembangan website, aplikasi, atau sistem backend dan bermaksud mendiskusikan ketersediaan waktu serta jadwal Bapak lebih lanjut.';

    return `Dengan hormat,

Perkenalkan, saya ${name}${
      senderCompany.trim() ? ` dari ${company}` : ''
    }. Saya menghubungi Bapak Muhammad Raffadian Pratama sehubungan dengan ketertarikan kami untuk menjalin kerja sama di bidang pengembangan website, aplikasi, dan sistem backend (full stack development).

Setelah meninjau portofolio yang Bapak bangun, kami sangat mengapresiasi pendekatan Bapak yang rapi, cepat, dan menyeluruh. Kami bermaksud menyampaikan detail peluang kerja sama sebagai berikut:

• Nama Pengirim        : ${name}
• Perusahaan/Institusi : ${company}
• Jenis Kebutuhan      : ${TOPIC_SUBJECTS[topic]}
• Detail / Catatan     :
${detail}

Besar harapan kami apabila Bapak berkenan meluangkan waktu untuk berdiskusi lebih lanjut. Kami sangat terbuka untuk menyesuaikan jadwal dengan ketersediaan Bapak.

Demikian pesan ini kami sampaikan. Atas perhatian, waktu, dan kesediaan Bapak, kami ucapkan terima kasih yang sebesar-besarnya.

Hormat saya,

${name}
${company}`;
  };

  
  const buildWhatsAppLink = () => {
    const baseUrl = (profile.whatsapp || '').split('?')[0];
    const text = encodeURIComponent(buildWhatsAppMessage());
    return `${baseUrl}?text=${text}`;
  };

  // === COPY ACTIONS ===
  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(TARGET_EMAIL);
    if (!ok) return;
    setCopiedEmail(true);
    onShowToast(`Email disalin: ${TARGET_EMAIL}`, 'success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = async () => {
    if (!profile.phone) return;
    const ok = await copyToClipboard(profile.phone);
    if (!ok) return;
    setCopiedPhone(true);
    onShowToast(`Nomor disalin: ${profile.phone}`, 'success');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // === OPEN GMAIL WEB ===
  const handleOpenGmailWeb = () => {
    const { subject, body } = buildEmail();
    const url =
      `https://mail.google.com/mail/?view=cm&fs=1&tf=1` +
      `&to=${encodeURIComponent(TARGET_EMAIL)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win || win.closed) {
      window.location.href = url;
      return;
    }
    onShowToast(`Membuka Gmail ke ${TARGET_EMAIL}...`, 'success');
  };

  // === OPEN DEFAULT MAIL APP ===
  const handleSendMailto = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const { subject, body } = buildEmail();
    const url = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    onShowToast(`Membuka aplikasi email ke ${TARGET_EMAIL}...`, 'info');
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0A0A0B] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* ===== LEFT: Direct Contact Cards ===== */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#D9FF3D] mb-2">
                // KONTAK &amp; KERJA SAMA
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight">
                MARI MEMBANGUN SESUATU YANG LEBIH INDAH
              </h2>
              <p className="text-sm text-[#A1A1AA] mt-3 leading-relaxed font-body">
                Terbuka untuk tawaran posisi{' '}
                <strong>Full Stack Developer</strong>, proyek{' '}
                <strong>pengembangan website</strong>,{' '}
                <strong>aplikasi mobile &amp; desktop</strong>, serta{' '}
                <strong>backend / API</strong> yang mengutamakan kecepatan,
                keamanan, dan estetika bersih.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#121214] border border-[#232326] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#18181B] text-[#D9FF3D] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-[#71717A] uppercase">
                      EMAIL LANGSUNG
                    </div>
                    <div className="text-sm font-mono text-[#F4F4F5] truncate">
                      {TARGET_EMAIL}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#18181B] border border-[#232326] text-[#A1A1AA] hover:text-[#D9FF3D] hover:border-[#3F3F46] transition-colors cursor-pointer"
                    title="Salin Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#4ADE80]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => handleSendMailto()}
                    className="px-3 py-1.5 rounded-lg bg-[#D9FF3D] text-[#0A0A0B] text-xs font-mono font-bold hover:bg-[#cbf72c] transition-colors cursor-pointer"
                  >
                    Draft
                  </button>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-[#121214] border border-[#232326] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#18181B] text-[#4ADE80] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-[#71717A] uppercase">
                      WHATSAPP / TELEFON
                    </div>
                    <div className="text-sm font-mono text-[#F4F4F5] truncate">
                      {profile.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-[#18181B] border border-[#232326] text-[#A1A1AA] hover:text-[#4ADE80] hover:border-[#3F3F46] transition-colors cursor-pointer"
                    title="Salin Nomor"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-[#4ADE80]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#232326] text-[#4ADE80] text-xs font-mono font-bold hover:bg-[#232326] transition-colors flex items-center gap-1"
                  >
                    <span>Chat WA</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social & CV */}
            <div className="flex items-center gap-3 pt-1 flex-wrap">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>https://github.com/JAPAR-FULLSTACK</span>
              </a>
              <button
                onClick={onOpenCV}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors cursor-pointer"
              >
                <span>Unduh CV Lengkap</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D9FF3D]" />
              </button>
            </div>
          </div>

          {/* ===== RIGHT: Draft Form ===== */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#232326] shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#232326] gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF3D]" />
                <span className="text-xs font-mono text-[#F4F4F5] uppercase font-bold">
                  FORMAT DRAFT EMAIL &amp; WA
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#4ADE80]">
                Auto
              </span>
            </div>

            <form onSubmit={handleSendMailto} className="space-y-4">
              {/* Topic Selector */}
              <div>
                <label className="block text-[11px] font-mono text-[#71717A] uppercase mb-2">
                  PILIH JENIS KEBUTUHAN:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  {(Object.keys(TOPIC_LABELS) as TopicKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTopic(key)}
                      className={`px-3 py-2 rounded-lg border text-left transition-colors cursor-pointer ${
                        topic === key
                          ? 'bg-[#18181B] text-[#D9FF3D] border-[#D9FF3D] font-bold'
                          : 'bg-[#0A0A0B] text-[#A1A1AA] border-[#232326] hover:text-[#F4F4F5]'
                      }`}
                    >
                      {TOPIC_LABELS[key]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-[#71717A] uppercase mb-1.5">
                    Nama Anda / Recruiter
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Contoh: Sarah"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0B] border border-[#232326] text-xs sm:text-sm text-[#F4F4F5] placeholder-[#71717A] focus:outline-none focus:border-[#D9FF3D] font-body"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#71717A] uppercase mb-1.5">
                    Perusahaan  / Agensi
                  </label>
                  <input
                    type="text"
                    value={senderCompany}
                    onChange={(e) => setSenderCompany(e.target.value)}
                    placeholder="Contoh: PT Teknologi Bangsa"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0B] border border-[#232326] text-xs sm:text-sm text-[#F4F4F5] placeholder-[#71717A] focus:outline-none focus:border-[#D9FF3D] font-body"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-mono text-[#71717A] uppercase mb-1.5">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ketik detail proyek, tawaran posisi, atau jadwal diskusi..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0A0A0B] border border-[#232326] text-xs sm:text-sm text-[#F4F4F5] placeholder-[#71717A] focus:outline-none focus:border-[#D9FF3D] font-body resize-none"
                />
              </div>

              {/* Actions: Gmail + WA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleOpenGmailWeb}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D9FF3D] text-[#0A0A0B] font-display font-bold text-xs hover:bg-[#cbf72c] transition-all cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Buka di Gmail Web ↗</span>
                </button>

                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    onShowToast(
                      'Membuka WhatsApp dengan pesan terisi...',
                      'success'
                    )
                  }
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4ADE80] text-[#0A0A0B] font-display font-bold text-xs hover:bg-[#3ecf6e] transition-all cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Kirim via WhatsApp ↗</span>
                </a>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#18181B] text-[#F4F4F5] border border-[#232326] hover:border-[#3F3F46] font-display font-bold text-xs hover:text-[#D9FF3D] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Aplikasi Email Default</span>
              </button>

              <p className="text-[11px] font-mono text-[#71717A] text-center pt-1">
                Isi form di atas Kalok tertarik 
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};