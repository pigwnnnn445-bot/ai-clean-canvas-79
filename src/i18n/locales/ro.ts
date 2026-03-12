import { Translations } from "../types";
const ro: Translations = {
  nav: { features: "Funcții", useCases: "Cazuri de Utilizare", howItWorks: "Cum Funcționează", pricing: "Prețuri", faq: "Întrebări Frecvente", signIn: "Autentificare", signOut: "Deconectare" },
  hero: { title: "Seedance", subtitle: "Experimentează", subtitleHighlight: "crearea video AI multimodală reală", subtitleDesc: "Combină imagini, videoclipuri, audio și text pentru a genera conținut cinematic cu capabilități precise de referință, extensie video fluidă și control prin limbaj natural.", imageToVideo: "Imagine la Video", textToVideo: "Text la Video", aiModel: "Model AI", images: "Imagini", addEndFrame: "Adaugă primul și ultimul cadru", uploadFirstFrame: "Încarcă Primul Cadru", uploadLastFrame: "Încarcă Ultimul Cadru", clickToUpload: "Click pentru a încărca sau trage și plasează", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Descrie cum vrei să animezi imaginea...", resolution: "Rezoluție", duration: "Durată", aspectRatio: "Raport de Aspect", generate: "Generează", generating: "Se generează...", cost: "Cost", credits: "credite", available: "Disponibil", downloadVideo: "Descarcă Video", downloadSuccess: "Video descărcat cu succes", viewHistory: "Vezi Istoricul", modelDesc20: "Subiecte mai stabile, tranziții mai fluide și rezultate mai aproape de video gata de utilizare.", modelDesc15: "Mișcarea este naturală și fluidă, textura este delicată și realistă, iar stilul general este consistent și foarte rafinat.", generationFailed: "Generare eșuată", generationFailedDesc: "Serverul este ocupat. Încercați din nou mai târziu sau ajustați setările.", retry: "Reîncearcă", generationFailedToast: "Generarea a eșuat. Serverul este ocupat, încercați mai târziu." },
  showcase: { title: "Găsește", titleHighlight: "Inspirație", subtitle: "Explorează exemple video uimitoare create cu capacitățile multimodale ale Seedance 2.0." },
  features: { title: "Funcțiile Cheie Seedance", titleHighlight: "2.0", subtitle: "Un model video AI multimodal cu adevărat controlabil.", items: [
    { title: "Input Multimodal", description: "Încarcă până la 9 imagini, 3 videoclipuri și 3 fișiere audio." },
    { title: "Referință Orice", description: "Referință mișcare, efecte și mișcări ale camerei cu limbaj natural." },
    { title: "Consistență Superioară", description: "Menține o consistență perfectă pentru fețe, îmbrăcăminte și stiluri vizuale." },
    { title: "Replicare Precisă a Mișcării", description: "Încarcă un videoclip de referință pentru a replica o coregrafie complexă." },
    { title: "Extensie și Editare Video", description: "Extinde videoclipurile existente sau editează segmente specifice." },
    { title: "Generare Audio Încorporată", description: "Generează automat efecte sonore și muzică de fundal." },
  ]},
  useCases: { label: "Cazuri de Utilizare", title: "Posibilități Infinite Pentru Fiecare Creator", subtitle: "De la publicitate la povestire creativă, explorează aplicațiile infinite ale video-ului AI", cta: "Începe Acum", items: [
    { title: "Publicitate și Marketing", desc: "Creează conținut promoțional convingător.", tags: ["Video Produs", "Conținut Brand", "Reclame"] },
    { title: "Povestire Creativă", desc: "Creează narațiuni unice cu inputuri multimodale.", tags: ["Scurtmetraje", "Proiecte Artistice", "Videoclipuri"] },
    { title: "Conținut Social Media", desc: "Generează conținut captivant.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Video de Mișcare și Dans", desc: "Încarcă coregrafie de referință.", tags: ["Cover-uri Dans", "Secvențe de Acțiune", "Coregrafie"] },
    { title: "Pre-vizualizare Film", desc: "Referință la clipuri de film.", tags: ["Storyboarding", "Planificare Cameră", "Validare Concept"] },
    { title: "Sincronizare Muzicală", desc: "Încarcă piste audio și creează videouri sincronizate.", tags: ["Sync Ritmic", "Videoclipuri", "Design Sonor"] },
  ]},
  howItWorks: { title: "Cum să Faci un Video AI", cta: "Începe să Creezi", steps: [
    { title: "Încarcă Materialele Tale", description: "Încarcă imagini, videoclipuri sau fișiere audio ca referințe." },
    { title: "Descrie-ți Viziunea", description: "Folosește limbaj natural pentru a descrie ce vrei." },
    { title: "Generează și Iterează", description: "Generează un video de 4-15 secunde." },
  ]},
  testimonials: { title: "Iubit de Creatori din Întreaga Lume", subtitle: "Creatori din întreaga lume își împărtășesc experiența cu Seedance 2.0" },
  pricing: { title: "Prețuri", subtitle: "Alege planul potrivit pentru tine.", monthly: "Lunar", annually: "Anual", save: "Economisește 50%", perMonth: "/lună", subscribe: "Abonează-te", mostPopular: "Cel mai popular", plans: [
    { name: "Basic", desc: "Pentru amatori și începători", credits: "800 credite/lună", features: ["Până la 80 de videoclipuri/lună", "Mai multe modele AI", "Viteză standard", "Fără filigran", "Licență comercială"] },
    { name: "Standard", desc: "Pentru majoritatea creatorilor", credits: "2.000 credite/lună", features: ["Până la 200 de videoclipuri/lună", "Mai multe modele AI", "Generare prioritară", "Fără filigran", "Suport prioritar", "Licență comercială"] },
    { name: "Pro", desc: "Pentru utilizatori avansați", credits: "6.000 credite/lună", features: ["Până la 600 de videoclipuri/lună", "Mai multe modele AI", "Cea mai rapidă viteză", "Fără filigran", "Suport specializat", "Licență comercială"] },
  ]},
  faq: { title: "Întrebări Frecvente", contactText: "Ai întrebări? Contactează", items: [
    { q: "Ce este Seedance 2.0?", a: "Un model revoluționar de generare video AI multimodal." },
    { q: "Ce inputuri sunt suportate?", a: "Patru modalități: imagini, videoclipuri, audio și text." },
    { q: "Cum funcționează extensia video?", a: "Încarcă un videoclip și specifică secundele de adăugat." },
    { q: "Pot edita videoclipuri existente?", a: "Da! Schimbă personajele, modifică acțiunile." },
    { q: "Ce durate și rezoluții sunt suportate?", a: "Videoclipuri de 4-15 secunde până la 1080p." },
    { q: "Există filigrane pe videoclipuri?", a: "Nu! Toate videoclipurile sunt fără filigran." },
    { q: "Cum încep?", a: "Creează un cont, alege un plan și începe să creezi." },
  ]},
  footer: { title: "Ești Gata să Creezi?", subtitle: "Alătură-te miilor de creatori care folosesc Seedance 2.0.", cta: "Începe să Creezi", multiModal: "Input multimodal", watermarkFree: "Fără filigran", referenceAny: "Referință orice" },
};
export default ro;
