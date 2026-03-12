import { Translations } from "../types";
const nl: Translations = {
  nav: { features: "Functies", useCases: "Toepassingen", howItWorks: "Hoe Het Werkt", pricing: "Prijzen", faq: "FAQ", signIn: "Inloggen", signOut: "Uitloggen" },
  hero: { title: "Seedance", subtitle: "Ervaar", subtitleHighlight: "echte multimodale AI-videocreatie", subtitleDesc: "Combineer afbeeldingen, video's, audio en tekst om cinematische content te genereren met nauwkeurige referentiemogelijkheden, naadloze video-extensie en natuurlijke taalbesturing.", imageToVideo: "Afbeelding naar Video", textToVideo: "Tekst naar Video", aiModel: "AI Model", images: "Afbeeldingen", addEndFrame: "Eerste & laatste frame toevoegen", uploadFirstFrame: "Eerste Frame Uploaden", uploadLastFrame: "Laatste Frame Uploaden", clickToUpload: "Klik om te uploaden of sleep", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Beschrijf hoe je je afbeelding wilt animeren...", resolution: "Resolutie", duration: "Duur", aspectRatio: "Beeldverhouding", generate: "Genereren", generating: "Genereren...", cost: "Kosten", credits: "credits", available: "Beschikbaar", downloadVideo: "Video Downloaden", downloadSuccess: "Video succesvol gedownload", viewHistory: "Geschiedenis Bekijken", modelDesc20: "Stabielere onderwerpen, vloeiendere overgangen en resultaten dichter bij gebruiksklare video-output.", modelDesc15: "De beweging in het beeldmateriaal is natuurlijk en vloeiend, de textuur is fijn en realistisch, en de algehele stijl is consistent en zeer verfijnd.", generationFailed: "Generatie mislukt", generationFailedDesc: "De server is momenteel bezet. Probeer het later opnieuw of pas uw instellingen aan.", retry: "Opnieuw proberen", generationFailedToast: "Generatie mislukt. De server is bezet, probeer het later opnieuw." },
  showcase: { title: "Vind", titleHighlight: "Inspiratie", subtitle: "Ontdek verbluffende videovoorbeelden gemaakt met de multimodale mogelijkheden van Seedance 2.0." },
  features: { title: "Seedance Belangrijkste Functies", titleHighlight: "2.0", subtitle: "Een echt controleerbaar multimodale AI-videomodel.", items: [
    { title: "Multimodale Invoer", description: "Upload tot 9 afbeeldingen, 3 video's en 3 audiobestanden." },
    { title: "Referentie Alles", description: "Verwijs naar beweging, effecten en camerabewegingen in natuurlijke taal." },
    { title: "Superieure Consistentie", description: "Behoud perfecte consistentie voor gezichten, kleding en visuele stijlen." },
    { title: "Nauwkeurige Bewegingsreplicatie", description: "Upload een referentievideo om complexe choreografie te repliceren." },
    { title: "Video-extensie & Bewerking", description: "Verleng bestaande video's of bewerk specifieke segmenten." },
    { title: "Ingebouwde Audiogeneratie", description: "Genereer automatisch geluidseffecten en achtergrondmuziek." },
  ]},
  useCases: { label: "Toepassingen", title: "Eindeloze Mogelijkheden Voor Elke Creator", subtitle: "Van reclame tot creatief storytelling, ontdek de eindeloze toepassingen van AI-video", cta: "Nu Beginnen", items: [
    { title: "Reclame & Marketing", desc: "Maak overtuigende promotionele content.", tags: ["Productvideo's", "Merkcontent", "Commerciële Advertenties"] },
    { title: "Creatief Verhalen Vertellen", desc: "Maak unieke verhalen met multimodale invoer.", tags: ["Korte Films", "Kunstprojecten", "Muziekvideo's"] },
    { title: "Social Media Content", desc: "Genereer boeiende content.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Beweging & Dans Video's", desc: "Upload referentie choreografie.", tags: ["Dance Covers", "Actiescènes", "Choreografie"] },
    { title: "Film Pre-visualisatie", desc: "Verwijs naar filmclips.", tags: ["Storyboarding", "Camera Planning", "Concept Bewijs"] },
    { title: "Muziek Synchronisatie", desc: "Upload audiotracks en maak gesynchroniseerde video's.", tags: ["Beat Sync", "Muziekvideo's", "Geluidsontwerp"] },
  ]},
  howItWorks: { title: "Hoe Maak Je Een AI Video", cta: "Begin Met Creëren", steps: [
    { title: "Upload Uw Bestanden", description: "Upload afbeeldingen, video's of audiobestanden als referentie." },
    { title: "Beschrijf Uw Visie", description: "Gebruik natuurlijke taal om te beschrijven wat u wilt." },
    { title: "Genereer en Herhaal", description: "Genereer een video van 4-15 seconden." },
  ]},
  testimonials: { title: "Geliefd bij Creators Wereldwijd", subtitle: "Creators van over de hele wereld delen hun ervaring met Seedance 2.0" },
  pricing: { title: "Prijzen", subtitle: "Kies het plan dat bij u past.", monthly: "Maandelijks", annually: "Jaarlijks", save: "Bespaar 50%", perMonth: "/maand", subscribe: "Abonneren", mostPopular: "Meest Populair", plans: [
    { name: "Basic", desc: "Voor hobbyisten en beginners", credits: "800 credits/maand", features: ["Tot 80 video's/maand", "Meerdere AI-modellen", "Standaardsnelheid", "Zonder watermerk", "Commerciële licentie"] },
    { name: "Standard", desc: "Voor de meeste creators", credits: "2.000 credits/maand", features: ["Tot 200 video's/maand", "Meerdere AI-modellen", "Prioriteit genereren", "Zonder watermerk", "Prioriteit ondersteuning", "Commerciële licentie"] },
    { name: "Pro", desc: "Voor ervaren gebruikers", credits: "6.000 credits/maand", features: ["Tot 600 video's/maand", "Meerdere AI-modellen", "Snelste snelheid", "Zonder watermerk", "Expert ondersteuning", "Commerciële licentie"] },
  ]},
  faq: { title: "Veelgestelde Vragen", contactText: "Heeft u vragen? Neem contact op", items: [
    { q: "Wat is Seedance 2.0?", a: "Een revolutionair model voor het genereren van multimodale AI-video." },
    { q: "Welke invoer wordt ondersteund?", a: "Vier modaliteiten: afbeeldingen, video's, audio en tekst." },
    { q: "Hoe werkt video-extensie?", a: "Upload een video en specificeer de seconden die u wilt toevoegen." },
    { q: "Kan ik bestaande video's bewerken?", a: "Ja! Vervang personages, wijzig acties." },
    { q: "Welke lengtes en resoluties worden ondersteund?", a: "Video's van 4-15 seconden tot 1080p." },
    { q: "Zijn er watermerken op de video's?", a: "Nee! Alle video's zijn zonder watermerk." },
    { q: "Hoe begin ik?", a: "Maak een account aan, kies een plan en begin met creëren." },
  ]},
  footer: { title: "Klaar Om Te Creëren?", subtitle: "Sluit u aan bij duizenden creators die Seedance 2.0 gebruiken.", cta: "Begin Met Creëren", multiModal: "Multimodale invoer", watermarkFree: "Zonder watermerk", referenceAny: "Referentie alles" },
};
export default nl;
