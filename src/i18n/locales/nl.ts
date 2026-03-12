import { Translations } from "../types";
const nl: Translations = {
  nav: { features: "Functies", useCases: "Toepassingen", howItWorks: "Hoe Het Werkt", pricing: "Prijzen", faq: "FAQ", signIn: "Inloggen", signOut: "Uitloggen" },
  hero: { title: "Seedance", subtitle: "Ervaar", subtitleHighlight: "echte multimodale AI-videocreatie", imageToVideo: "Afbeelding naar Video", textToVideo: "Tekst naar Video", aiModel: "AI Model", images: "Afbeeldingen", addEndFrame: "Eindframe toevoegen", uploadFirstFrame: "Eerste Frame Uploaden", uploadLastFrame: "Laatste Frame Uploaden", clickToUpload: "Klik om te uploaden of sleep en zet neer", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Beschrijf hoe je je afbeelding wilt animeren...", resolution: "Resolutie", duration: "Duur", aspectRatio: "Beeldverhouding", generate: "Genereren", generating: "Bezig met genereren...", cost: "Kosten", credits: "credits", available: "Beschikbaar", downloadVideo: "Video Downloaden", downloadSuccess: "Video succesvol gedownload", viewHistory: "Geschiedenis Bekijken" },
  showcase: { title: "Laat je", titleHighlight: "Inspireren", subtitle: "Ontdek verbluffende videovoorbeelden gemaakt met de multimodale mogelijkheden van Seedance 2.0." },
  features: { title: "Belangrijkste Functies van Seedance", titleHighlight: "2.0", subtitle: "Een echt controleerbaar multimodaal AI-videomodel.", items: [
    { title: "Multimodale Invoer", description: "Upload tot 9 afbeeldingen, 3 video's en 3 audiobestanden. Combineer vrij." },
    { title: "Verwijs naar Alles", description: "Verwijs naar beweging, effecten, camerabewegingen, personages en scènes met natuurlijke taal." },
    { title: "Superieure Consistentie", description: "Behoud perfecte consistentie voor gezichten, kleding, tekst, scènes en visuele stijlen." },
    { title: "Nauwkeurige Bewegingsreplicatie", description: "Upload een referentievideo om complexe choreografieën en camerabewegingen te repliceren." },
    { title: "Video-uitbreiding & Bewerking", description: "Breid bestaande video's uit, voeg clips samen of bewerk specifieke segmenten." },
    { title: "Ingebouwde Audiogeneratie", description: "Genereer automatisch contextbewuste geluidseffecten en achtergrondmuziek." },
  ]},
  useCases: { label: "Toepassingen", title: "Eindeloze Mogelijkheden Voor Elke Creator", cta: "Nu Beginnen", items: [
    { title: "Reclame & Marketing", desc: "Maak overtuigende promotionele content.", tags: ["Productvideo's", "Merkcontent", "Commerciële Advertenties"] },
    { title: "Creatief Verhalen Vertellen", desc: "Maak unieke verhalen met multimodale invoer.", tags: ["Korte Films", "Kunstprojecten", "Muziekvideo's"] },
    { title: "Social Media Content", desc: "Genereer aansprekende content met trending templates.", tags: ["Instagram Reels", "TikTok Video's", "YouTube Shorts"] },
    { title: "Beweging & Dans Video's", desc: "Upload referentie-choreografie en pas toe op elk personage.", tags: ["Danscovers", "Actiesequenties", "Choreografie"] },
    { title: "Film Pre-visualisatie", desc: "Verwijs naar filmclips voor camerabewegingen en visuele effecten.", tags: ["Storyboarding", "Cameraplanning", "Conceptbewijs"] },
    { title: "Muziek & Audio Sync", desc: "Upload audiotracks en maak perfect gesynchroniseerde video's.", tags: ["Beat Sync", "Muziekvideo's", "Geluidsontwerp"] },
  ]},
  howItWorks: { title: "Hoe Maak je AI-video's", cta: "Begin Nu Met Maken", steps: [
    { title: "Upload Je Assets", description: "Upload afbeeldingen, video's of audiobestanden als referenties." },
    { title: "Beschrijf Je Visie", description: "Gebruik natuurlijke taal om te beschrijven wat je wilt." },
    { title: "Genereer & Itereer", description: "Genereer video's van 4-15 seconden. Breid uit, bewerk of verfijn." },
  ]},
  testimonials: { label: "Getuigenissen", title: "Geliefd bij Creators Wereldwijd" },
  pricing: { title: "Prijzen", subtitle: "Kies het plan dat het beste bij je past.", monthly: "Maandelijks", annually: "Jaarlijks", save: "Bespaar 50%", perMonth: "/maand", subscribe: "Abonneren", mostPopular: "Meest Populair", plans: [
    { name: "Basis", desc: "Ideaal voor hobbyisten en beginners", credits: "800 credits/maand", features: ["Tot 80 video's/maand", "Meerdere AI-modellen", "Standaard snelheid", "Geen watermerk", "Commerciële licentie"] },
    { name: "Standaard", desc: "Perfect voor de meeste creators", credits: "2.000 credits/maand", features: ["Tot 200 video's/maand", "Meerdere AI-modellen", "Prioriteitsgeneratie", "Geen watermerk", "Prioriteitsondersteuning", "Commerciële licentie"] },
    { name: "Pro", desc: "Ideaal voor power users", credits: "6.000 credits/maand", features: ["Tot 600 video's/maand", "Meerdere AI-modellen", "Snelste generatie", "Geen watermerk", "Expertondersteuning", "Commerciële licentie"] },
  ]},
  faq: { title: "Veelgestelde Vragen", contactText: "Nog vragen? Neem contact op met", items: [
    { q: "Wat is Seedance 2.0?", a: "Een revolutionair multimodaal AI-videogeneratiemodel." },
    { q: "Welke invoer wordt ondersteund?", a: "Vier modaliteiten: tot 9 afbeeldingen, 3 video's (≤15s), 3 audiobestanden (MP3, ≤15s) en tekstprompts." },
    { q: "Hoe werkt video-uitbreiding?", a: "Upload je video en geef aan hoeveel seconden je wilt toevoegen." },
    { q: "Kan ik bestaande video's bewerken?", a: "Ja! Vervang personages, wijzig acties, voeg toe of verwijder elementen." },
    { q: "Welke lengtes en resoluties worden ondersteund?", a: "Video's van 4 tot 15 seconden met resoluties tot 1080p." },
    { q: "Zijn er watermerken op de video's?", a: "Nee! Alle video's zijn watermerkvrij." },
    { q: "Hoe begin ik?", a: "Maak een account aan, kies een plan en begin met maken." },
  ]},
  footer: { title: "Klaar om te Maken?", subtitle: "Sluit je aan bij duizenden creators die Seedance 2.0 gebruiken.", cta: "Begin Nu Met Maken", multiModal: "Multimodale invoer", watermarkFree: "Zonder watermerk", referenceAny: "Verwijs naar alles" },
};
export default nl;
