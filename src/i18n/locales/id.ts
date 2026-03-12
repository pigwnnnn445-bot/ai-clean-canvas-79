import { Translations } from "../types";
const id: Translations = {
  nav: { features: "Fitur", useCases: "Kasus Penggunaan", howItWorks: "Cara Kerja", pricing: "Harga", faq: "FAQ", signIn: "Masuk", signOut: "Keluar" },
  hero: { title: "Seedance", subtitle: "Rasakan", subtitleHighlight: "pembuatan video AI multi-modal yang sesungguhnya", subtitleDesc: "Gabungkan gambar, video, audio, dan teks untuk menghasilkan konten sinematik dengan kemampuan referensi presisi, ekstensi video mulus, dan kontrol bahasa alami.", imageToVideo: "Gambar ke Video", textToVideo: "Teks ke Video", aiModel: "Model AI", images: "Gambar", addEndFrame: "Tambah frame akhir", uploadFirstFrame: "Unggah Frame Pertama", uploadLastFrame: "Unggah Frame Terakhir", clickToUpload: "Klik untuk mengunggah atau seret dan lepas", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Jelaskan bagaimana Anda ingin menganimasikan gambar...", resolution: "Resolusi", duration: "Durasi", aspectRatio: "Rasio Aspek", generate: "Hasilkan", generating: "Menghasilkan...", cost: "Biaya", credits: "kredit", available: "Tersedia", downloadVideo: "Unduh Video", downloadSuccess: "Video berhasil diunduh", viewHistory: "Lihat Riwayat", modelDesc20: "Subjek lebih stabil, transisi lebih halus, dan hasil lebih mendekati video siap pakai.", modelDesc15: "Gerakan dalam rekaman alami dan lancar, teksturnya halus dan realistis, serta gaya keseluruhan konsisten dan sangat halus." },
  showcase: { title: "Dapatkan", titleHighlight: "Inspirasi", subtitle: "Jelajahi contoh video menakjubkan yang dibuat dengan kemampuan multi-modal Seedance 2.0." },
  features: { title: "Fitur Utama Seedance", titleHighlight: "2.0", subtitle: "Model video AI multi-modal yang benar-benar dapat dikontrol.", items: [
    { title: "Input Multi-Modal", description: "Unggah hingga 9 gambar, 3 video, dan 3 file audio." },
    { title: "Referensikan Apapun", description: "Referensikan gerakan, efek, gerakan kamera, dan karakter dengan bahasa alami." },
    { title: "Konsistensi Superior", description: "Pertahankan konsistensi sempurna untuk wajah, pakaian, teks, dan gaya visual." },
    { title: "Replikasi Gerakan Presisi", description: "Unggah video referensi untuk mereplikasi koreografi kompleks." },
    { title: "Ekstensi & Pengeditan Video", description: "Perpanjang video yang ada, gabungkan klip, atau edit segmen tertentu." },
    { title: "Generasi Audio Bawaan", description: "Hasilkan efek suara dan musik latar secara otomatis." },
  ]},
  useCases: { label: "Kasus Penggunaan", title: "Kemungkinan Tak Terbatas Untuk Setiap Kreator", subtitle: "Dari periklanan hingga storytelling kreatif, jelajahi aplikasi tak terbatas video AI", cta: "Mulai Sekarang", items: [ "Kasus Penggunaan", title: "Kemungkinan Tak Terbatas Untuk Setiap Kreator", cta: "Mulai Sekarang", items: [
    { title: "Iklan & Pemasaran", desc: "Buat konten promosi yang menarik.", tags: ["Video Produk", "Konten Merek", "Iklan Komersial"] },
    { title: "Cerita Kreatif", desc: "Buat narasi unik dengan input multi-modal.", tags: ["Film Pendek", "Proyek Seni", "Video Musik"] },
    { title: "Konten Media Sosial", desc: "Hasilkan konten menarik.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Video Gerakan & Tarian", desc: "Unggah koreografi referensi.", tags: ["Cover Tarian", "Sekuens Aksi", "Koreografi"] },
    { title: "Pre-Visualisasi Film", desc: "Referensikan klip film.", tags: ["Storyboarding", "Perencanaan Kamera", "Pembuktian Konsep"] },
    { title: "Sinkronisasi Musik", desc: "Unggah trek audio dan buat video yang tersinkronisasi.", tags: ["Beat Sync", "Video Musik", "Desain Suara"] },
  ]},
  howItWorks: { title: "Cara Membuat Video AI", cta: "Mulai Membuat Sekarang", steps: [
    { title: "Unggah Aset Anda", description: "Unggah gambar, video, atau file audio sebagai referensi." },
    { title: "Jelaskan Visi Anda", description: "Gunakan bahasa alami untuk menjelaskan apa yang Anda inginkan." },
    { title: "Hasilkan & Iterasi", description: "Hasilkan video 4-15 detik." },
  ]},
  testimonials: { title: "Dicintai Kreator di Seluruh Dunia", subtitle: "Kreator dari seluruh dunia berbagi pengalaman mereka dengan Seedance 2.0" }, "Testimoni", title: "Dicintai Kreator di Seluruh Dunia" },
  pricing: { title: "Harga", subtitle: "Pilih paket yang cocok untuk Anda.", monthly: "Bulanan", annually: "Tahunan", save: "Hemat 50%", perMonth: "/bulan", subscribe: "Berlangganan", mostPopular: "Paling Populer", plans: [
    { name: "Dasar", desc: "Ideal untuk pemula", credits: "800 kredit/bulan", features: ["Hingga 80 video/bulan", "Beberapa model AI", "Kecepatan standar", "Tanpa watermark", "Lisensi komersial"] },
    { name: "Standar", desc: "Cocok untuk kebanyakan kreator", credits: "2.000 kredit/bulan", features: ["Hingga 200 video/bulan", "Beberapa model AI", "Generasi prioritas", "Tanpa watermark", "Dukungan prioritas", "Lisensi komersial"] },
    { name: "Pro", desc: "Ideal untuk pengguna mahir", credits: "6.000 kredit/bulan", features: ["Hingga 600 video/bulan", "Beberapa model AI", "Kecepatan tercepat", "Tanpa watermark", "Dukungan ahli", "Lisensi komersial"] },
  ]},
  faq: { title: "Pertanyaan yang Sering Diajukan", contactText: "Masih punya pertanyaan? Hubungi", items: [
    { q: "Apa itu Seedance 2.0?", a: "Model revolusioner untuk menghasilkan video AI multi-modal." },
    { q: "Input apa yang didukung?", a: "Empat modalitas: hingga 9 gambar, 3 video, 3 audio, dan teks." },
    { q: "Bagaimana ekstensi video bekerja?", a: "Unggah video dan tentukan detik yang akan ditambahkan." },
    { q: "Bisakah saya mengedit video yang ada?", a: "Ya! Ganti karakter, ubah aksi, tambah atau hapus elemen." },
    { q: "Durasi dan resolusi apa yang didukung?", a: "Video 4-15 detik dengan resolusi hingga 1080p." },
    { q: "Apakah ada watermark?", a: "Tidak! Semua video bebas watermark." },
    { q: "Bagaimana cara memulai?", a: "Buat akun, pilih paket, dan mulai membuat." },
  ]},
  footer: { title: "Siap Membuat?", subtitle: "Bergabunglah dengan ribuan kreator yang menggunakan Seedance 2.0.", cta: "Mulai Membuat Sekarang", multiModal: "Input multi-modal", watermarkFree: "Tanpa watermark", referenceAny: "Referensikan konten apapun" },
};
export default id;
