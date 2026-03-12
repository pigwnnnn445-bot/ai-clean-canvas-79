import { Translations } from "../types";
const tl: Translations = {
  nav: { features: "Mga Tampok", useCases: "Mga Gamit", howItWorks: "Paano Gumagana", pricing: "Presyo", faq: "FAQ", signIn: "Mag-sign In", signOut: "Mag-sign Out" },
  hero: { title: "Seedance", subtitle: "Maranasan ang", subtitleHighlight: "tunay na multi-modal AI video creation", imageToVideo: "Larawan sa Video", textToVideo: "Teksto sa Video", aiModel: "AI Model", images: "Mga Larawan", addEndFrame: "Magdagdag ng huling frame", uploadFirstFrame: "I-upload ang Unang Frame", uploadLastFrame: "I-upload ang Huling Frame", clickToUpload: "I-click para mag-upload o i-drag at i-drop", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Ilarawan kung paano mo gustong i-animate ang iyong larawan...", resolution: "Resolution", duration: "Tagal", aspectRatio: "Aspect Ratio", generate: "Gumawa", generating: "Gumagawa...", cost: "Gastos", credits: "credits", available: "Magagamit", downloadVideo: "I-download ang Video", downloadSuccess: "Matagumpay na na-download ang video", viewHistory: "Tingnan ang Kasaysayan" },
  showcase: { title: "Kumuha ng", titleHighlight: "Inspirasyon", subtitle: "Galugarin ang mga kahanga-hangang halimbawa ng video na ginawa gamit ang Seedance 2.0." },
  features: { title: "Mga Pangunahing Tampok ng Seedance", titleHighlight: "2.0", subtitle: "Isang tunay na kontrolable na multi-modal AI video model.", items: [
    { title: "Multi-Modal na Input", description: "Mag-upload ng hanggang 9 na larawan, 3 video, at 3 audio file." },
    { title: "I-reference ang Kahit Ano", description: "I-reference ang galaw, effects, camera movements gamit ang natural na wika." },
    { title: "Superior na Consistency", description: "Panatilihin ang perpektong consistency para sa mga mukha, damit, at visual styles." },
    { title: "Tumpak na Motion Replication", description: "Mag-upload ng reference video para i-replicate ang kumplikadong choreography." },
    { title: "Video Extension at Editing", description: "I-extend ang mga umiiral na video o i-edit ang mga partikular na segment." },
    { title: "Built-in Audio Generation", description: "Awtomatikong gumawa ng sound effects at background music." },
  ]},
  useCases: { label: "Mga Gamit", title: "Walang Katapusang Posibilidad Para sa Bawat Creator", cta: "Magsimula Na", items: [
    { title: "Advertising at Marketing", desc: "Gumawa ng nakakaakit na promotional content.", tags: ["Product Videos", "Brand Content", "Commercial Ads"] },
    { title: "Creative Storytelling", desc: "Gumawa ng natatanging kwento.", tags: ["Short Films", "Art Projects", "Music Videos"] },
    { title: "Social Media Content", desc: "Gumawa ng nakakaakit na content.", tags: ["Instagram Reels", "TikTok Videos", "YouTube Shorts"] },
    { title: "Motion at Dance Videos", desc: "Mag-upload ng reference choreography.", tags: ["Dance Covers", "Action Sequences", "Choreography"] },
    { title: "Film Pre-Visualization", desc: "I-reference ang film clips.", tags: ["Storyboarding", "Camera Planning", "Concept Proofing"] },
    { title: "Music at Audio Sync", desc: "Mag-upload ng audio tracks.", tags: ["Beat Sync", "Music Videos", "Sound Design"] },
  ]},
  howItWorks: { title: "Paano Gumawa ng AI Videos", cta: "Magsimulang Gumawa", steps: [
    { title: "I-upload ang Iyong Assets", description: "Mag-upload ng mga larawan, video, o audio file bilang mga reference." },
    { title: "Ilarawan ang Iyong Vision", description: "Gamitin ang natural na wika para ilarawan ang gusto mo." },
    { title: "Gumawa at Mag-iterate", description: "Gumawa ng 4-15 segundo na video." },
  ]},
  testimonials: { label: "Mga Testimonya", title: "Minamahal ng mga Creator sa Buong Mundo" },
  pricing: { title: "Presyo", subtitle: "Pumili ng plan na angkop sa iyo.", monthly: "Buwanan", annually: "Taunan", save: "Makatipid ng 50%", perMonth: "/buwan", subscribe: "Mag-subscribe", mostPopular: "Pinakasikat", plans: [
    { name: "Basic", desc: "Para sa mga hobbyist at baguhan", credits: "800 credits/buwan", features: ["Hanggang 80 video/buwan", "Maraming AI model", "Standard na bilis", "Walang watermark", "Commercial license"] },
    { name: "Standard", desc: "Para sa karamihan ng creators", credits: "2,000 credits/buwan", features: ["Hanggang 200 video/buwan", "Maraming AI model", "Priority generation", "Walang watermark", "Priority support", "Commercial license"] },
    { name: "Pro", desc: "Para sa power users", credits: "6,000 credits/buwan", features: ["Hanggang 600 video/buwan", "Maraming AI model", "Pinakamabilis", "Walang watermark", "Expert support", "Commercial license"] },
  ]},
  faq: { title: "Mga Madalas Itanong", contactText: "May tanong pa? Kontakin ang", items: [
    { q: "Ano ang Seedance 2.0?", a: "Isang rebolusyonaryong multi-modal AI video generation model." },
    { q: "Anong input ang sinusuportahan?", a: "Apat na modality: mga larawan, video, audio, at teksto." },
    { q: "Paano gumagana ang video extension?", a: "I-upload ang video at tukuyin ang mga segundo na idadagdag." },
    { q: "Puwede ko bang i-edit ang mga umiiral na video?", a: "Oo! Palitan ang mga karakter, baguhin ang mga aksyon." },
    { q: "Anong haba at resolution ang sinusuportahan?", a: "4-15 segundo na video hanggang 1080p." },
    { q: "May watermark ba?", a: "Wala! Lahat ng video ay walang watermark." },
    { q: "Paano magsimula?", a: "Gumawa ng account, pumili ng plan, at magsimulang gumawa." },
  ]},
  footer: { title: "Handa Nang Gumawa?", subtitle: "Sumali sa libu-libong creator na gumagamit ng Seedance 2.0.", cta: "Magsimulang Gumawa", multiModal: "Multi-modal input", watermarkFree: "Walang watermark", referenceAny: "I-reference ang kahit ano" },
};
export default tl;
