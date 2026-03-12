import { Translations } from "../types";
const tl: Translations = {
  nav: { features: "Mga Feature", useCases: "Mga Gamit", howItWorks: "Paano Gumagana", pricing: "Presyo", faq: "FAQ", signIn: "Mag-sign In", signOut: "Mag-sign Out" },
  hero: { title: "Seedance", subtitle: "Maranasan ang", subtitleHighlight: "tunay na multi-modal na AI video creation", subtitleDesc: "Pagsamahin ang mga larawan, video, audio at teksto upang makabuo ng cinematic na nilalaman na may tumpak na kakayahan sa sanggunian, walang putol na pagpapalawak ng video at natural na kontrol sa wika.", imageToVideo: "Larawan sa Video", textToVideo: "Teksto sa Video", aiModel: "AI Model", images: "Mga Larawan", addEndFrame: "Magdagdag ng huling frame", uploadFirstFrame: "I-upload ang Unang Frame", uploadLastFrame: "I-upload ang Huling Frame", clickToUpload: "I-click upang mag-upload o i-drag", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Ilarawan kung paano mo gustong i-animate ang iyong larawan...", resolution: "Resolution", duration: "Tagal", aspectRatio: "Aspect Ratio", generate: "Gumawa", generating: "Gumagawa...", cost: "Gastos", credits: "credits", available: "Available", downloadVideo: "I-download ang Video", downloadSuccess: "Matagumpay na na-download ang video", viewHistory: "Tingnan ang History", modelDesc20: "Mas matatag na mga paksa, mas maayos na mga transisyon at mga resulta na mas malapit sa handa nang gamitin na video output.", modelDesc15: "Ang paggalaw sa footage ay natural at maayos, ang texture ay pino at makatotohanan, at ang pangkalahatang estilo ay pare-pareho at lubos na pinakintab." },
  showcase: { title: "Maghanap ng", titleHighlight: "Inspirasyon", subtitle: "Tuklasin ang mga kahanga-hangang halimbawa ng video na ginawa gamit ang multi-modal na kakayahan ng Seedance 2.0." },
  features: { title: "Pangunahing Feature ng Seedance", titleHighlight: "2.0", subtitle: "Isang tunay na nakokontrol na multi-modal AI video model.", items: [
    { title: "Multi-Modal Input", description: "Mag-upload ng hanggang 9 na larawan, 3 video at 3 audio file." },
    { title: "I-reference ang Kahit Ano", description: "I-reference ang galaw, effects, at camera movements gamit ang natural na wika." },
    { title: "Superior na Consistency", description: "Panatilihin ang perpektong consistency para sa mga mukha, damit at visual styles." },
    { title: "Tumpak na Motion Replication", description: "Mag-upload ng reference video para kopyahin ang komplikadong choreography." },
    { title: "Video Extension & Editing", description: "Pahabain ang mga kasalukuyang video o i-edit ang mga partikular na segment." },
    { title: "Built-in Audio Generation", description: "Awtomatikong gumawa ng sound effects at background music." },
  ]},
  useCases: { label: "Mga Gamit", title: "Walang Katapusang Posibilidad Para sa Bawat Creator", subtitle: "Mula sa advertising hanggang creative storytelling, tuklasin ang walang katapusang gamit ng AI video", cta: "Magsimula Na", items: [
    { title: "Advertising at Marketing", desc: "Gumawa ng nakakaakit na promotional content.", tags: ["Product Videos", "Brand Content", "Commercial Ads"] },
    { title: "Creative Storytelling", desc: "Gumawa ng natatanging kwento.", tags: ["Short Films", "Art Projects", "Music Videos"] },
    { title: "Social Media Content", desc: "Gumawa ng engaging content.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Motion & Dance Videos", desc: "Mag-upload ng reference choreography.", tags: ["Dance Covers", "Action Sequences", "Choreography"] },
    { title: "Film Pre-visualization", desc: "I-reference ang film clips.", tags: ["Storyboarding", "Camera Planning", "Concept Proofing"] },
    { title: "Music Sync", desc: "Mag-upload ng audio tracks at gumawa ng synchronized videos.", tags: ["Beat Sync", "Music Videos", "Sound Design"] },
  ]},
  howItWorks: { title: "Paano Gumawa ng AI Video", cta: "Magsimulang Gumawa", steps: [
    { title: "I-upload ang mga Asset", description: "Mag-upload ng mga larawan, video o audio files bilang reference." },
    { title: "Ilarawan ang Vision Mo", description: "Gumamit ng natural na wika upang ilarawan ang gusto mo." },
    { title: "Gumawa at Ulitin", description: "Gumawa ng 4-15 segundo na video." },
  ]},
  testimonials: { title: "Minamahal ng mga Creator sa Buong Mundo", subtitle: "Mga creator mula sa buong mundo ang nagbabahagi ng kanilang karanasan sa Seedance 2.0" },
  pricing: { title: "Presyo", subtitle: "Pumili ng tamang plano para sa iyo.", monthly: "Buwanan", annually: "Taunan", save: "Makatipid ng 50%", perMonth: "/buwan", subscribe: "Mag-subscribe", mostPopular: "Pinakasikat", plans: [
    { name: "Basic", desc: "Para sa mga hobbyist at baguhan", credits: "800 credits/buwan", features: ["Hanggang 80 video/buwan", "Maraming AI model", "Standard speed", "Walang watermark", "Commercial license"] },
    { name: "Standard", desc: "Para sa karamihan ng creators", credits: "2,000 credits/buwan", features: ["Hanggang 200 video/buwan", "Maraming AI model", "Priority generation", "Walang watermark", "Priority support", "Commercial license"] },
    { name: "Pro", desc: "Para sa power users", credits: "6,000 credits/buwan", features: ["Hanggang 600 video/buwan", "Maraming AI model", "Pinakamabilis na speed", "Walang watermark", "Expert support", "Commercial license"] },
  ]},
  faq: { title: "Mga Madalas Itanong", contactText: "May tanong pa? Makipag-ugnayan", items: [
    { q: "Ano ang Seedance 2.0?", a: "Isang rebolusyonaryong multi-modal AI video generation model." },
    { q: "Anong mga input ang sinusuportahan?", a: "Apat na modalidad: mga larawan, video, audio at teksto." },
    { q: "Paano gumagana ang video extension?", a: "Mag-upload ng video at tukuyin ang mga segundo na idaragdag." },
    { q: "Maaari ba akong mag-edit ng mga kasalukuyang video?", a: "Oo! Palitan ang mga character, baguhin ang mga aksyon." },
    { q: "Anong tagal at resolution ang sinusuportahan?", a: "4-15 segundong video hanggang 1080p." },
    { q: "May watermark ba sa mga video?", a: "Wala! Lahat ng video ay walang watermark." },
    { q: "Paano magsisimula?", a: "Gumawa ng account, pumili ng plano at magsimulang gumawa." },
  ]},
  footer: { title: "Handa Ka Na Bang Gumawa?", subtitle: "Sumali sa libu-libong creators na gumagamit ng Seedance 2.0.", cta: "Magsimulang Gumawa", multiModal: "Multi-modal input", watermarkFree: "Walang watermark", referenceAny: "I-reference ang kahit ano" },
};
export default tl;
