export interface Profile {
  name: string;
  shortName: string;
  role: string;
  institution: string;
  location: string;
  tagline: string;
  bio: string;
  availability: boolean;
  availabilityNote: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  Tiktok : string;
  stats: {
    lighthouseAverage: number;
    bundleSavings: string;
    responseTime: string;
    projectsCompleted: number;
  };
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  metric: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps & Tools';
  proficiency: number;
  proof: string;
  proofLink?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  descriptionShort: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics: string[];
  techStack: string[];
  demoUrl?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  teamMembers?: string[];
  teamOrigin?: string;
  progress?: number;
  progressStatus?: string;
  featured: boolean;
  tag: string;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  relation: string;
}

export interface HowIWorkStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface EducationEntry {
  institution: string;
  major?: string;
  period: { start: string; end: string };
  isCurrent?: boolean;
  description?: string;
  topics?: string[];
  location?: string;
  order: number;
}

export const PORTFOLIO_DATA: {
  profile: Profile;
  principles: Principle[];
  skills: SkillItem[];
  projects: Project[];
  experience: Experience[];
  education: EducationEntry[];
  certifications: Certification[];
  testimonials: Testimonial[];
  howIWork: HowIWorkStep[];
} = {
  profile: {
    name: "Muhammad Raffadian Pratama",
    shortName: "Raffa",
    role: "Software Engineering Student & Frontend UI Engineer",
    institution: "SMK 1 Antartika Sidoarjo (Rekayasa Perangkat Lunak)",
    location: "Sidoarjo, Jawa Timur, Indonesia ",
    tagline: "Membangun Sebuah website Dan aplikasi yang lebih user friendly",
    bio: "Saya Muhammad Raffadian Pratama, siswa SMK 1 Antartika Sidoarjo jurusan Rekayasa Perangkat Lunak (RPL) dengan fokus pada rekayasa antarmuka web modern, performance engineering, dan sistem desain editorial. ",
    availability: true,
    availabilityNote: "Available for Projects & Internship — Response within 24h",
    email: "raffa.dian0869@gmail.com",
    phone: "+628814952272",
    whatsapp: "https://wa.me/628814952272?text=Halo%20Raffa%2C%20saya%20tertarik%20dengan%20portofolio%20Anda",
    github: "https://github.com/JAPAR-FULLSTACK",
    linkedin: "-",
    Tiktok: "-",
    stats: {
      lighthouseAverage: 98,
      bundleSavings: "45%",
      responseTime: "< 24h",
      projectsCompleted: 14
    }
  },

  principles: [
    {
      number: "01",
      title: " Spec-Driven Development",
      description: "Menerjemahkan kebutuhan bisnis menjadi dokumen spesifikasi teknis (PRD) sebelum fase eksekusi. Perencanaan arsitektur dan user journey yang matang memastikan tidak ada technical debt (utang teknis) akibat revisi yang tidak terencana",
      metric: "Approved PRD & System Architecture"
    },
    {
      number: "02",
      title: "Scope Discipline & Agility",
      description: " Bersikap tegas dalam menjaga batasan proyek (scope). Fokus menyelesaikan fitur esensial tanpa terganggu oleh feature creep (penambahan fitur di tengah jalan). Memastikan setiap milestone terkirim tepat waktu dan sesuai standar",
      metric: "100% On-Time Delivery"
    },
    {
      number: "03",
      title: "Meticulous Quality Assurance",
      description: "Mengutamakan ketelitian tingkat tinggi pada setiap pull request. Memperhatikan detail terkecil pada logika kode (error handling, validasi input) dan akurasi antarmuka. Kode yang baik adalah kode yang mudah di-maintain oleh tim lain",
      metric: "0 Critical Bugs & Clean Code Audit"
    },
    {
      number: "04",
      title: "Accountable AI Integration",
      description: "Memposisikan AI sebagai akselerator (Vibe Coding), bukan pengganti logika. Setiap output dari AI wajib melewati proses code review, pengujian keamanan, dan verifikasi manual untuk menjamin akuntabilitas dan fungsionalitas",
      metric: "100% Code Reviewed & Verified"
    },
    {
      number: "05",
      title: "Empirical Performance Validation",
      description: " Kualitas tidak diukur dari janji manis, melainkan dari data empiris. Setiap klaim performa dibuktikan secara kuantitatif melalui audit Lighthouse, pengukuran latensi API, dan observabilitas sistem yang terukur pasca-rilis",
      metric: " Lighthouse 98+ & API <50ms"
    }
  ],

  skills: [
  // ================= FRONTEND =================
  { 
    name: "TypeScript & JavaScript (ES6+)", 
    category: "Frontend", 
    proficiency: 95, 
    proof: "Penerapan Strict Mode & arsitektur modular pada React, Vue, dan Next.js." 
  },
  { 
    name: "Tailwind CSS & Bootstrap", 
    category: "Frontend", 
    proficiency : 96, 
    proof: "Implementasi utility-first (Tailwind) & component-based (Bootstrap) untuk UI responsif." 
  },
  { 
    name: "React 19 & Next.js", 
    category: "Frontend", 
    proficiency: 94, 
    proof: "Pengembangan antarmuka interaktif dengan SSR dan performa Lighthouse 98+." 
  },
  { 
    name: "Vue.js & Angular", 
    category: "Frontend", 
    proficiency: 85, 
    proof: "Pemahaman arsitektur reaktif (Vue) dan enterprise-grade framework (Angular)." 
  },

  // ================= BACKEND =================
  { 
    name: "Node.js & Express.js", 
    category: "Backend", 
    proficiency: 92, 
    proof: "Membangun REST API backend dengan latensi sub-50ms untuk sistem VocaSafe." 
  },
  { 
    name: "C# & Python", 
    category: "Backend", 
    proficiency: 88, 
    proof: "Pengembangan logika server strongly-typed (C#) dan scripting/automation (Python)." 
  },
  { 
    name: "Golang & Rust", 
    category: "Backend", 
    proficiency: 82, 
    proof: "Eksplorasi sistem backend berperforma tinggi, memory-safe, dan concurrent processing." 
  },

  // ================= DATABASE =================
  { 
    name: "PostgreSQL & Supabase", 
    category: "Database", 
    proficiency: 90, 
    proof: "Desain skema relasional kompleks dan integrasi BaaS (Auth, Realtime DB) via Supabase." 
  },
  { 
    name: "SQLite & ORM (Prisma/Drizzle)", 
    category: "Database", 
    proficiency: 88, 
    proof: "Database lokal (SQLite) untuk offline-first & abstraksi query dengan type-safety." 
  },

  // ================= DEVOPS & TOOLS =================
  { 
    name: "Web Performance & Core Web Vitals", 
    category: "DevOps & Tools", 
    proficiency: 95, 
    proof: "Optimasi LCP/CLS hingga audit WCAG 2.1 AA dan skor Lighthouse 98+." 
  },
  { 
    name: "Git Workflow & CI/CD", 
    category: "DevOps & Tools", 
    proficiency: 91, 
    proof: "Otomatisasi deployment (Vercel), code review, dan feature branching di tim." 
  }
],

  projects: [
    {
      id: "proj-1",
      title: "VOCA SAFE",
      slug: "vocasafe",
      tag: "EDUCATION",
      year: "2026",
      summary: "Solusi digitalisasi PKL yang memfasilitasi pengajuan proposal ke industri secara online (tanpa tatap muka) dan menyediakan sistem pemantauan siswa yang efisien bagi pihak sekolah.",
      descriptionShort: "Proses Praktik Kerja Lapangan (PKL) di sekolah vokasi seringkali terkendala oleh birokrasi manual yang memakan waktu, mulai dari penyusunan proposal fisik hingga pengantaran berkas langsung ke kantor mitra industri. Proyek ini hadir sebagai platform digital terpusat yang mendigitalisasi seluruh alur tersebut. Sistem ini memungkinkan siswa untuk menyusun dan mengajukan proposal PKL secara online, sementara pihak sekolah dan guru pembimbing dapat memantau status pengajuan serta monitoring aktivitas siswa secara real-time. Solusi ini secara drastis memangkas waktu administrasi dan menghilangkan kebutuhan kunjungan fisik ke industri.",
      problem: "Siapa yang pernah ngerasain ribetnya ngurus administrasi PKL? Harus mencetak tumpukan proposal fisik, bolak-balik ke kantor industri cuma buat nyerahin berkas, belum lagi kalau ada revisi. Di sisi lain, pihak sekolah juga kewalahan memantau progres puluhan siswa yang tersebar di berbagai perusahaan secara manual. Prosesnya lambat, buang waktu, dan sering bikin frustrasi..",
      solution: "Platform ini saya rancang untuk memotong semua birokrasi yang nggak perlu. Lewat sistem ini, pengajuan proposal ke industri bisa dilakukan sekali klik secara online, dan sekolah punya 'kaca pengintai' untuk memantau aktivitas siswa secara real-time. Hasilnya? Waktu administrasi hemat drastis, dan semua pihak bisa fokus pada hal yang lebih penting: kualitas belajar siswa di industri.",
      outcome: "Menyediakan visibilitas penuh (100%) terhadap progres siswa di industri. Guru pembimbing tidak lagi buta terhadap aktivitas siswa karena data kehadiran dan logbook harian bisa dipantau secara real-time melalui satu dashboard terpusat.",
      metrics: ["Admin Time: -90%", 
  "Paperless: 100%", 
  "API Latency: <50ms", 
  "Lighthouse: 95+"],
      techStack: ["Node.js", "PostgreSQL", "Typescript", "Express.js", "Restful API"],
      teamMembers: ["Muhammad Raffadian pratama (Backend) ", "Muhammad rasya aditiya putra(Product manager)" , "Jesika putri diana (UI&UX)", "Achmad Nurcahyo Susanto (Fontend)", "Arya ardiansyah putra (Fullstack )"],
      teamOrigin: "Tim 4G1B",
      progress: 80,
      progressStatus: "80% selsai karena  udah gugur di fase group",
      demoUrl: "https://vocasafe.netlify.app/",
      githubUrl: "https://github.com/JAPAR-FULLSTACK/vpca-safe",
      featured: true
    },
    {
  id: "proj-2",
  title: "CASIDO",
  slug: "antartika-portal",
  tag: "ENTERPRISE",
  year: "2025",
  summary: "Platform eksplorasi dan pre-order cafe di Sidoarjo. Temukan tempat nongkrong yang pas, pesan kopi tanpa antre, dan booking meja langsung dari HP.",
  descriptionShort: "Aplikasi web yang menghubungkan pecinta kopi dengan cafe terbaik di Sidoarjo. Dilengkapi fitur direktori interaktif, simulasi keranjang pesanan, dan sistem booking meja.",
  problem: "Seringkali kita susah cari cafe yang fasilitasnya cocok (ada WiFi, outdoor, no smoking) dan malas harus antre panjang cuma buat pesan kopi di jam sibuk.",
  solution: "Membangun direktori cafe interaktif dengan fitur filter pintar. Pengguna bisa melihat menu, menambahkan opsi (level gula, es, topping), dan melakukan pre-order atau booking meja secara online sebelum tiba di lokasi.",
  outcome: "Pengalaman nongkrong jadi jauh lebih praktis. Pengguna bisa 'window shopping' menu cafe dari rumah dan pesanan sudah siap saat mereka sampai di lokasi.",
  metrics: ["Lighthouse: 95+", "Mobile-First UI", "Interactive Cart", "Real-time Filter"],
  techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
  teamMembers: ["Muhammad Raffadian Pratama (Full Stack Developer)"],
  teamOrigin: "Proyek Personal / Eksplorasi Web App",
  progress: 50,
  progressStatus: "DEVELOPMENT 50%",
  demoUrl: "-",
  githubUrl: "https://github.com/JAPAR-FULLSTACK/casido",
  featured: true
},
/*{
      id: "proj-3",
      title: "PulseMetric Engine — Zero-Telemetry Profiler",
      slug: "pulsemetric-engine",
      tag: "DEVELOPER TOOL",
      year: "2025",
      summary: "Dashboard audit performa frontend lokal tanpa telemetry pihak ketiga untuk memvalidasi Core Web Vitals.",
      descriptionShort: "Perkakas developer untuk menguji LCP, CLS, dan INP secara real-time langsung di browser tanpa membocorkan data pengguna.",
      problem: "Script analitik komersial sering menyuntikkan file JavaScript eksternal 80KB+ yang justru merusak performa website klien.",
      solution: "Memanfaatkan browser native PerformanceObserver API dengan komputasi in-memory dan visualisasi chart SVG ultra-ringan.",
      outcome: "Main bundle hanya 28KB, runtime footprint < 0.5% CPU, hasil audit instan.",
      metrics: ["Bundle: 28KB", "Overhead: 0.2ms", "Privacy: 100% Local", "Zero SDK Bloat"],
      techStack: ["TypeScript", "Vite", "PerformanceObserver", "Tailwind CSS", "SVG Charts"],
      teamMembers: ["Muhammad Raffadian Pratama (Solo Engineering & Architecture)"],
      teamOrigin: "Riset Independen Open Source",
      progress: 95,
      progressStatus: "95% Stabil (Rilis v1.2)",
      demoUrl: "https://ais-dev-uvzgmlviviihcqbevysc3z-741361044023.asia-east1.run.app",
      githubUrl: "https://github.com/raffadian/pulsemetric-engine",
      featured: true
    },
    {
      id: "proj-4",
      title: "Kinetix Editorial — Headless Minimalist Commerce",
      slug: "kinetix-editorial",
      tag: "E-COMMERCE",
      year: "2025",
      summary: "Toko konsep digital bertema majalah visual dengan micro-interactions sinematik dan checkout instan.",
      descriptionShort: "E-commerce bertema editorial hitam-putih dengan tipografi presisi, transisi produk mulus, dan keranjang belanja decoupled.",
      problem: "Katalog busana digital sering lambat saat memuat gambar beresolusi tinggi dan checkout penuh gesekan.",
      solution: "Progressive WebP loading, instant client-side transitions, dan layout 8px spacing strict.",
      outcome: "+34% user retention, Speed Index 0.9s, feedback pengguna 98% positif.",
      metrics: ["Speed Index: 0.9s", "Conversion: +34%", "CLS: 0.000", "Image WebP AVIF"],
      techStack: ["React 19", "Tailwind CSS v4", "Zustand", "Motion"],
      teamMembers: ["Muhammad Raffadian Pratama (UI Engineer)", "Dimas Ardianto (Creative Direction)"],
      teamOrigin: "Kolaborasi Komersial Studio Dimensi Mandiri",
      progress: 100,
      progressStatus: "100% Selesai (Handed Over)",
      demoUrl: "https://ais-dev-uvzgmlviviihcqbevysc3z-741361044023.asia-east1.run.app",
      githubUrl: "https://github.com/raffadian/kinetix-editorial",
      featured: false
    }*/
  ],

  experience: [
    {
      id: "exp-1",
      role: "Frontend (PROJECT CASIDO)",
      company: "SMK 1 ANTARTIKA 1 SIDOARJO",
      period: "2026 ",
      location: "Buduran , sdioarjo , jawatimur",
      type: "LOMBA SEKOLAH ",
      description: "Merancang dan membangun sebuah website di peruntukan untuk membantu umkm bisa di kenal lewat internet ",
      highlights: [
        "Meningkatkan skor Lighthouse dari rata-rata 72 → 98 pada project saya yang saya kerjakan ",
        "Mengurangi ukuran JavaScript bundle sebesar 45% melalui code splitting, dynamic imports, dan CSS-first transitions.",
        "Membangun  website yang lebih modern , lebih di mintai para pengguna dan lebih efisien ",
        "Mengimplementasikan WCAG 2.1 AA accessibility standards pada semua komponen interaktif."
      ],
      tech: ["React 19", "TypeScript", "Tailwind CSS v4", "Next.js", "Web Vitals", "Vercel"]
    },
    {
      id: "exp-2",
      role: "BACKEND DEVELOPER (VOCASAFE) ",
      company: "SMK 1 Antartika Sidoarjo ",
      period: "2026",
      location: "Buduran, Sidoarjo, Jawa Timur",
      type: "LOMBA SKEOLAH",
      description: "Platform vokasi digital (VocaSafe) yang dirancang untuk menjembatani siswa SMK dengan dunia industri. Memfasilitasi proses Praktik Kerja Lapangan (PKL) secara online agar lebih praktis, transparan, dan terintegrasi antara pihak sekolah, siswa, dan mitra industri.",
      highlights: [
        "Mendigitalisasi proses manual penjaringan siswa PKL menjadi sistem online yang dapat diakses langsung oleh pihak industri.",
        "Membangun sistem absensi digital yang memungkinkan sekolah dan industri memantau kehadiran siswa secara real-time.",
        "Memfasilitasi integrasi data antara siswa dan perusahaan mitra, memangkas waktu administrasi penempatan PKL.",
        " Meraih penghargaan tingkat kejuruan berkat inovasi jembatan industri-sekolah ini"
      ],
      tech: ["node.js", "Express.js", "SQL (Postrage SQL)", "REST API", "PRISMA ", "REACT" , "GIT "]
    },
    {
      id: "exp-3",
      role: "Open Source Contributor",
      company: "GitHub Community ",
      period: "2026",
      location: "Remote",
      type: "Open Source (Development) ",
      description: "Platform open-source yang menjembatani fase ideasi dan eksekusi kode melalui pendekatan Spec-Driven Development. Menyediakan engine pembuat PRD (Product Requirements Document) terstruktur, memungkinkan developer menerjemahkan kebutuhan bisnis menjadi instruksi AI yang presisi, meminimalisir technical debt, dan mempercepat siklus pengembangan aplikasi.",
      highlights: [
        "Merancang Engine Generator PRD berbasis Client-side Parsing yang mengonversi input state menjadi format Markdown terstruktur, memangkas waktu perancangan spesifikasi hingga 80%",
        "Mengimplementasikan arsitektur Component-Driven Development menggunakan Next.js & Tailwind CSS v4 dengan optimalisasi Tree-shaking, menghasilkan skor Lighthouse performa 100/100. ",
        "Menstandarisasi Prompt Engineering Framework dalam template PRD untuk meminimalisir halusinasi AI dan memastikan output kode yang scalable",
        "Membangun sistem dokumentasi Open-Source yang mencakup panduan arsitektur Full Stack dan penanganan Edge Cases untuk komunitas Vibe Coders",
      ],
      tech: ["Next.js", "API", "Node.js + Express.js", "Postrage.sql", "Talwind css v4", "zustand", "Reactmarkdown", "vercelsdk" ]
    }
  ],

  education: [
    {
      institution: "SMK 1 Antartika Sidoarjo",
      major: "Rekayasa Perangkat Lunak (RPL)",
      period: { start: "2026", end: "2029" },
      isCurrent: true,
      description: "Fokus pada rekayasa perangkat lunak dengan pendekatan proyek nyata. Sebagian besar pembelajaran dilakukan melalui pengerjaan tools dan aplikasi .",
      topics: [
        "Pemrograman Web",
        "Databsae",
        "App development",
        "Cybersecrurity",
        "Jaringan Dasar"
      ],
      location: "Sidoarjo, Jawa Timur",
      order: 1
    },
    {
      institution: "Smp Pgri 1 buduran ",
      period: { start: "2023", end: "2026" },
      isCurrent: false,
      description: "Masa di mana saya mulai tertarik pada komputer dan pemrograman — awalnya dari rasa penasaran, lalu tumbuh jadi minat yang serius.",
      location: "Buduran, Sidoarjo, Jawa Timur",
      order: 2
    },
    {
      institution: "SD Negeri Banjarkemantren 2",
      period: { start: "2017", end: "2023" },
      isCurrent: false,
      description: "Awal ketertarikan pada teknologi, dimulai dari seringnya bermain dengan komputer keluarga.",
      location: "Banjarkemantren , Buduran, Sidoarjo, Jawa Timur",
      order: 3
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Siswa Berprestasi Jurusan Rekayasa Perangkat Lunak",
      issuer: "SMK 1 Antartika Sidoarjo",
      issueDate: "2026",
      badge: "Profesional academic honor",
      credentialUrl: "#"
    },
    {
      id: "cert-2",
      title: "-",
      issuer: "-",
      issueDate: "-",
      badge: "-",
      credentialUrl: "-"
    },
    {
      id: "cert-3",
      title: "-",
      issuer: "-",
      issueDate: "-",
      badge: "-",
      credentialUrl: "-"
    },
    {
      id: "cert-4",
      title: "-",
      issuer: "-",
      issueDate: "-",
      badge: "-",
      credentialUrl: "-"
    }
  ],

  testimonials: [
    {
      id: "test-1",
      quote: "Raffa memiliki etos kerja dan dedikasi teknis yang luar biasa. Pemahamannya tentang arsitektur frontend modern, performa web vitals, kompeten dalam membuat sebuah struktur database.",
      authorName: "Lutfhi firmansyah",
      authorRole: "Guru Pembina jurusan (RPL)",
      authorCompany: "SMK 1 Antartika Sidoarjo",
      relation: "Mentor & Guru Pembimbing"
    },
    /*{
      id: "test-2",
      quote: "-",
      authorName: "-",
      authorRole: "-",
      authorCompany: "-",
      relation: "-"
    },
    {
      id: "test-3",
      quote: "-",
      authorName: "-",
      authorRole: "-",
      authorCompany: "-",
      relation: "-"
    },
    {
      id: "test-4",
      quote: "",
      authorName: "-",
      authorRole: "-",
      authorCompany: "-",
      relation: "-"
    },
    {
      id: "test-5",
      quote: "",
      authorName: "-",
      authorRole: "-",
      authorCompany: "-",
      relation: "-"
    },
    {
      id: "test-6",
      quote: "",
      authorName: "-",
      authorRole: "-",
      authorCompany: "-",
      relation: "-"
    }*/
   
  ],
  

  

  howIWork: [
    {
      step: "Langkah 01",
      title: "Discovery & PRD Specifications",
      tagline: "Menentukan ",
      description: "menganalisis kebutuhan  proyek secara  mendalama  menentukan  tujuan nya itu bagaimana  terus target utama nya audiense itu apa  terus untuk website nya tujuan nya apa ?. serta menyusun sebuah (PRD) Secara tersusun atau terstruktur agar eksekusi  sebuah pembuatan tidak  berantakan .",
      deliverables: ["Dokumen PRD Terstruktur", "User persona", "Scope Fitur "]
    },
    {
      step: "Langkah 02",
      title: "UI/UX & Design Syestem",
      tagline: "Konsistensi design visual",
      description: "Merancang antarmuka berbasis Design System (semantic tokens, spacing 8px grid, hierarki tipografi). Memastikan desain tidak hanya estetis, tetapi juga berfokus pada aksesibilitas pengguna (UX) dan siap diterjemahkan menjadi komponen kode yang scalable.",
      deliverables: ["Wireframe", "Responsive", "Ui component Library"]
    },
    {
      step: "Langka 03",
      title: "Technical Architecture & Stack Decision",
      tagline: "Fondasi yang Teruku",
      description: "Menganalisis dan memilih Tech Stack (Frontend, Backend, Database) berdasarkan trade-off performa dan kebutuhan proyek. Merancang skema database relasional, struktur API, dan alur data untuk memastikan sistem yang dibangun efisien dan aman",
      deliverables: ["cetak biru arsitektur", "Entity Relationship Diagram (ERD)", "API Contract"]
    },
    {
      step: "Langkah 04",
      title: "AI-Augmented Implementation",
      tagline: "Vibe Coding & Manual Logic",
      description:  "Eksekusi development dengan memanfaatkan AI-Assisted Coding untuk mempercepat pembuatan boilerplate dan komponen repetitif. Logika bisnis yang kompleks, keamanan, dan integrasi data tetap ditulis secara manual dengan prinsip Clean Code dan Type-Safety",
      deliverables: [" Source Code Moduler", " Integrasi API", "State Management"]
    },
    {
      step: "langkah 05",
      title: "Quality Assurance & Edge-Case Testing",
      tagline: "Standar Bebas Cacat",
      description: " Melakukan pengujian menyeluruh (Fungsional, Integrasi, dan Multi-viewport). Melakukan debugging mendalam pada edge-cases (skenario terburuk), audit aksesibilitas WCAG, dan validasi metrik performa menggunakan Lighthouse CI sebelum rilis.",
      deliverables: ["Laporan QA", " Lighthouse Score ≥ 95", "Audit Aksesibilitas"]
    },
    {
      step: "Langkah 06",
      title: " Zero-Downtime Deployment",
      tagline: "Rilis & Observabilitas",
      description: "Menjalankan proses deployment ke lingkungan produksi dengan konfigurasi CI/CD, pengamanan environment variables, dan pengaturan domain. Memastikan sistem berjalan live tanpa henti, dilengkapi dengan monitoring untuk memantau stabilitas aplikasi pasca-rilis",
      deliverables: [" Website Live", "Domain & SSL", "Dashboard Monitoring"]
    },
    
  ]
};
