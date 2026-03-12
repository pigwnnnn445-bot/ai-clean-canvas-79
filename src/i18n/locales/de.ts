import { Translations } from "../types";

const de: Translations = {
  nav: { features: "Funktionen", useCases: "Anwendungsfälle", howItWorks: "So funktioniert's", pricing: "Preise", faq: "FAQ", signIn: "Anmelden", signOut: "Abmelden" },
  hero: {
    title: "Seedance", subtitle: "Erleben Sie", subtitleHighlight: "echte multimodale KI-Videoerstellung",
    subtitleDesc: "Kombinieren Sie Bilder, Videos, Audio und Text, um filmische Inhalte mit präzisen Referenzfunktionen, nahtloser Videoerweiterung und natürlicher Sprachsteuerung zu erstellen.",
    imageToVideo: "Bild zu Video", textToVideo: "Text zu Video", aiModel: "KI-Modell", images: "Bilder",
    addEndFrame: "Endbild hinzufügen", uploadFirstFrame: "Erstes Bild hochladen", uploadLastFrame: "Letztes Bild hochladen",
    clickToUpload: "Klicken zum Hochladen oder Drag & Drop", supportedFormats: "PNG, JPG, JPEG, WEBP",
    prompt: "Prompt", promptPlaceholder: "Beschreiben Sie die gewünschte Animation...",
    resolution: "Auflösung", duration: "Dauer", aspectRatio: "Seitenverhältnis",
    generate: "Generieren", generating: "Wird generiert...",
    cost: "Kosten", credits: "Credits", available: "Verfügbar",
    downloadVideo: "Video herunterladen", downloadSuccess: "Video erfolgreich heruntergeladen", viewHistory: "Verlauf anzeigen",
    modelDesc20: "Stabilere Motive, glattere Übergänge und Ergebnisse näher an einsatzfertiger Videoausgabe.",
    modelDesc15: "Die Bewegung im Material ist natürlich und flüssig, die Textur fein und realistisch, und der Gesamtstil konsistent und hochwertig.",
  },
  showcase: { title: "Lassen Sie sich", titleHighlight: "inspirieren", subtitle: "Entdecken Sie beeindruckende Videobeispiele, die mit den multimodalen Fähigkeiten von Seedance 2.0 erstellt wurden." },
  features: {
    title: "Hauptfunktionen von Seedance", titleHighlight: "2.0",
    subtitle: "Ein wirklich steuerbares multimodales KI-Videomodell. Referenzieren, bearbeiten und erstellen Sie alles.",
    items: [
      { title: "Multimodale Eingabe", description: "Laden Sie bis zu 9 Bilder, 3 Videos und 3 Audiodateien hoch. Kombinieren Sie Text, Bilder, Videos und Audio frei." },
      { title: "Alles referenzieren", description: "Referenzieren Sie Bewegung, Effekte, Kamerabewegungen, Charaktere, Szenen und Sounds mit natürlicher Sprache." },
      { title: "Überlegene Konsistenz", description: "Perfekte Konsistenz bei Gesichtern, Kleidung, Text, Szenen und visuellen Stilen im gesamten Video." },
      { title: "Präzise Bewegungsreplikation", description: "Laden Sie ein Referenzvideo hoch, um komplexe Choreografien, Kamerabewegungen und Aktionssequenzen zu replizieren." },
      { title: "Videoerweiterung & Bearbeitung", description: "Erweitern Sie bestehende Videos, fügen Sie Clips zusammen oder bearbeiten Sie bestimmte Segmente." },
      { title: "Integrierte Audiogenerierung", description: "Generieren Sie automatisch kontextbezogene Soundeffekte und Hintergrundmusik." },
    ],
  },
  useCases: {
    label: "Anwendungsfälle", title: "Endlose Möglichkeiten für jeden Kreativen", subtitle: "Von Werbung bis kreativem Storytelling – entdecken Sie die unbegrenzten Anwendungen von KI-Video", cta: "Jetzt starten",
    items: [
      { title: "Werbung & Marketing", desc: "Erstellen Sie überzeugende Werbeinhalte durch Referenzierung erfolgreicher Anzeigenvorlagen.", tags: ["Produktvideos", "Markeninhalte", "Werbeanzeigen"] },
      { title: "Kreatives Storytelling", desc: "Erstellen Sie einzigartige Erzählungen mit multimodalen Eingaben.", tags: ["Kurzfilme", "Kunstprojekte", "Musikvideos"] },
      { title: "Social-Media-Inhalte", desc: "Generieren Sie aufmerksamkeitsstarke Inhalte durch Referenzierung von Trendvorlagen.", tags: ["Instagram Reels", "TikTok Videos", "YouTube Shorts"] },
      { title: "Bewegung & Tanzvideos", desc: "Laden Sie Referenz-Choreografien hoch und wenden Sie sie auf jeden Charakter an.", tags: ["Tanzcover", "Aktionssequenzen", "Choreografie"] },
      { title: "Film-Previsualisierung", desc: "Referenzieren Sie Filmclips für Kamerabewegungen, Übergänge und visuelle Effekte.", tags: ["Storyboarding", "Kameraplanung", "Konzeptprüfung"] },
      { title: "Musik & Audio-Sync", desc: "Laden Sie Audiotracks hoch und erstellen Sie perfekt taktsynchronisierte Videos.", tags: ["Beat-Sync", "Musikvideos", "Sounddesign"] },
    ],
  },
  howItWorks: {
    title: "So erstellen Sie KI-Videos", cta: "Jetzt mit dem Erstellen beginnen",
    steps: [
      { title: "Assets hochladen", description: "Laden Sie Bilder, Videos oder Audiodateien als Referenzen hoch. Kombinieren Sie bis zu 12 Dateien." },
      { title: "Ihre Vision beschreiben", description: "Beschreiben Sie mit natürlicher Sprache, was Sie möchten. Taggen Sie bestimmte Assets in Ihrem Prompt." },
      { title: "Generieren & Iterieren", description: "Generieren Sie Videos von 4-15 Sekunden. Erweitern, bearbeiten oder verfeinern Sie Ihre Kreation." },
    ],
  },
  testimonials: { title: "Beliebt bei Kreativen weltweit", subtitle: "Kreative aus aller Welt teilen ihre Erfahrungen mit Seedance 2.0" },
  pricing: {
    title: "Preise", subtitle: "Wählen Sie den Plan, der am besten zu Ihnen passt.",
    monthly: "Monatlich", annually: "Jährlich", save: "50% sparen", perMonth: "/Monat", subscribe: "Abonnieren", mostPopular: "Am beliebtesten",
    plans: [
      { name: "Basic", desc: "Ideal für Hobbyisten und Anfänger", credits: "800 Credits/Monat", features: ["Bis zu 80 Videos/Monat", "Mehrere KI-Videomodelle", "Standard-Geschwindigkeit", "Kein Wasserzeichen", "Kommerzielle Lizenz"] },
      { name: "Standard", desc: "Perfekt für die meisten Kreativen", credits: "2.000 Credits/Monat", features: ["Bis zu 200 Videos/Monat", "Mehrere KI-Videomodelle", "Prioritäts-Generierung", "Kein Wasserzeichen", "Prioritäts-Support", "Kommerzielle Lizenz"] },
      { name: "Pro", desc: "Ideal für Power-User", credits: "6.000 Credits/Monat", features: ["Bis zu 600 Videos/Monat", "Mehrere KI-Videomodelle", "Schnellste Generierung", "Kein Wasserzeichen", "Experten-Support", "Kommerzielle Lizenz"] },
    ],
  },
  faq: {
    title: "Häufig gestellte Fragen", contactText: "Noch Fragen? Kontaktieren Sie",
    items: [
      { q: "Was ist Seedance 2.0?", a: "Seedance 2.0 ist ein revolutionäres multimodales KI-Videogenerierungsmodell, das Bild-, Video-, Audio- und Texteingaben unterstützt." },
      { q: "Welche Eingaben unterstützt Seedance 2.0?", a: "Seedance 2.0 unterstützt vier Eingabemodalitäten: bis zu 9 Bilder, bis zu 3 Videos (≤15s gesamt), bis zu 3 Audiodateien (MP3, ≤15s gesamt) und Textprompts. Insgesamt bis zu 12 Dateien." },
      { q: "Wie funktioniert die Videoerweiterung?", a: "Laden Sie Ihr Video hoch und geben Sie an, wie viele Sekunden hinzugefügt werden sollen. Das Modell bewahrt die Kontinuität." },
      { q: "Kann ich bestehende Videos bearbeiten?", a: "Ja! Sie können Charaktere ersetzen, Aktionen ändern, neue Elemente hinzufügen oder Inhalte entfernen." },
      { q: "Welche Videolängen und Auflösungen werden unterstützt?", a: "Seedance 2.0 generiert Videos von 4 bis 15 Sekunden mit Auflösungen bis zu 1080p." },
      { q: "Gibt es Wasserzeichen auf generierten Videos?", a: "Nein! Alle Videos sind komplett wasserzeichenfrei." },
      { q: "Wie fange ich an?", a: "Erstellen Sie ein Konto, wählen Sie einen Plan und beginnen Sie mit dem Erstellen." },
    ],
  },
  footer: {
    title: "Bereit zum Erstellen?",
    subtitle: "Schließen Sie sich Tausenden von Kreativen an, die Seedance 2.0 nutzen.",
    cta: "Jetzt mit dem Erstellen beginnen",
    multiModal: "Multimodale Eingabe", watermarkFree: "Ohne Wasserzeichen", referenceAny: "Alles referenzieren",
  },
};

export default de;
