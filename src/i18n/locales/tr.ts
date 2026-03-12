import { Translations } from "../types";
const tr: Translations = {
  nav: { features: "Özellikler", useCases: "Kullanım Alanları", howItWorks: "Nasıl Çalışır", pricing: "Fiyatlandırma", faq: "SSS", signIn: "Giriş Yap", signOut: "Çıkış Yap" },
  hero: { title: "Seedance", subtitle: "Deneyimleyin", subtitleHighlight: "gerçek çok modlu AI video oluşturma", subtitleDesc: "Hassas referans yetenekleri, kesintisiz video uzantısı ve doğal dil kontrolü ile sinematik içerik oluşturmak için görüntüleri, videoları, sesi ve metni birleştirin.", imageToVideo: "Görselden Videoya", textToVideo: "Metinden Videoya", aiModel: "AI Model", images: "Görseller", addEndFrame: "Son kare ekle", uploadFirstFrame: "İlk Kareyi Yükle", uploadLastFrame: "Son Kareyi Yükle", clickToUpload: "Yüklemek için tıklayın veya sürükle bırakın", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Görselinizi nasıl canlandırmak istediğinizi açıklayın...", resolution: "Çözünürlük", duration: "Süre", aspectRatio: "En Boy Oranı", generate: "Oluştur", generating: "Oluşturuluyor...", cost: "Maliyet", credits: "kredi", available: "Mevcut", downloadVideo: "Videoyu İndir", downloadSuccess: "Video başarıyla indirildi", viewHistory: "Geçmişi Gör", modelDesc20: "Daha kararlı konular, daha akıcı geçişler ve kullanıma hazır video çıktısına daha yakın sonuçlar.", modelDesc15: "Görüntüdeki hareket doğal ve akıcı, doku ince ve gerçekçi, genel stil tutarlı ve son derece cilalı." },
  showcase: { title: "Bulun", titleHighlight: "İlham", subtitle: "Seedance 2.0'ın çok modlu yetenekleriyle oluşturulmuş muhteşem video örneklerini keşfedin." },
  features: { title: "Seedance'in Temel Özellikleri", titleHighlight: "2.0", subtitle: "Gerçekten kontrol edilebilir çok modlu bir AI video modeli.", items: [
    { title: "Çok Modlu Giriş", description: "En fazla 9 resim, 3 video ve 3 ses dosyası yükleyin." },
    { title: "Her Şeye Referans Verin", description: "Doğal dilde hareketi, efektleri ve kamera hareketlerini referans alın." },
    { title: "Üstün Tutarlılık", description: "Yüzler, giyim ve görsel stiller için mükemmel tutarlılığı koruyun." },
    { title: "Hassas Hareket Çoğaltma", description: "Karmaşık koreografiyi çoğaltmak için bir referans video yükleyin." },
    { title: "Video Uzantısı ve Düzenleme", description: "Mevcut videoları uzatın veya belirli segmentleri düzenleyin." },
    { title: "Yerleşik Ses Üretimi", description: "Ses efektlerini ve arka plan müziğini otomatik olarak oluşturun." },
  ]},
  useCases: { label: "Kullanım Alanları", title: "Her Yaratıcı İçin Sonsuz Olasılıklar", subtitle: "Reklamdan yaratıcı hikaye anlatımına, AI videonun sonsuz uygulamalarını keşfedin", cta: "Hemen Başlayın", items: [
    { title: "Reklamcılık & Pazarlama", desc: "Etkileyici tanıtım içeriği oluşturun.", tags: ["Ürün Videoları", "Marka İçeriği", "Reklamlar"] },
    { title: "Yaratıcı Hikaye Anlatımı", desc: "Çok modlu girişlerle benzersiz hikayeler oluşturun.", tags: ["Kısa Filmler", "Sanat Projeleri", "Müzik Videoları"] },
    { title: "Sosyal Medya İçeriği", desc: "İlgi çekici içerik oluşturun.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Hareket & Dans Videoları", desc: "Referans koreografi yükleyin.", tags: ["Dans Cover", "Aksiyon Sahneleri", "Koreografi"] },
    { title: "Film Ön Görselleştirme", desc: "Film kliplerini referans alın.", tags: ["Storyboarding", "Kamera Planlama", "Konsept Kanıtlama"] },
    { title: "Müzik Senkronizasyonu", desc: "Ses parçaları yükleyin ve senkronize videolar oluşturun.", tags: ["Beat Sync", "Müzik Videoları", "Ses Tasarımı"] },
  ]},
  howItWorks: { title: "Nasıl AI Video Oluşturulur", cta: "Oluşturmaya Başlayın", steps: [
    { title: "Varlıklarınızı Yükleyin", description: "Referans olarak resim, video veya ses dosyaları yükleyin." },
    { title: "Vizyonunuzu Açıklayın", description: "Ne istediğinizi açıklamak için doğal dil kullanın." },
    { title: "Oluşturun ve Yineleyin", description: "4-15 saniyelik bir video oluşturun." },
  ]},
  testimonials: { title: "Dünya Genelinde Yaratıcılar Tarafından Seviliyor", subtitle: "Dünya çapındaki içerik üreticileri Seedance 2.0 deneyimlerini paylaşıyor" },
  pricing: { title: "Fiyatlandırma", subtitle: "Size uygun planı seçin.", monthly: "Aylık", annually: "Yıllık", save: "%50 Tasarruf Edin", perMonth: "/ay", subscribe: "Abone Ol", mostPopular: "En Popüler", plans: [
    { name: "Temel", desc: "Hobiciler ve yeni başlayanlar için", credits: "800 kredi/ay", features: ["Ayda 80 adede kadar video", "Çoklu AI modelleri", "Standart hız", "Filigran yok", "Ticari lisans"] },
    { name: "Standart", desc: "Çoğu içerik üreticisi için", credits: "2.000 kredi/ay", features: ["Ayda 200 adede kadar video", "Çoklu AI modelleri", "Öncelikli oluşturma", "Filigran yok", "Öncelikli destek", "Ticari lisans"] },
    { name: "Pro", desc: "Güçlü kullanıcılar için", credits: "6.000 kredi/ay", features: ["Ayda 600 adede kadar video", "Çoklu AI modelleri", "En hızlı hız", "Filigran yok", "Uzman desteği", "Ticari lisans"] },
  ]},
  faq: { title: "Sıkça Sorulan Sorular", contactText: "Başka sorunuz mu var? İletişime geçin", items: [
    { q: "Seedance 2.0 nedir?", a: "Devrim niteliğinde çok modlu bir AI video oluşturma modeli." },
    { q: "Hangi girişler destekleniyor?", a: "Dört modalite: resimler, videolar, ses ve metin." },
    { q: "Video uzantısı nasıl çalışır?", a: "Bir video yükleyin ve eklenecek saniyeleri belirtin." },
    { q: "Mevcut videoları düzenleyebilir miyim?", a: "Evet! Karakterleri değiştirin, eylemleri değiştirin." },
    { q: "Hangi süreler ve çözünürlükler destekleniyor?", a: "1080p'ye kadar 4-15 saniyelik videolar." },
    { q: "Videolarda filigran var mı?", a: "Hayır! Tüm videolar filigransızdır." },
    { q: "Nasıl başlarım?", a: "Bir hesap oluşturun, bir plan seçin ve oluşturmaya başlayın." },
  ]},
  footer: { title: "Oluşturmaya Hazır mısınız?", subtitle: "Seedance 2.0'ı kullanan binlerce içerik üreticiye katılın.", cta: "Oluşturmaya Başlayın", multiModal: "Çok modlu giriş", watermarkFree: "Filigran yok", referenceAny: "Her şeye referans verin" },
};
export default tr;
