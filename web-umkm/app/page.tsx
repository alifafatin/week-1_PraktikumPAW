"use client";

import React, { useState } from "react";

// Types for MSME category data
interface MsmeCategory {
  id: "micro" | "small" | "medium";
  name: string;
  badge: string;
  tagline: string;
  assetRange: string;
  revenueRange: string;
  examples: string[];
  upgradeTips: string[];
  color: {
    bg: string;
    border: string;
    text: string;
    accent: string;
    badgeBg: string;
  };
}

const MSME_CATEGORIES: MsmeCategory[] = [
  {
    id: "micro",
    name: "Usaha Mikro (Micro)",
    badge: "Tahap Pemula & Rumahan",
    tagline: "Usaha perorangan atau keluarga dengan modal awal yang terjangkau.",
    assetRange: "Kekayaan bersih maksimal Rp 50 Juta (tidak termasuk tanah/bangunan)",
    revenueRange: "Hasil penjualan tahunan maksimal Rp 300 Juta (< Rp 25 Juta / bulan)",
    examples: [
      "Warung kelontong & sembako rumahan",
      "Pedagang kuliner kaki lima / gerobak",
      "Jasa potong rambut & pangkas sederhana",
      "Jasa laundry kiloan perumahan",
      "Penjual pulsa, token & aksesoris HP",
    ],
    upgradeTips: [
      "Gunakan pembayaran QRIS agar pembeli tidak repot cari uang pas.",
      "Catat pemasukan dan pengeluaran harian lewat aplikasi buku kas gratis.",
      "Daftarkan NIB (Nomor Induk Berusaha) gratis lewat HP agar usaha resmi diakui pemerintah.",
      "Buat profil usaha di Google Maps agar warga sekitar mudah menemukan toko Anda.",
    ],
   color: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-900",
      accent: "bg-cyan-600 hover:bg-cyan-700",
      badgeBg: "bg-cyan-100 text-cyan-800",
    },
  },
  {
    id: "small",
    name: "Usaha Kecil (Small)",
    badge: "Tahap Berkembang",
    tagline: "Usaha produktif yang berdiri sendiri dengan manajemen yang mulai teratur.",
    assetRange: "Kekayaan bersih > Rp 50 Juta hingga Rp 500 Juta",
    revenueRange: "Hasil penjualan tahunan > Rp 300 Juta hingga Rp 2,5 Miliar",
    examples: [
      "Kedai kopi / kafe kecil dengan tempat duduk",
      "Katering rumahan melayani acara kantor & pernikahan",
      "Toko pakaian fisik / butik busana muslim",
      "Bengkel motor & suku cadang mandiri",
      "Produsen makanan oleh-oleh daerah",
    ],
    upgradeTips: [
      "Buat foto produk yang terang & rapi untuk dipajang di media sosial dan WhatsApp Bisnis.",
      "Urus sertifikasi halal atau izin PIRT bagi produk pangan agar masuk minimarket.",
      "Pisahkan rekening bank pribadi dengan rekening tabungan usaha.",
      "Manfaatkan platform kurir instan & marketplace untuk menjangkau pembeli luar kota.",
    ],
    color: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-900",
      accent: "bg-amber-600 hover:bg-amber-700",
      badgeBg: "bg-amber-100 text-amber-800",
    },
  },
  {
    id: "medium",
    name: "Usaha Menengah (Medium)",
    badge: "Tahap Mapan & Skala Besar",
    tagline: "Usaha dengan organisasi terstruktur, mempekerjakan banyak tenaga kerja.",
    assetRange: "Kekayaan bersih > Rp 500 Juta hingga Rp 10 Miliar",
    revenueRange: "Hasil penjualan tahunan > Rp 2,5 Miliar hingga Rp 50 Miliar",
    examples: [
      "Pabrik pengolahan makanan / konveksi garmen",
      "Distributor grosir sembako antar kecamatan",
      "Perusahaan furnitur & kerajinan kayu ekspor",
      "Jasa percetakan besar & packaging kemasan",
    ],
    upgradeTips: [
      "Terapkan sistem pencatatan stok dan kasir digital (POS) yang terintegrasi.",
      "Buka akses pembiayaan bank resmi (Kredit Usaha Rakyat) untuk ekspansi cabang.",
      "Lakukan pelatihan berkala bagi karyawan guna menjaga standar mutu produk.",
      "Jajaki pasar antar-pulau atau potensi ekspor melalui pameran binaan dinas.",
    ],
    color: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-900",
      accent: "bg-amber-600 hover:bg-amber-700",
      badgeBg: "bg-amber-100 text-amber-800",
    },
  },
];

export default function Home() {
  // State for active category detail tab
  const [activeCategory, setActiveCategory] = useState<"micro" | "small" | "medium">("micro");

  // State for simple interactive calculator / diagnostic
  const [calcRevenue, setCalcRevenue] = useState<string>("under_25m");

  // State for simple consultation modal / simulation
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [consultName, setConsultName] = useState("");
  const [consultBiz, setConsultBiz] = useState("");
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  // Selected category object
  const currentCategory = MSME_CATEGORIES.find((cat) => cat.id === activeCategory)!;

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. TOP ANNOUNCEMENT BAR (High Contrast, Easy to Read) */}
      <div className="bg-emerald-800 text-white px-4 py-2.5 text-center text-sm md:text-base font-medium flex items-center justify-center gap-2">
        <span className="inline-block animate-pulse">📢</span>
        <span>
          <strong>Kabar Baik:</strong> Program Bimbingan Usaha Naik Kelas dibuka kembali! Pendampingan 100% Gratis.
        </span>
        <a
          href="#kontak"
          className="underline ml-2 text-emerald-200 hover:text-white font-semibold transition"
        >
          Hubungi Kami &rarr;
        </a>
      </div>

      {/* 2. HEADER / NAVBAR (Big Touch Targets, Clear Branding) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl shadow-md">
              🌱
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Pusat UMKM Naik Kelas
              </span>
              <span className="block text-xs sm:text-sm text-slate-500 font-medium">
                Portal Edukasi Usaha Ramah Pemula
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium text-slate-700">
            <a href="#apa-itu-umkm" className="hover:text-emerald-600 transition">
              Apa Itu UMKM?
            </a>
            <a href="#kategori" className="hover:text-emerald-600 transition">
              Kategori Usaha
            </a>
            <a href="#langkah-mudah" className="hover:text-emerald-600 transition">
              3 Langkah Upgrade
            </a>
            <a href="#cek-usaha" className="hover:text-emerald-600 transition">
              Cek Status Usaha
            </a>
          </div>

          <button
            onClick={() => setShowConsultModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md transition transform active:scale-95 flex items-center gap-2 text-sm sm:text-base"
          >
            <span>💬</span>
            <span>Tanya Ahli Gratis</span>
          </button>
        </div>
      </header>

      {/* 3. HERO SECTION (Warm, Welcoming, Big Text, Clear Visuals) */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 py-12 sm:py-20 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm sm:text-base px-3.5 py-1.5 rounded-full font-semibold">
                <span>✨</span> Panduan Usaha Tanpa Istilah Rumit
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-900 leading-tight">
                Bantu Usaha Kecil Anda{" "}
                <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy underline-offset-4">
                  Lebih Untung
                </span>{" "}
                & Berkembang Pesat
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                Tidak perlu pusing dengan teknologi komputer rumit. Kami bantu langkah nyata:
                cara terima bayaran lewat HP (QRIS), izin usaha resmi gratis, dan cara supaya
                dagangan laris dicari banyak pembeli.
              </p>

              {/* Big, Easy-to-Click Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#kategori"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition transform active:scale-95 flex items-center justify-center gap-3 text-center"
                >
                  <span>🔍</span>
                  <span>Lihat Kategori Usaha Saya</span>
                </a>
                <button
                  onClick={() => setShowConsultModal(true)}
                  className="bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300 font-bold text-lg px-6 py-4 rounded-2xl shadow-sm transition flex items-center justify-center gap-3 text-center"
                >
                  <span>📞</span>
                  <span>Bantuan Konsultasi Gratis</span>
                </button>
              </div>

              {/* Trust Badges for non-tech people */}
              <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 text-center border-t border-slate-200">
                <div className="p-2">
                  <p className="text-2xl font-black text-emerald-600">100%</p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">Gratis Dipelajari</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-black text-emerald-600">Mudah</p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">Bisa Pakai HP Biasa</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-black text-emerald-600">Ramah</p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">Bahasa Sehari-hari</p>
                </div>
              </div>
            </div>

            {/* Quick Hero Card / Illustration Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-emerald-100 relative">
                <div className="absolute -top-4 right-6 bg-amber-400 text-amber-950 text-xs sm:text-sm font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  Contoh Nyata
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                  <div className="w-14 h-14 bg-emerald-100 text-3xl rounded-2xl flex items-center justify-center">
                    🍲
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Warung Makan Bu Siti</h2>
                    <p className="text-sm text-slate-500">Usaha Mikro Naik Kelas</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4 text-sm sm:text-base">
                  <div className="flex items-start gap-3 bg-red-50 p-3 rounded-xl border border-red-100">
                    <span className="text-red-500 text-xl font-bold">✕</span>
                    <div>
                      <strong className="block text-red-900 font-semibold">Dulu (Sebelum Tahu):</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">
                        Sering hilang pelanggan karena tidak ada uang kembalian, pembukuan dicatat di sobekan kertas yang sering hilang.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <span className="text-emerald-600 text-xl font-bold">✓</span>
                    <div>
                      <strong className="block text-emerald-900 font-semibold">Sekarang (Setelah Upgrade):</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">
                        Pasang stiker QRIS, pembeli tinggal scan bayar dari HP. Omset harian langsung tercatat otomatis dan naik 40%!
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-50 rounded-2xl text-center">
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mb-1">
                    Ingin usaha Anda seperti Bu Siti?
                  </p>
                  <p className="text-sm sm:text-base font-bold text-emerald-700">
                    Semua orang bisa mulai hari ini tanpa rasa takut!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILS OF MSME (What is MSME / UMKM) */}
      <section id="apa-itu-umkm" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-bold tracking-wide uppercase text-sm bg-emerald-100 px-3 py-1 rounded-full">
            Penjelasan Sederhana
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Apa Sebenarnya UMKM (MSME) Itu?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            <strong>UMKM</strong> singkatan dari <strong>Usaha Mikro, Kecil, dan Menengah</strong>{" "}
            (dalam bahasa Inggris disebut <em>MSME - Micro, Small, and Medium Enterprises</em>).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-300 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-2xl flex items-center justify-center mb-4">
              🏪
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Tulang Punggung Ekonomi</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Lebih dari <strong>97% lapangan kerja</strong> di Indonesia berasal dari pedagang dan pemilik usaha kecil seperti Anda. Tanpa pedagang kecil, ekonomi lingkungan tidak akan berputar.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-300 transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-2xl flex items-center justify-center mb-4">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Dilindungi & Didukung Pemerintah</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Pemerintah memiliki undang-undang khusus untuk melindungi dan memberikan bantuan modal bunga rendah (seperti KUR) serta sertifikasi halal gratis bagi UMKM.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-300 transition">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-2xl flex items-center justify-center mb-4">
              🚀
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Semua Bisa Naik Kelas</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Usaha mikro tidak harus selamanya kecil. Dengan sentuhan sederhana seperti kemasan rapi dan pencatatan kas, omset bisa berlipat ganda menjadi usaha menengah yang mapan.
            </p>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE DETAILS OF MSME (Categorization & Deep Dive) */}
      <section id="kategori" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-emerald-700 font-bold tracking-wide uppercase text-sm bg-emerald-100 px-3 py-1 rounded-full">
              Kriteria Resmi (UU No. 20/2008 & PP No. 7/2021)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Rincian Detail Kategori UMKM
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Klik salah satu kategori di bawah ini untuk melihat contoh usaha nyata dan tips cara menaikkan kelas usahanya.
            </p>
          </div>

          {/* Tab Selector Buttons - Big & Tap-Friendly */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8">
            {MSME_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`py-4 px-4 rounded-2xl font-bold text-center transition border-2 flex flex-col items-center justify-center gap-1 ${
                    isActive
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md scale-102"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-lg sm:text-xl">
                    {cat.id === "micro" ? "🌱 Usaha Mikro" : cat.id === "small" ? "🌿 Usaha Kecil" : "🌳 Usaha Menengah"}
                  </span>
                  <span className={`text-xs ${isActive ? "text-emerald-100" : "text-slate-500"}`}>
                    {cat.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Detail Card */}
          <div className={`p-6 sm:p-10 rounded-3xl border-2 ${currentCategory.color.border} ${currentCategory.color.bg} shadow-lg transition-all duration-300`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-300/60">
              <div>
                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 ${currentCategory.color.badgeBg}`}>
                  {currentCategory.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {currentCategory.name}
                </h3>
                <p className="text-slate-700 text-base sm:text-lg mt-1 font-medium">
                  {currentCategory.tagline}
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur p-4 rounded-2xl border border-slate-200 shadow-sm text-left md:text-right min-w-[220px]">
                <p className="text-xs uppercase font-bold text-slate-400">Patokan Penjualan (Omset)</p>
                <p className="text-base sm:text-lg font-black text-slate-900">
                  {currentCategory.revenueRange}
                </p>
              </div>
            </div>

            {/* Criteria & Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* Left Column: Examples & Assets */}
              <div className="space-y-6">
                <div className="bg-white/80 p-5 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2 mb-2">
                    <span>🏢</span> Patokan Nilai Aset / Kekayaan Bersih:
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base font-medium">
                    {currentCategory.assetRange}
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2 mb-3">
                    <span>🛍️</span> Contoh Usaha di Kehidupan Sehari-hari:
                  </h4>
                  <ul className="space-y-2.5">
                    {currentCategory.examples.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm sm:text-base">
                        <span className="text-emerald-600 font-bold">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Upgrade Action Plan */}
              <div className="bg-white p-6 rounded-2xl border-2 border-emerald-300 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">💡</span>
                  <h4 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                    Langkah Nyata Upgrade Usaha Ini:
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4">
                  Lakukan langkah mudah ini secara bertahap tanpa harus langsung bisa semua:
                </p>

                <div className="space-y-3">
                  {currentCategory.upgradeTips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 hover:bg-emerald-50/60 rounded-xl border border-slate-200 transition flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowConsultModal(true)}
                  className="mt-6 w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-center shadow transition flex items-center justify-center gap-2"
                >
                  <span>💬</span>
                  <span>Minta Bantuan Ahli untuk Kategori Ini</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EASY 3-STEP GUIDE (For non-tech savvy users) */}
      <section id="langkah-mudah" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 font-bold tracking-wide uppercase text-sm bg-emerald-100 px-3 py-1 rounded-full">
            Cara Praktis & Ringkas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            3 Langkah Sederhana Usaha Naik Kelas
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Anda tidak perlu ahli komputer atau jago bahasa Inggris. Cukup ikuti 3 tahap ini:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-sm relative flex flex-col justify-between">
            <div className="absolute -top-5 left-7 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-md">
              1
            </div>
            <div>
              <div className="text-4xl mb-4 mt-2">📜</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bikin Izin Resmi (NIB)</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                NIB (Nomor Induk Berusaha) sekarang bisa dibuat gratis dari HP lewat situs OSS. Tanpa biaya calo, usaha Anda langsung legal dan aman dari razia.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-bold">
              <span>⏱️</span> Waktu proses: Cukup 15 Menit
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-sm relative flex flex-col justify-between">
            <div className="absolute -top-5 left-7 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-md">
              2
            </div>
            <div>
              <div className="text-4xl mb-4 mt-2">📱</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pasang Stiker QRIS</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Daftar QRIS ke bank atau dompet digital (GoPay, OVO, ShopeePay, DANA). Pembeli muda tinggal scan kode barcode tanpa Anda repot cari uang kembalian.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-bold">
              <span>💡</span> Bebas uang palsu & kembalian koin
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-sm relative flex flex-col justify-between">
            <div className="absolute -top-5 left-7 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-md">
              3
            </div>
            <div>
              <div className="text-4xl mb-4 mt-2">📍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Muncul di Google Maps</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Pasang titik lokasi warung atau toko Anda di Google Bisnisku. Saat tetangga mencari &quot;makanan terdekat&quot; atau &quot;laundry terdekat&quot;, tempat Anda akan muncul pertama!
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-bold">
              <span>🚀</span> Omset pembeli baru berdatangan
            </div>
          </div>
        </div>
      </section>

      {/* 7. SELF-CHECK DIAGNOSTIC (Simple 1-Click Interactive Checker) */}
      <section id="cek-usaha" className="py-16 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-emerald-300 font-bold tracking-wide uppercase text-sm bg-emerald-800/80 px-3 py-1 rounded-full border border-emerald-700">
            Kuis Kilat 10 Detik
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            Cek Termasuk Kategori Mana Usaha Anda?
          </h2>
          <p className="text-emerald-100 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Pilih perkiraan omset rata-rata usaha Anda dalam sebulan di bawah ini:
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => setCalcRevenue("under_25m")}
              className={`p-5 rounded-2xl border-2 text-center transition font-bold ${
                calcRevenue === "under_25m"
                  ? "bg-white text-emerald-900 border-white shadow-xl scale-105"
                  : "bg-emerald-800/70 text-white border-emerald-700 hover:bg-emerald-800"
              }`}
            >
              <div className="text-2xl mb-1">💰</div>
              <div className="text-base sm:text-lg">Kurang dari Rp 25 Juta</div>
              <div className={`text-xs mt-1 ${calcRevenue === "under_25m" ? "text-emerald-700" : "text-emerald-300"}`}>
                per bulan (Omset harian &lt; Rp 800rb)
              </div>
            </button>

            <button
              onClick={() => setCalcRevenue("25m_to_200m")}
              className={`p-5 rounded-2xl border-2 text-center transition font-bold ${
                calcRevenue === "25m_to_200m"
                  ? "bg-white text-emerald-900 border-white shadow-xl scale-105"
                  : "bg-emerald-800/70 text-white border-emerald-700 hover:bg-emerald-800"
              }`}
            >
              <div className="text-2xl mb-1">💼</div>
              <div className="text-base sm:text-lg">Rp 25 Juta s/d 200 Juta</div>
              <div className={`text-xs mt-1 ${calcRevenue === "25m_to_200m" ? "text-emerald-700" : "text-emerald-300"}`}>
                per bulan (Rp 800rb - 6 Juta / hari)
              </div>
            </button>

            <button
              onClick={() => setCalcRevenue("above_200m")}
              className={`p-5 rounded-2xl border-2 text-center transition font-bold ${
                calcRevenue === "above_200m"
                  ? "bg-white text-emerald-900 border-white shadow-xl scale-105"
                  : "bg-emerald-800/70 text-white border-emerald-700 hover:bg-emerald-800"
              }`}
            >
              <div className="text-2xl mb-1">🏭</div>
              <div className="text-base sm:text-lg">Lebih dari Rp 200 Juta</div>
              <div className={`text-xs mt-1 ${calcRevenue === "above_200m" ? "text-emerald-700" : "text-emerald-300"}`}>
                per bulan (&gt; Rp 2,5 Miliar / tahun)
              </div>
            </button>
          </div>

          {/* Diagnostic Result Output Box */}
          <div className="mt-8 bg-white text-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-emerald-200 text-left">
            {calcRevenue === "under_25m" && (
              <div className="space-y-4">
                <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Hasil Analisa
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Usaha Anda Tergolong: <span className="text-emerald-600">USAHA MIKRO</span>
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Usaha Anda sangat berpotensi tumbuh cepat! Jangan khawatir soal pembukuan yang rumit. Fokus utama Anda adalah membuat pelanggan loyal dan mempermudah cara mereka membayar.
                </p>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <strong className="block text-emerald-900 font-bold mb-1">
                    🎯 Langkah Pertama yang Kami Sarankan:
                  </strong>
                  <span className="text-slate-700 text-sm sm:text-base">
                    Segera pasang stiker QRIS di warung/toko Anda dan pisahkan uang hasil jualan ke dompet khusus agar modal kulakan tidak terpakai untuk belanja dapur.
                  </span>
                </div>
              </div>
            )}

            {calcRevenue === "25m_to_200m" && (
              <div className="space-y-4">
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Hasil Analisa
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Usaha Anda Tergolong: <span className="text-blue-600">USAHA KECIL</span>
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Usaha Anda sudah memiliki perputaran arus kas yang sehat! Saatnya naik tingkat dengan memperluas jangkauan pembeli dan merapikan izin legalitas.
                </p>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <strong className="block text-blue-900 font-bold mb-1">
                    🎯 Langkah Pertama yang Kami Sarankan:
                  </strong>
                  <span className="text-slate-700 text-sm sm:text-base">
                    Urus Nomor Induk Berusaha (NIB) dan sertifikasi Halal / PIRT agar produk Anda bisa dititipkan di minimarket atau toko oleh-oleh ternama.
                  </span>
                </div>
              </div>
            )}

            {calcRevenue === "above_200m" && (
              <div className="space-y-4">
                <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Hasil Analisa
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Usaha Anda Tergolong: <span className="text-amber-600">USAHA MENENGAH</span>
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Usaha Anda sudah berada di skala mapan dengan dampak ekonomi yang besar bagi lingkungan sekitar dan para pekerja.
                </p>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <strong className="block text-amber-900 font-bold mb-1">
                    🎯 Langkah Pertama yang Kami Sarankan:
                  </strong>
                  <span className="text-slate-700 text-sm sm:text-base">
                    Gunakan aplikasi kasir digital terpadu (POS) untuk memantau stok gudang dan siapkan proposal untuk akses pembiayaan ekspansi cabang baru.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. FAQ (Frequently Asked Questions - Addressing fears of non-tech users) */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-bold tracking-wide uppercase text-sm bg-emerald-100 px-3 py-1 rounded-full">
            Tanya Jawab Ramah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2">
            Rasa ragu itu wajar, mari cari tahu jawabannya bersama kami.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-emerald-600">❓</span> Saya sudah berumur dan tidak paham HP canggih, apa bisa ikut?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed pl-7">
              <strong>Tentu sangat bisa!</strong> Semua panduan di situs ini dirancang tanpa kata-kata rumit. Tim pendamping kami siap membimbing lewat pesan WhatsApp atau telepon biasa sampai Anda merasa percaya diri.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-emerald-600">❓</span> Apakah konsultasi dan pembuatan izin ini berbayar?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed pl-7">
              <strong>100% Gratis!</strong> Pendaftaran Nomor Induk Berusaha (NIB) dari pemerintah adalah hak setiap warga negara dan tidak dipungut biaya sepeser pun.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-emerald-600">❓</span> Kalau saya pakai QRIS, apakah uang pembeli langsung masuk?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed pl-7">
              Ya, uang pembeli akan masuk ke saldo rekening bank atau dompet digital Anda. Anda akan menerima notifikasi bunyi atau SMS konfirmasi seketika itu juga.
            </p>
          </div>
        </div>
      </section>

      {/* 9. CONTACT / CALL TO ACTION SECTION */}
      <section id="kontak" className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6">
            <span className="inline-block bg-white/20 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur">
              Layanan Pendampingan Langsung
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Punya Usaha Tapi Bingung Mau Mulai dari Mana?
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Kirim pesan atau tinggalkan nomor Anda. Tenaga pendamping kami yang ramah akan menghubungi Anda untuk membantu tanpa biaya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                onClick={() => setShowConsultModal(true)}
                className="bg-white hover:bg-emerald-50 text-emerald-800 font-extrabold text-lg px-8 py-4 rounded-2xl shadow-lg transition transform active:scale-95 flex items-center justify-center gap-3"
              >
                <span>💬</span>
                <span>Konsultasi Lewat WhatsApp</span>
              </button>
              <a
                href="tel:08001234567"
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-lg px-6 py-4 rounded-2xl border border-emerald-500 transition flex items-center justify-center gap-3"
              >
                <span>📞</span>
                <span>Telepon Gratis (0800-123-4567)</span>
              </a>
            </div>

            <p className="text-xs text-emerald-200 pt-2">
              Layanan Aktif: Senin - Sabtu (Pukul 08.00 - 17.00 WIB)
            </p>
          </div>
        </div>
      </section>

      {/* 10. SIMPLE MODAL FOR CONSULTATION (User-Friendly Form) */}
      {showConsultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => {
                setShowConsultModal(false);
                setConsultSubmitted(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100"
              aria-label="Tutup dialog"
            >
              ✕
            </button>

            {!consultSubmitted ? (
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-2xl flex items-center justify-center mb-3">
                  💬
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Konsultasi Usaha Gratis
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Isi nama dan jenis usaha Anda, pendamping kami akan menghubungi Anda dengan ramah.
                </p>

                <form onSubmit={handleConsultSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1">
                      Nama Bapak / Ibu:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Pak Joko / Bu Rahma"
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1">
                      Jenis Usaha Anda:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Warung Bakso / Toko Klontong"
                      value={consultBiz}
                      onChange={(e) => setConsultBiz(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1">
                      Nomor WhatsApp:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl shadow-md transition transform active:scale-95 mt-4"
                  >
                    Kirim Permintaan Konsultasi
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 text-3xl rounded-full flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-slate-900">Terima Kasih, {consultName}!</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Permintaan bantuan untuk usaha <strong>{consultBiz}</strong> telah kami terima. Tim pendamping kami akan menghubungi WhatsApp Anda dalam 1x24 jam kerja.
                </p>
                <button
                  onClick={() => {
                    setShowConsultModal(false);
                    setConsultSubmitted(false);
                    setConsultName("");
                    setConsultBiz("");
                  }}
                  className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm"
                >
                  Tutup Jendela
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 11. SIMPLE FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌱</span>
                <span className="text-xl font-black text-white">Pusat UMKM Naik Kelas</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Website panduan dan pendampingan untuk memajukan usaha mikro, kecil, dan menengah di Indonesia dengan pendekatan yang ramah dan mudah dipahami.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 text-base">Tautan Singkat</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#apa-itu-umkm" className="hover:text-emerald-400 transition">
                    Tentang UMKM
                  </a>
                </li>
                <li>
                  <a href="#kategori" className="hover:text-emerald-400 transition">
                    Kategori & Kriteria Usaha
                  </a>
                </li>
                <li>
                  <a href="#langkah-mudah" className="hover:text-emerald-400 transition">
                    3 Langkah Usaha Naik Kelas
                  </a>
                </li>
                <li>
                  <a href="#cek-usaha" className="hover:text-emerald-400 transition">
                    Cek Status Usaha Anda
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 text-base">Kontak & Pusat Bantuan</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-2">
                📍 Sentra Layanan UMKM Daerah, Ruang Pelatihan Lt. 1
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-2">
                📞 Hotline Bebas Pulsa: 0800-123-4567
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                ✉️ Surat Elektronik: bantuan@umkmnaikkelas.id
              </p>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Pusat Bimbingan UMKM Naik Kelas. Dirancang khusus agar ramah pemula.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
