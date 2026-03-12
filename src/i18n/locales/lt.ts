import { Translations } from "../types";
const lt: Translations = {
  nav: { features: "Funkcijos", useCases: "Naudojimo Atvejai", howItWorks: "Kaip Veikia", pricing: "Kainos", faq: "DUK", signIn: "Prisijungti", signOut: "Atsijungti" },
  hero: { title: "Seedance", subtitle: "Patirkite", subtitleHighlight: "tikrą multimodalinį AI vaizdo įrašų kūrimą", subtitleDesc: "Derinkite vaizdus, vaizdo įrašus, garsą ir tekstą, kad sukurtumėte kinematografinį turinį su tiksliomis nuorodų galimybėmis, sklandžiu vaizdo prailginimu ir natūralios kalbos valdymu.", imageToVideo: "Vaizdas į Video", textToVideo: "Tekstas į Video", aiModel: "AI Modelis", images: "Vaizdai", addEndFrame: "Pridėti galutinį kadrą", uploadFirstFrame: "Įkelti Pirmą Kadrą", uploadLastFrame: "Įkelti Paskutinį Kadrą", clickToUpload: "Spustelėkite norėdami įkelti arba vilkite", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Užklausa", promptPlaceholder: "Aprašykite kaip norite animuoti vaizdą...", resolution: "Rezoliucija", duration: "Trukmė", aspectRatio: "Kraštinių Santykis", generate: "Generuoti", generating: "Generuojama...", cost: "Kaina", credits: "kreditų", available: "Galima", downloadVideo: "Atsisiųsti Video", downloadSuccess: "Video sėkmingai atsisiųstas", viewHistory: "Žiūrėti Istoriją", modelDesc20: "Stabilesni objektai, sklandesni perėjimai ir rezultatai, artimesni paruoštam naudoti vaizdo įrašui.", modelDesc15: "Judėjimas yra natūralus ir sklandus, tekstūra subtili ir realistiška, o bendras stilius nuoseklus ir labai nugludintas." },
  showcase: { title: "Raskite", titleHighlight: "Įkvėpimą", subtitle: "Tyrinėkite nuostabius vaizdo pavyzdžius sukurtus su Seedance 2.0." },
  features: { title: "Pagrindinės Seedance Funkcijos", titleHighlight: "2.0", subtitle: "Tikrai valdomas multimodalinis AI vaizdo modelis.", items: [
    { title: "Multimodalinis Įvestis", description: "Įkelkite iki 9 vaizdų, 3 vaizdo įrašų ir 3 garso failų." },
    { title: "Nurodykite Bet Ką", description: "Nurodykite judesį, efektus, kameros judesius naudodami natūralią kalbą." },
    { title: "Puiki Nuoseklumas", description: "Išlaikykite tobulą veidų, drabužių ir vizualinių stilių nuoseklumą." },
    { title: "Tikslus Judesio Atkartojimas", description: "Įkelkite referensinį vaizdo įrašą sudėtingoms choreografijoms atkartoti." },
    { title: "Video Praplėtimas ir Redagavimas", description: "Praplėskite esamus vaizdo įrašus arba redaguokite konkrečius segmentus." },
    { title: "Integruotas Garso Generavimas", description: "Automatiškai generuokite garso efektus ir foninę muziką." },
  ]},
  useCases: { label: "Naudojimo Atvejai", title: "Begalinės Galimybės Kiekvienam Kūrėjui", subtitle: "Nuo reklamos iki kūrybinio pasakojimo – atraskite begalines AI vaizdo įrašų galimybes", cta: "Pradėkite Dabar", items: [ "Naudojimo Atvejai", title: "Begalinės Galimybės Kiekvienam Kūrėjui", cta: "Pradėkite Dabar", items: [
    { title: "Reklama ir Marketingas", desc: "Kurkite įtikinamą reklaminį turinį.", tags: ["Produkto Video", "Prekės Ženklo Turinys", "Reklamos"] },
    { title: "Kūrybinis Pasakojimas", desc: "Kurkite unikalius pasakojimus.", tags: ["Trumpametražiai", "Meno Projektai", "Muzikos Video"] },
    { title: "Socialinių Tinklų Turinys", desc: "Generuokite patrauklų turinį.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Judesio ir Šokio Video", desc: "Įkelkite referensinę choreografiją.", tags: ["Šokio Koveriai", "Veiksmo Sekos", "Choreografija"] },
    { title: "Filmo Išankstinė Vizualizacija", desc: "Nurodykite filmų klipus.", tags: ["Storyboarding", "Kameros Planavimas", "Koncepcijos Tikrinimas"] },
    { title: "Muzikos Sinchronizacija", desc: "Įkelkite garso takelius ir sukurkite sinchronizuotus video.", tags: ["Beat Sync", "Muzikos Video", "Garso Dizainas"] },
  ]},
  howItWorks: { title: "Kaip Kurti AI Video", cta: "Pradėkite Kurti", steps: [
    { title: "Įkelkite Failus", description: "Įkelkite vaizdus, video ar garso failus kaip nuorodas." },
    { title: "Aprašykite Viziją", description: "Naudokite natūralią kalbą aprašyti ko norite." },
    { title: "Generuokite ir Kartokite", description: "Generuokite 4-15 sekundžių video." },
  ]},
  testimonials: { title: "Kūrėjų Mėgstamas Visame Pasaulyje", subtitle: "Kūrėjai iš viso pasaulio dalijasi savo patirtimi su Seedance 2.0" }, "Atsiliepimai", title: "Mylimas Kūrėjų Visame Pasaulyje" },
  pricing: { title: "Kainos", subtitle: "Pasirinkite tinkamiausią planą.", monthly: "Mėnesinis", annually: "Metinis", save: "Sutaupykite 50%", perMonth: "/mėn.", subscribe: "Prenumeruoti", mostPopular: "Populiariausias", plans: [
    { name: "Bazinis", desc: "Idealus pradedantiesiems", credits: "800 kreditų/mėn.", features: ["Iki 80 video/mėn.", "Keli AI modeliai", "Standartinis greitis", "Be vandens ženklo", "Komercinė licencija"] },
    { name: "Standartinis", desc: "Puikus daugumai kūrėjų", credits: "2 000 kreditų/mėn.", features: ["Iki 200 video/mėn.", "Keli AI modeliai", "Prioritetinis generavimas", "Be vandens ženklo", "Prioritetinis palaikymas", "Komercinė licencija"] },
    { name: "Pro", desc: "Idealus pažengusiems", credits: "6 000 kreditų/mėn.", features: ["Iki 600 video/mėn.", "Keli AI modeliai", "Greičiausias generavimas", "Be vandens ženklo", "Ekspertų palaikymas", "Komercinė licencija"] },
  ]},
  faq: { title: "Dažniausiai Užduodami Klausimai", contactText: "Turite klausimų? Susisiekite", items: [
    { q: "Kas yra Seedance 2.0?", a: "Revoliucinis multimodalinis AI vaizdo generavimo modelis." },
    { q: "Kokius įvesties duomenis palaiko?", a: "Keturias modalumus: vaizdus, video, garsą ir tekstą." },
    { q: "Kaip veikia video praplėtimas?", a: "Įkelkite video ir nurodykite pridedamas sekundes." },
    { q: "Ar galiu redaguoti esamus video?", a: "Taip! Pakeiskite personažus, modifikuokite veiksmus." },
    { q: "Kokios trukmės ir rezoliucijos palaikomos?", a: "4-15 sekundžių video iki 1080p." },
    { q: "Ar yra vandens ženklai?", a: "Ne! Visi video be vandens ženklų." },
    { q: "Kaip pradėti?", a: "Sukurkite paskyrą, pasirinkite planą ir pradėkite kurti." },
  ]},
  footer: { title: "Pasiruošę Kurti?", subtitle: "Prisijunkite prie tūkstančių kūrėjų naudojančių Seedance 2.0.", cta: "Pradėkite Kurti", multiModal: "Multimodalinis įvestis", watermarkFree: "Be vandens ženklo", referenceAny: "Nurodykite bet ką" },
};
export default lt;
