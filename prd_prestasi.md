Baik, saya paham. Masalah "double" (muncul dua kali) saat *Vibe Coding* itu biasanya terjadi karena dua hal:
1. **AI menaruh komponen `<FloatingActionBar />` di dua tempat berbeda** (misalnya di `App.tsx` DAN di `Navbar.tsx` sekaligus).
2. **React Strict Mode** di tahap *development* memang sengaja me-render komponen dua kali untuk mengecek *bug* (tapi ini hanya di *local*, saat di-*deploy* akan normal).

Berikut adalah **PRD (Product Requirements Document)** khusus untuk komponen ini. Anda bisa memberikan PRD ini ke AI (seperti Cursor/Antigravity) agar AI tidak kebingungan dan tidak membuat komponen ganda.

---

# PRD — Floating Action Bar (Bottom Dock)

## 1. Ringkasan Eksekutif
Floating Action Bar adalah komponen UI yang melayang di bagian bawah layar (Bottom Dock). Komponen ini berfungsi sebagai akses cepat (Quick Access) bagi HRD/Klien untuk melihat status ketersediaan, mengirim email, mengunduh CV, dan membuka Command Palette tanpa harus scroll ke atas. 

Komponen ini **wajib** memiliki fitur *Close (Dismiss)* agar tidak menutupi konten saat pengguna membaca di perangkat *mobile*.

## 2. Spesifikasi UI (Tampilan)
*   **Posisi:** Fixed di bawah layar (`bottom-6`), posisi tengah (`left-1/2 -translate-x-1/2`).
*   **Bentuk:** *Pill* melengkung (`rounded-full`), *Background* gelap transparan dengan efek *Blur* (`backdrop-blur-md`), dan *border* tipis (`border-[#232326]`).
*   **Isi Komponen (Kiri ke Kanan):**
    1.  **Status Indicator:** Titik hijau berkedip (`animate-ping`) + Teks "Tersedia untuk Kerja".
    2.  **Divider:** Garis vertikal tipis.
    3.  **Tombol Email:** Ikon `<Mail />` + Teks "Kirim Email".
    4.  **Tombol CV:** Tombol utama berwarna Kuning Neon (`bg-[#D9FF3D]`) + Ikon `<FileText />` + Teks "CV".
    5.  **Tombol Command:** Ikon `<Command />` (⌘).
    6.  **🔥 Tombol Close:** Ikon `<X />` berukuran kecil di pojok paling kanan.

## 3. Perilaku (Behavior & Interaksi)
*   **Default State:** Tampil di layar.
*   **Close Action:** Saat tombol `<X />` diklik, komponen ini harus **menghilang secara permanen** dari layar.
*   **Penyimpanan State (Session Persistence):** Jika pengguna me-refresh halaman, komponen ini **tetap harus dalam keadaan tertutup** (tidak muncul kembali). Gunakan `sessionStorage` untuk mengingat pilihan pengguna.

## 4. Spesifikasi Teknis (Instruksi untuk AI / Vibe Coding)
*   **PENTING — Jangan Render Ganda:** Pastikan komponen `<FloatingActionBar />` hanya dipanggil **SATU KALI** di dalam `RootLayout` atau `App.tsx`. Jangan memanggilnya di dalam `Navbar.tsx` atau komponen lain.
*   **Z-Index:** Gunakan `z-40` agar posisinya berada di atas konten, namun di bawah *Navbar* (jika Navbar menggunakan `z-50`).
*   **Props:** Komponen menerima 3 props: `onOpenCommand`, `onOpenCV`, dan `onOpenEmail`.

## 5. Kriteria Penerimaan (Acceptance Criteria)
- [ ] Komponen hanya muncul **SATU** kali di pojok bawah layar.
- [ ] Tombol "X" dapat diklik dan membuat komponen menghilang seketika.
- [ ] Jika halaman di-refresh (F5), komponen tetap tersembunyi (menggunakan `sessionStorage`).
- [ ] Desain responsif: Di layar HP, teks "Kirim Email" dan "Tersedia untuk Kerja" bisa disembunyikan, hanya menyisakan ikon agar tidak terlalu lebar.

---

### 📌 Cara Mengatasi Bug "Double" Saat Memberi Prompt ke AI:

Saat Anda memasukkan PRD ini ke AI, tambahkan kalimat sakti ini di akhir prompt Anda:

> *"Tolong buatkan komponen `FloatingActionBar.tsx` sesuai PRD di atas. Lalu pastikan saya hanya perlu meng-import-nya SATU KALI di `App.tsx`. Hapus jika ada pemanggilan komponen ini di tempat lain untuk mencegah bug double render."*