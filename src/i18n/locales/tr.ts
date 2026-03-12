import { Translations } from "../types";
const tr: Translations = {
  nav: { features: "Özellikler", useCases: "Kullanım Alanları", howItWorks: "Nasıl Çalışır", pricing: "Fiyatlandırma", faq: "SSS", signIn: "Giriş Yap", signOut: "Çıkış Yap" },
  hero: { title: "Seedance", subtitle: "Deneyimleyin", subtitleHighlight: "gerçek çok modlu AI video oluşturma", subtitleDesc: "Hassas referans yetenekleri, kesintisiz video uzantısı ve doğal dil kontrolü ile sinematik içerik oluşturmak için görüntüleri, videoları, sesi ve metni birleştirin.", imageToVideo: "Görselden Videoya", textToVideo: "Metinden Videoya", aiModel: "AI Model", images: "Görseller", addEndFrame: "Son kare ekle", uploadFirstFrame: "İlk Kareyi Yükle", uploadLastFrame: "Son Kareyi Yükle", clickToUpload: "Yüklemek için tıklayın veya sürükle bırakın", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Görselinizi nasıl canlandırmak istediğinizi açıklayın...", resolution: "Çözünürlük", duration: "Süre", aspectRatio: "En Boy Oranı", generate: "Oluştur", generating: "Oluşturuluyor...", cost: "Maliyet", credits: "kredi", available: "Mevcut", downloadVideo: "Videoyu İndir", downloadSuccess: "Video başarıyla indirildi", viewHistory: "Geçmişi Gör", modelDesc20: "Daha kararlı konular, daha akıcı geçişler ve kullanıma hazır video çıktısına daha yakın sonuçlar.", modelDesc15: "Görüntüdeki hareket doğal ve akıcı, doku ince ve gerçekçi, genel stil tutarlı ve son derece cilalı." },
  showcase: { title: "", titleHighlight: "İlham Alın", subtitle: "Seedance 2.0'ın çok modlu yetenekleriyle oluşturulan etkileyici video örneklerini keşfedin." },
  features: { title: "Seedance Temel Özellikleri", titleHighlight: "2.0", subtitle: "Gerçekten kontrol edilebilir çok modlu AI video modeli.", items: [
    { title: "Çok Modlu Giriş", description: "9 görsel, 3 video ve 3 ses dosyası yükleyin." },
    { title: "Her Şeye Referans", description: "Doğal dil kullanarak hareket, efekt ve kamera hareketlerine referans verin." },
    { title: "Üstün Tutarlılık", description: "Yüzler, kıyafetler, metin ve görsel stiller için mükemmel tutarlılık." },
    { title: "Hassas Hareket Replikasyonu", description: "Karmaşık koreografileri replike etmek için referans video yükleyin." },
    { title: "Video Uzatma ve Düzenleme", description: "Mevcut videoları uzatın veya belirli bölümleri düzenleyin." },
    { title: "Dahili Ses Üretimi", description: "Otomatik ses efektleri ve arka plan müziği oluşturun." },
  ]},
  useCases: { label: "Kullanım Alanları", title: "Her Yaratıcı İçin Sonsuz Olasılıklar", cta: "Hemen Başlayın", items: [
    { title: "Reklam ve Pazarlama", desc: "Etkileyici tanıtım içeriği oluşturun.", tags: ["Ürün Videoları", "Marka İçeriği", "Reklamlar"] },
    { title: "Yaratıcı Hikaye Anlatımı", desc: "Çok modlu girdilerle benzersiz hikayeler oluşturun.", tags: ["Kısa Filmler", "Sanat Projeleri", "Müzik Videoları"] },
    { title: "Sosyal Medya İçeriği", desc: "Dikkat çekici içerik oluşturun.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Hareket ve Dans Videoları", desc: "Referans koreografi yükleyin.", tags: ["Dans Cover", "Aksiyon Sekansları", "Koreografi"] },
    { title: "Film Ön Görselleştirme", desc: "Film kliplerini referans alın.", tags: ["Storyboarding", "Kamera Planlaması", "Konsept Doğrulama"] },
    { title: "Müzik Senkronizasyonu", desc: "Ses parçaları yükleyin ve senkronize videolar oluşturun.", tags: ["Beat Sync", "Müzik Videoları", "Ses Tasarımı"] },
  ]},
  howItWorks: { title: "AI Videoları Nasıl Oluşturulur", cta: "Şimdi Oluşturmaya Başlayın", steps: [
    { title: "Varlıklarınızı Yükleyin", description: "Referans olarak görsel, video veya ses dosyaları yükleyin." },
    { title: "Vizyonunuzu Tanımlayın", description: "Ne istediğinizi doğal dille açıklayın." },
    { title: "Oluşturun ve İterasyon Yapın", description: "4-15 saniyelik video oluşturun." },
  ]},
  testimonials: { label: "Referanslar", title: "Dünya Genelinde Yaratıcılar Tarafından Seviliyor" },
  pricing: { title: "Fiyatlandırma", subtitle: "Size en uygun planı seçin.", monthly: "Aylık", annually: "Yıllık", save: "%50 Tasarruf", perMonth: "/ay", subscribe: "Abone Ol", mostPopular: "En Popüler", plans: [
    { name: "Temel", desc: "Amatörler ve yeni başlayanlar için", credits: "800 kredi/ay", features: ["Aylık 80 videoya kadar", "Birden fazla AI modeli", "Standart hız", "Filigransız", "Ticari lisans"] },
    { name: "Standart", desc: "Çoğu yaratıcı için ideal", credits: "2.000 kredi/ay", features: ["Aylık 200 videoya kadar", "Birden fazla AI modeli", "Öncelikli oluşturma", "Filigransız", "Öncelikli destek", "Ticari lisans"] },
    { name: "Pro", desc: "İleri düzey kullanıcılar için", credits: "6.000 kredi/ay", features: ["Aylık 600 videoya kadar", "Birden fazla AI modeli", "En hızlı oluşturma", "Filigransız", "Uzman desteği", "Ticari lisans"] },
  ]},
  faq: { title: "Sıkça Sorulan Sorular", contactText: "Sorunuz mu var? İletişime geçin", items: [
    { q: "Seedance 2.0 nedir?", a: "Devrim niteliğinde çok modlu AI video oluşturma modeli." },
    { q: "Hangi girdiler destekleniyor?", a: "Dört mod: görsel, video, ses ve metin." },
    { q: "Video uzatma nasıl çalışır?", a: "Video yükleyin ve eklenecek saniyeleri belirtin." },
    { q: "Mevcut videoları düzenleyebilir miyim?", a: "Evet! Karakterleri değiştirin, eylemleri düzenleyin." },
    { q: "Hangi süreler ve çözünürlükler destekleniyor?", a: "4-15 saniye video, 1080p'ye kadar." },
    { q: "Videolarda filigran var mı?", a: "Hayır! Tüm videolar filigransız." },
    { q: "Nasıl başlarım?", a: "Hesap oluşturun, plan seçin ve oluşturmaya başlayın." },
  ]},
  footer: { title: "Oluşturmaya Hazır mısınız?", subtitle: "Seedance 2.0 kullanan binlerce yaratıcıya katılın.", cta: "Şimdi Oluşturmaya Başlayın", multiModal: "Çok modlu giriş", watermarkFree: "Filigransız", referenceAny: "Her şeye referans" },
};
export default tr;
