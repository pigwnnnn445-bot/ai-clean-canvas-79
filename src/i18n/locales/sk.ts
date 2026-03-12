import { Translations } from "../types";
const sk: Translations = {
  nav: { features: "Funkcie", useCases: "Použitie", howItWorks: "Ako to Funguje", pricing: "Cenník", faq: "FAQ", signIn: "Prihlásiť sa", signOut: "Odhlásiť sa" },
  hero: { title: "Seedance", subtitle: "Zažite", subtitleHighlight: "skutočnú multimodálnu tvorbu AI videa", subtitleDesc: "Kombinujte obrázky, videá, zvuk a text na generovanie filmového obsahu s presnými referenčnými schopnosťami, plynulým rozšírením videa a ovládaním prirodzeným jazykom.", imageToVideo: "Obrázok na Video", textToVideo: "Text na Video", aiModel: "AI Model", images: "Obrázky", addEndFrame: "Pridať koncový snímok", uploadFirstFrame: "Nahrať Prvý Snímok", uploadLastFrame: "Nahrať Posledný Snímok", clickToUpload: "Kliknite pre nahratie alebo pretiahnite", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Popíšte ako chcete animovať váš obrázok...", resolution: "Rozlíšenie", duration: "Trvanie", aspectRatio: "Pomer Strán", generate: "Generovať", generating: "Generuje sa...", cost: "Náklady", credits: "kreditov", available: "Dostupné", downloadVideo: "Stiahnuť Video", downloadSuccess: "Video úspešne stiahnuté", viewHistory: "Zobraziť Históriu", modelDesc20: "Stabilnejšie subjekty, plynulejšie prechody a výsledky bližšie k priamo použiteľnému videu.", modelDesc15: "Pohyb je prirodzený a plynulý, textúra jemná a realistická a celkový štýl konzistentný a vysoko prepracovaný." },
  showcase: { title: "Nájdite", titleHighlight: "Inšpiráciu", subtitle: "Preskúmajte úžasné príklady videí vytvorených s multimodálnymi schopnosťami Seedance 2.0." },
  features: { title: "Kľúčové Funkcie Seedance", titleHighlight: "2.0", subtitle: "Skutočne ovládateľný multimodálny AI video model.", items: [
    { title: "Multimodálny Vstup", description: "Nahrajte až 9 obrázkov, 3 videá a 3 audio súbory." },
    { title: "Referencia na Čokoľvek", description: "Odkazujte na pohyb, efekty, pohyby kamery a postavy pomocou prirodzeného jazyka." },
    { title: "Vynikajúca Konzistencia", description: "Udržiavajte dokonalú konzistenciu tvárí, oblečenia, textu a vizuálnych štýlov." },
    { title: "Presná Replikácia Pohybu", description: "Nahrajte referenčné video na replikáciu zložitých choreografií." },
    { title: "Rozšírenie a Úprava Videa", description: "Rozšírte existujúce videá, zlúčte klipy alebo upravte konkrétne segmenty." },
    { title: "Vstavaná Generácia Audia", description: "Automaticky generujte zvukové efekty a hudbu na pozadí." },
  ]},
  useCases: { label: "Použitie", title: "Nekonečné Možnosti Pre Každého Tvorcu", cta: "Začnite Teraz", items: [
    { title: "Reklama a Marketing", desc: "Vytvárajte presvedčivý propagačný obsah.", tags: ["Produktové Videá", "Obsah Značky", "Reklamy"] },
    { title: "Kreatívne Rozprávanie", desc: "Vytvárajte jedinečné príbehy s multimodálnymi vstupmi.", tags: ["Krátke Filmy", "Umelecké Projekty", "Hudobné Videá"] },
    { title: "Obsah Sociálnych Médií", desc: "Generujte pútavý obsah.", tags: ["Instagram Reels", "TikTok Videá", "YouTube Shorts"] },
    { title: "Pohybové a Tanečné Videá", desc: "Nahrajte referenčnú choreografiu a aplikujte na akúkoľvek postavu.", tags: ["Tanečné Covery", "Akčné Sekvencie", "Choreografia"] },
    { title: "Filmová Pre-vizualizácia", desc: "Odkazujte na filmové klipy.", tags: ["Storyboarding", "Plánovanie Kamery", "Overenie Konceptu"] },
    { title: "Hudobná Synchronizácia", desc: "Nahrajte audio stopy a vytvorte dokonale synchronizované videá.", tags: ["Beat Sync", "Hudobné Videá", "Zvukový Dizajn"] },
  ]},
  howItWorks: { title: "Ako Vytvoriť AI Videá", cta: "Začnite Tvoriť", steps: [
    { title: "Nahrajte Materiály", description: "Nahrajte obrázky, videá alebo audio súbory ako referencie." },
    { title: "Opíšte Vašu Víziu", description: "Použite prirodzený jazyk na opis toho, čo chcete." },
    { title: "Generujte a Iterujte", description: "Generujte videá od 4-15 sekúnd." },
  ]},
  testimonials: { label: "Referencie", title: "Obľúbený Tvorcami Po Celom Svete" },
  pricing: { title: "Cenník", subtitle: "Vyberte si plán, ktorý vám vyhovuje.", monthly: "Mesačne", annually: "Ročne", save: "Ušetrite 50%", perMonth: "/mesiac", subscribe: "Predplatiť", mostPopular: "Najobľúbenejší", plans: [
    { name: "Základný", desc: "Ideálny pre nadšencov a začiatočníkov", credits: "800 kreditov/mesiac", features: ["Až 80 videí/mesiac", "Viaceré AI modely", "Štandardná rýchlosť", "Bez vodoznaku", "Komerčná licencia"] },
    { name: "Štandard", desc: "Perfektný pre väčšinu tvorcov", credits: "2 000 kreditov/mesiac", features: ["Až 200 videí/mesiac", "Viaceré AI modely", "Prioritná generácia", "Bez vodoznaku", "Prioritná podpora", "Komerčná licencia"] },
    { name: "Pro", desc: "Ideálny pre pokročilých", credits: "6 000 kreditov/mesiac", features: ["Až 600 videí/mesiac", "Viaceré AI modely", "Najrýchlejšia generácia", "Bez vodoznaku", "Expertná podpora", "Komerčná licencia"] },
  ]},
  faq: { title: "Často Kladené Otázky", contactText: "Máte otázky? Kontaktujte", items: [
    { q: "Čo je Seedance 2.0?", a: "Revolučný multimodálny AI model na generovanie videa." },
    { q: "Aké vstupy podporuje?", a: "Štyri modality: až 9 obrázkov, 3 videá (≤15s), 3 audio súbory a textové prompty." },
    { q: "Ako funguje rozšírenie videa?", a: "Nahrajte video a zadajte počet sekúnd na pridanie." },
    { q: "Môžem upravovať existujúce videá?", a: "Áno! Vymeňte postavy, upravte akcie, pridajte alebo odstráňte prvky." },
    { q: "Aké dĺžky a rozlíšenia sú podporované?", a: "Videá od 4 do 15 sekúnd s rozlíšením do 1080p." },
    { q: "Sú na videách vodoznaky?", a: "Nie! Všetky videá sú bez vodoznakov." },
    { q: "Ako začať?", a: "Zaregistrujte sa, vyberte plán a začnite tvoriť." },
  ]},
  footer: { title: "Pripravení Tvoriť?", subtitle: "Pridajte sa k tisíckam tvorcov používajúcich Seedance 2.0.", cta: "Začnite Tvoriť", multiModal: "Multimodálny vstup", watermarkFree: "Bez vodoznaku", referenceAny: "Referencujte čokoľvek" },
};
export default sk;
