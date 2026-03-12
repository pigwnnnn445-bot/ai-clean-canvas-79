import { Translations } from "../types";
const ms: Translations = {
  nav: { features: "Ciri-ciri", useCases: "Kes Penggunaan", howItWorks: "Cara Ia Berfungsi", pricing: "Harga", faq: "Soalan Lazim", signIn: "Log Masuk", signOut: "Log Keluar" },
  hero: { title: "Seedance", subtitle: "Alami", subtitleHighlight: "penciptaan video AI multi-modal sebenar", subtitleDesc: "Gabungkan imej, video, audio dan teks untuk menjana kandungan sinematik dengan keupayaan rujukan tepat, sambungan video lancar dan kawalan bahasa semula jadi.", imageToVideo: "Imej ke Video", textToVideo: "Teks ke Video", aiModel: "Model AI", images: "Imej", addEndFrame: "Tambah bingkai akhir", uploadFirstFrame: "Muat Naik Bingkai Pertama", uploadLastFrame: "Muat Naik Bingkai Terakhir", clickToUpload: "Klik untuk muat naik atau seret dan lepas", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Huraikan bagaimana anda mahu menganimasikan imej anda...", resolution: "Resolusi", duration: "Tempoh", aspectRatio: "Nisbah Aspek", generate: "Jana", generating: "Menjana...", cost: "Kos", credits: "kredit", available: "Tersedia", downloadVideo: "Muat Turun Video", downloadSuccess: "Video berjaya dimuat turun", viewHistory: "Lihat Sejarah", modelDesc20: "Subjek lebih stabil, peralihan lebih lancar, dan hasil lebih hampir kepada video sedia guna.", modelDesc15: "Pergerakan dalam rakaman adalah semula jadi dan lancar, teksturnya halus dan realistik, dan gaya keseluruhan konsisten dan sangat digilap." },
  showcase: { title: "Dapatkan", titleHighlight: "Inspirasi", subtitle: "Terokai contoh video menakjubkan yang dicipta dengan keupayaan multi-modal Seedance 2.0." },
  features: { title: "Ciri Utama Seedance", titleHighlight: "2.0", subtitle: "Model video AI multi-modal yang benar-benar boleh dikawal.", items: [
    { title: "Input Multi-Modal", description: "Muat naik sehingga 9 imej, 3 video dan 3 fail audio." },
    { title: "Rujuk Apa Sahaja", description: "Rujuk gerakan, kesan, pergerakan kamera dengan bahasa semula jadi." },
    { title: "Konsistensi Unggul", description: "Kekalkan konsistensi sempurna untuk wajah, pakaian dan gaya visual." },
    { title: "Replikasi Gerakan Tepat", description: "Muat naik video rujukan untuk mereplikasi koreografi kompleks." },
    { title: "Sambungan & Penyuntingan Video", description: "Sambungkan video sedia ada atau sunting segmen tertentu." },
    { title: "Penjanaan Audio Terbina", description: "Jana kesan bunyi dan muzik latar secara automatik." },
  ]},
  useCases: { label: "Kes Penggunaan", title: "Kemungkinan Tanpa Had Untuk Setiap Pencipta", cta: "Mulakan Sekarang", items: [
    { title: "Pengiklanan & Pemasaran", desc: "Cipta kandungan promosi yang menarik.", tags: ["Video Produk", "Kandungan Jenama", "Iklan Komersial"] },
    { title: "Penceritaan Kreatif", desc: "Cipta naratif unik.", tags: ["Filem Pendek", "Projek Seni", "Video Muzik"] },
    { title: "Kandungan Media Sosial", desc: "Jana kandungan menarik.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Video Gerakan & Tarian", desc: "Muat naik koreografi rujukan.", tags: ["Cover Tarian", "Urutan Aksi", "Koreografi"] },
    { title: "Pra-Visualisasi Filem", desc: "Rujuk klip filem.", tags: ["Storyboarding", "Perancangan Kamera", "Pembuktian Konsep"] },
    { title: "Penyegerakan Muzik", desc: "Muat naik trek audio dan cipta video terseger.", tags: ["Beat Sync", "Video Muzik", "Reka Bentuk Bunyi"] },
  ]},
  howItWorks: { title: "Cara Mencipta Video AI", cta: "Mula Mencipta", steps: [
    { title: "Muat Naik Aset", description: "Muat naik imej, video atau fail audio sebagai rujukan." },
    { title: "Huraikan Visi Anda", description: "Gunakan bahasa semula jadi untuk menghuraikan apa yang anda mahu." },
    { title: "Jana & Ulang", description: "Jana video 4-15 saat." },
  ]},
  testimonials: { label: "Testimoni", title: "Digemari Pencipta di Seluruh Dunia" },
  pricing: { title: "Harga", subtitle: "Pilih pelan yang sesuai.", monthly: "Bulanan", annually: "Tahunan", save: "Jimat 50%", perMonth: "/bulan", subscribe: "Langgan", mostPopular: "Paling Popular", plans: [
    { name: "Asas", desc: "Untuk hobi dan pemula", credits: "800 kredit/bulan", features: ["Sehingga 80 video/bulan", "Pelbagai model AI", "Kelajuan standard", "Tanpa tera air", "Lesen komersial"] },
    { name: "Standard", desc: "Untuk kebanyakan pencipta", credits: "2,000 kredit/bulan", features: ["Sehingga 200 video/bulan", "Pelbagai model AI", "Penjanaan keutamaan", "Tanpa tera air", "Sokongan keutamaan", "Lesen komersial"] },
    { name: "Pro", desc: "Untuk pengguna mahir", credits: "6,000 kredit/bulan", features: ["Sehingga 600 video/bulan", "Pelbagai model AI", "Kelajuan terpantas", "Tanpa tera air", "Sokongan pakar", "Lesen komersial"] },
  ]},
  faq: { title: "Soalan Lazim", contactText: "Ada soalan? Hubungi", items: [
    { q: "Apa itu Seedance 2.0?", a: "Model penjanaan video AI multi-modal revolusioner." },
    { q: "Input apa yang disokong?", a: "Empat modaliti: imej, video, audio dan teks." },
    { q: "Bagaimana sambungan video berfungsi?", a: "Muat naik video dan nyatakan saat untuk ditambah." },
    { q: "Bolehkah saya menyunting video sedia ada?", a: "Ya! Tukar watak, ubah aksi, tambah atau buang elemen." },
    { q: "Tempoh dan resolusi apa yang disokong?", a: "Video 4-15 saat sehingga 1080p." },
    { q: "Ada tera air pada video?", a: "Tidak! Semua video tanpa tera air." },
    { q: "Bagaimana untuk bermula?", a: "Buat akaun, pilih pelan dan mula mencipta." },
  ]},
  footer: { title: "Bersedia untuk Mencipta?", subtitle: "Sertai ribuan pencipta menggunakan Seedance 2.0.", cta: "Mula Mencipta", multiModal: "Input multi-modal", watermarkFree: "Tanpa tera air", referenceAny: "Rujuk apa sahaja" },
};
export default ms;
