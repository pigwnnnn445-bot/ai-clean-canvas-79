import { Translations } from "../types";
const hu: Translations = {
  nav: { features: "Funkciók", useCases: "Felhasználási Területek", howItWorks: "Hogyan Működik", pricing: "Árak", faq: "GYIK", signIn: "Bejelentkezés", signOut: "Kijelentkezés" },
  hero: { title: "Seedance", subtitle: "Tapasztalja meg", subtitleHighlight: "a valódi multimodális AI videókészítést", subtitleDesc: "Kombinálja a képeket, videókat, hangot és szöveget, hogy filmes tartalmat hozzon létre pontos referencia képességekkel, zökkenőmentes videó kiterjesztéssel és természetes nyelvi vezérléssel.", imageToVideo: "Képből Videó", textToVideo: "Szövegből Videó", aiModel: "AI Modell", images: "Képek", addEndFrame: "Záró keret hozzáadása", uploadFirstFrame: "Első Keret Feltöltése", uploadLastFrame: "Utolsó Keret Feltöltése", clickToUpload: "Kattintson a feltöltéshez vagy húzza ide", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Írja le, hogyan szeretné animálni a képet...", resolution: "Felbontás", duration: "Időtartam", aspectRatio: "Képarány", generate: "Generálás", generating: "Generálás...", cost: "Költség", credits: "kredit", available: "Elérhető", downloadVideo: "Videó Letöltése", downloadSuccess: "Videó sikeresen letöltve", viewHistory: "Előzmények", modelDesc20: "Stabilabb témák, simább átmenetek és a felhasználásra kész videó kimenethez közelebb álló eredmények.", modelDesc15: "A felvételen a mozgás természetes és folyékony, a textúra finom és realisztikus, az általános stílus pedig konzisztens és rendkívül kifinomult.", generationFailed: "Generálás sikertelen", generationFailedDesc: "A szerver jelenleg foglalt. Kérjük, próbálja újra később vagy módosítsa a beállításokat.", retry: "Újrapróbálás", generationFailedToast: "A generálás sikertelen. A szerver foglalt, próbálja újra később." },
  showcase: { title: "Találjon", titleHighlight: "Inspirációt", subtitle: "Fedezze fel a Seedance 2.0 multimodális képességeivel készült lenyűgöző videó példákat." },
  features: { title: "Seedance Fő Funkciói", titleHighlight: "2.0", subtitle: "Egy valóban irányítható multimodális AI videó modell.", items: [
    { title: "Multimodális Bemenet", description: "Töltsön fel legfeljebb 9 képet, 3 videót és 3 hangfájlt." },
    { title: "Bármire Hivatkozás", description: "Hivatkozzon mozgásra, effektekre és kameramozgásokra természetes nyelven." },
    { title: "Kiváló Konzisztencia", description: "Tökéletes konzisztencia arcokhoz, ruházathoz és vizuális stílusokhoz." },
    { title: "Pontos Mozgás Replikáció", description: "Töltsön fel referencia videót komplex koreográfia replikálásához." },
    { title: "Videó Kiterjesztés & Szerkesztés", description: "Bővítse meglévő videóit vagy szerkesszen adott szegmenseket." },
    { title: "Beépített Hangenerálás", description: "Automatikusan generáljon hangeffekteket és háttérzenét." },
  ]},
  useCases: { label: "Felhasználási Területek", title: "Végtelen Lehetőségek Minden Alkotó Számára", subtitle: "A reklámoktól a kreatív történetmesélésig – fedezze fel az AI-videó végtelen alkalmazásait", cta: "Kezdje El Most", items: [
    { title: "Reklám & Marketing", desc: "Hozzon létre meggyőző promóciós tartalmakat.", tags: ["Termék Videó", "Márka Tartalom", "Hirdetések"] },
    { title: "Kreatív Történetmesélés", desc: "Hozzon létre egyedi narratívákat.", tags: ["Rövidfilmek", "Művészeti Projektek", "Zenei Videók"] },
    { title: "Közösségi Média Tartalom", desc: "Generáljon vonzó tartalmakat.", tags: ["Instagram Reels", "TikTok Videó", "YouTube Shorts"] },
    { title: "Mozgás & Tánc Videók", desc: "Töltsön fel referencia koreográfiát.", tags: ["Tánc Cover", "Akció Jelenetek", "Koreográfia"] },
    { title: "Film Elővisualizáció", desc: "Hivatkozzon filmklipekre.", tags: ["Storyboarding", "Kamera Tervezés", "Koncepció Igazolás"] },
    { title: "Zenei Szinkronizálás", desc: "Töltsön fel hangfájlokat és hozzon létre szinkronizált videókat.", tags: ["Ütem Szinkron", "Zenei Videók", "Hangtervezés"] },
  ]},
  howItWorks: { title: "Hogyan Készítsen AI Videót", cta: "Kezdjen El Alkotni", steps: [
    { title: "Töltse Fel Fájljait", description: "Töltsön fel képeket, videókat vagy hangfájlokat referenciaként." },
    { title: "Írja Le Vízióját", description: "Használjon természetes nyelvet annak leírásához, amit szeretne." },
    { title: "Generáljon és Iteráljon", description: "Generáljon 4-15 másodperces videót." },
  ]},
  testimonials: { title: "Alkotók Kedvence Világszerte", subtitle: "Alkotók a világ minden tájáról osztják meg tapasztalataikat a Seedance 2.0-val" },
  pricing: { title: "Árak", subtitle: "Válassza az Önnek legmegfelelőbb csomagot.", monthly: "Havi", annually: "Éves", save: "50% Megtakarítás", perMonth: "/hó", subscribe: "Feliratkozás", mostPopular: "Legnépszerűbb", plans: [
    { name: "Alap", desc: "Hobbistáknak és kezdőknek", credits: "800 kredit/hó", features: ["Havi 80 videó", "Több AI modell", "Standard sebesség", "Vízjel nélkül", "Kereskedelmi licenc"] },
    { name: "Standard", desc: "A legtöbb alkotónak", credits: "2.000 kredit/hó", features: ["Havi 200 videó", "Több AI modell", "Prioritásos generálás", "Vízjel nélkül", "Prioritásos támogatás", "Kereskedelmi licenc"] },
    { name: "Pro", desc: "Haladó felhasználóknak", credits: "6.000 kredit/hó", features: ["Havi 600 videó", "Több AI modell", "Leggyorsabb sebesség", "Vízjel nélkül", "Szakértői támogatás", "Kereskedelmi licenc"] },
  ]},
  faq: { title: "Gyakran Ismételt Kérdések", contactText: "Kérdése van? Lépjen kapcsolatba", items: [
    { q: "Mi az a Seedance 2.0?", a: "Egy forradalmi multimodális AI videó generáló modell." },
    { q: "Milyen bemeneteket támogat?", a: "Négy modalitás: képek, videók, hang és szöveg." },
    { q: "Hogyan működik a videó kiterjesztés?", a: "Töltse fel a videót és adja meg a hozzáadandó másodperceket." },
    { q: "Szerkeszthetek meglévő videókat?", a: "Igen! Cseréljen karaktereket, módosítson akciókat." },
    { q: "Milyen hosszúságokat és felbontásokat támogat?", a: "4-15 másodperces videók 1080p-ig." },
    { q: "Van vízjel a videókon?", a: "Nem! Minden videó vízjel nélküli." },
    { q: "Hogyan kezdjek?", a: "Hozzon létre fiókot, válasszon csomagot és kezdjen el alkotni." },
  ]},
  footer: { title: "Készen Áll az Alkotásra?", subtitle: "Csatlakozzon a Seedance 2.0-t használó alkotók ezreihez.", cta: "Kezdjen El Alkotni", multiModal: "Multimodális bemenet", watermarkFree: "Vízjel nélkül", referenceAny: "Bármire hivatkozás" },
};
export default hu;
