import { Translations } from "../types";
const it: Translations = {
  nav: { features: "Funzionalità", useCases: "Casi d'Uso", howItWorks: "Come Funziona", pricing: "Prezzi", faq: "FAQ", signIn: "Accedi", signOut: "Esci" },
  hero: { title: "Seedance", subtitle: "Scopri", subtitleHighlight: "la vera creazione video IA multimodale", subtitleDesc: "Combina immagini, video, audio e testo per generare contenuti cinematografici con capacità di riferimento precise, estensione video fluida e controllo in linguaggio naturale.", imageToVideo: "Da Immagine a Video", textToVideo: "Da Testo a Video", aiModel: "Modello IA", images: "Immagini", addEndFrame: "Aggiungi primo e ultimo fotogramma", uploadFirstFrame: "Carica Primo Fotogramma", uploadLastFrame: "Carica Ultimo Fotogramma", clickToUpload: "Clicca per caricare o trascina", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Descrivi come vuoi animare la tua immagine...", resolution: "Risoluzione", duration: "Durata", aspectRatio: "Rapporto d'Aspetto", generate: "Genera", generating: "Generazione in corso...", cost: "Costo", credits: "crediti", available: "Disponibile", downloadVideo: "Scarica Video", downloadSuccess: "Video scaricato con successo", viewHistory: "Visualizza Cronologia", modelDesc20: "Soggetti più stabili, transizioni più fluide e risultati più vicini a video pronti all'uso.", modelDesc15: "Il movimento è naturale e fluido, la texture è delicata e realistica, e lo stile complessivo è coerente e altamente rifinito.", generationFailed: "Generazione fallita", generationFailedDesc: "Il server è attualmente occupato. Riprova più tardi o modifica le impostazioni.", retry: "Riprova", generationFailedToast: "Generazione fallita. Il server è occupato, riprova più tardi." },
  showcase: { title: "Lasciati", titleHighlight: "Ispirare", subtitle: "Esplora esempi video straordinari creati con le capacità multimodali di Seedance 2.0." },
  features: { title: "Funzionalità Chiave di Seedance", titleHighlight: "2.0", subtitle: "Un modello video AI multimodale veramente controllabile.", items: [
    { title: "Input Multimodale", description: "Carica fino a 9 immagini, 3 video e 3 file audio." },
    { title: "Riferimento a Qualsiasi Cosa", description: "Fai riferimento a movimenti, effetti e movimenti della telecamera con linguaggio naturale." },
    { title: "Consistenza Superiore", description: "Mantieni una consistenza perfetta per volti, abbigliamento e stili visivi." },
    { title: "Replica Precisa del Movimento", description: "Carica un video di riferimento per replicare coreografie complesse." },
    { title: "Estensione e Modifica Video", description: "Estendi i video esistenti o modifica segmenti specifici." },
    { title: "Generazione Audio Integrata", description: "Genera automaticamente effetti sonori e musica di sottofondo." },
  ]},
  useCases: { label: "Casi d'Uso", title: "Possibilità Infinite per Ogni Creatore", subtitle: "Dalla pubblicità allo storytelling creativo, esplora le infinite applicazioni del video IA", cta: "Inizia Ora", items: [
    { title: "Pubblicità e Marketing", desc: "Crea contenuti promozionali coinvolgenti.", tags: ["Video Prodotto", "Contenuti Brand", "Annunci"] },
    { title: "Narrazione Creativa", desc: "Crea narrazioni uniche con input multimodali.", tags: ["Cortometraggi", "Progetti Artistici", "Video Musicali"] },
    { title: "Contenuti Social Media", desc: "Genera contenuti accattivanti con template di tendenza.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Video di Movimento e Danza", desc: "Carica coreografie di riferimento e applicale a qualsiasi personaggio.", tags: ["Cover di Danza", "Sequenze d'Azione", "Coreografia"] },
    { title: "Pre-visualizzazione Film", desc: "Riferimento a clip cinematografiche per movimenti di camera ed effetti.", tags: ["Storyboarding", "Pianificazione Camera", "Prova di Concetto"] },
    { title: "Sincronizzazione Musicale", desc: "Carica tracce audio e crea video perfettamente sincronizzati.", tags: ["Sync Ritmico", "Video Musicali", "Sound Design"] },
  ]},
  howItWorks: { title: "Come Creare un Video IA", cta: "Inizia a Creare", steps: [
    { title: "Carica le Tue Risorse", description: "Carica immagini, video o file audio come riferimento." },
    { title: "Descrivi la Tua Visione", description: "Usa il linguaggio naturale per descrivere ciò che desideri." },
    { title: "Genera e Itera", description: "Genera un video di 4-15 secondi." },
  ]},
  testimonials: { title: "Amato dai Creatori di Tutto il Mondo", subtitle: "Creatori da tutto il mondo condividono la loro esperienza con Seedance 2.0" },
  pricing: { title: "Prezzi", subtitle: "Scegli il piano più adatto a te.", monthly: "Mensile", annually: "Annuale", save: "Risparmia il 50%", perMonth: "/mese", subscribe: "Iscriviti", mostPopular: "Più Popolare", plans: [
    { name: "Basic", desc: "Per hobbisti e principianti", credits: "800 crediti/mese", features: ["Fino a 80 video/mese", "Modelli IA multipli", "Velocità standard", "Nessun watermark", "Licenza commerciale"] },
    { name: "Standard", desc: "Per la maggior parte dei creatori", credits: "2.000 crediti/mese", features: ["Fino a 200 video/mese", "Modelli IA multipli", "Generazione prioritaria", "Nessun watermark", "Supporto prioritario", "Licenza commerciale"] },
    { name: "Pro", desc: "Per utenti esperti", credits: "6.000 crediti/mese", features: ["Fino a 600 video/mese", "Modelli IA multipli", "Velocità più elevata", "Nessun watermark", "Supporto esperto", "Licenza commerciale"] },
  ]},
  faq: { title: "Domande Frequenti", contactText: "Hai domande? Contatta", items: [
    { q: "Cos'è Seedance 2.0?", a: "Un modello rivoluzionario per la generazione di video IA multimodale." },
    { q: "Quali input sono supportati?", a: "Quattro modalità: immagini, video, audio e testo." },
    { q: "Come funziona l'estensione video?", a: "Carica un video e specifica i secondi da aggiungere." },
    { q: "Posso modificare video esistenti?", a: "Sì! Sostituisci i personaggi, modifica le azioni." },
    { q: "Quali durate e risoluzioni sono supportate?", a: "Video di 4-15 secondi fino a 1080p." },
    { q: "C'è una filigrana sui video?", a: "No! Tutti i video sono senza filigrana." },
    { q: "Come posso iniziare?", a: "Crea un account, scegli un piano e inizia a creare." },
  ]},
  footer: { title: "Pronto a Creare?", subtitle: "Unisciti a migliaia di creatori che utilizzano Seedance 2.0.", cta: "Inizia a Creare", multiModal: "Input multimodale", watermarkFree: "Nessun watermark", referenceAny: "Riferimento a qualsiasi cosa" },
};
export default it;
