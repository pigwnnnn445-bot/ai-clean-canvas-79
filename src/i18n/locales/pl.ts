import { Translations } from "../types";
const pl: Translations = {
  nav: { features: "Funkcje", useCases: "Zastosowania", howItWorks: "Jak To Działa", pricing: "Cennik", faq: "FAQ", signIn: "Zaloguj się", signOut: "Wyloguj się" },
  hero: { title: "Seedance", subtitle: "Doświadcz", subtitleHighlight: "prawdziwie multimodalnego tworzenia wideo AI", subtitleDesc: "Łącz obrazy, wideo, dźwięk i tekst, aby generować kinematograficzną treść z precyzyjnymi możliwościami referencji, płynnym rozszerzaniem wideo i kontrolą języka naturalnego.", imageToVideo: "Obraz do Wideo", textToVideo: "Tekst do Wideo", aiModel: "Model AI", images: "Obrazy", addEndFrame: "Dodaj ostatnią klatkę", uploadFirstFrame: "Prześlij Pierwszą Klatkę", uploadLastFrame: "Prześlij Ostatnią Klatkę", clickToUpload: "Kliknij aby przesłać lub przeciągnij", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Opisz jak chcesz animować obraz...", resolution: "Rozdzielczość", duration: "Czas trwania", aspectRatio: "Proporcje", generate: "Generuj", generating: "Generowanie...", cost: "Koszt", credits: "kredyty", available: "Dostępne", downloadVideo: "Pobierz Wideo", downloadSuccess: "Wideo pobrane pomyślnie", viewHistory: "Zobacz Historię", modelDesc20: "Stabilniejsze obiekty, płynniejsze przejścia i wyniki bliższe gotowym do użycia wideo.", modelDesc15: "Ruch w materiale jest naturalny i płynny, tekstura delikatna i realistyczna, a ogólny styl spójny i wysoce dopracowany.", generationFailed: "Generowanie nie powiodło się", generationFailedDesc: "Serwer jest obecnie zajęty. Spróbuj ponownie później lub dostosuj ustawienia.", retry: "Ponów próbę", generationFailedToast: "Generowanie nie powiodło się. Serwer jest zajęty, spróbuj później." },
  showcase: { title: "Znajdź", titleHighlight: "Inspirację", subtitle: "Odkryj niesamowite przykłady wideo stworzone z multimodalnymi możliwościami Seedance 2.0." },
  features: { title: "Główne Funkcje Seedance", titleHighlight: "2.0", subtitle: "Prawdziwie kontrolowany, multimodalny model wideo AI.", items: [
    { title: "Multimodalne Wejście", description: "Prześlij do 9 obrazów, 3 filmów i 3 plików audio." },
    { title: "Odwołaj Się Do Czego Chcesz", description: "Odwołuj się do ruchu, efektów i ruchów kamery w naturalnym języku." },
    { title: "Doskonała Spójność", description: "Utrzymuj idealną spójność dla twarzy, ubrań i stylów wizualnych." },
    { title: "Precyzyjne Odtwarzanie Ruchu", description: "Prześlij film referencyjny, aby odtworzyć złożoną choreografię." },
    { title: "Rozszerzanie i Edycja Wideo", description: "Rozszerz istniejące filmy lub edytuj określone segmenty." },
    { title: "Wbudowane Generowanie Dźwięku", description: "Automatycznie generuj efekty dźwiękowe i muzykę w tle." },
  ]},
  useCases: { label: "Zastosowania", title: "Nieskończone Możliwości dla Każdego Twórcy", subtitle: "Od reklamy po kreatywne opowiadanie historii, odkryj nieskończone zastosowania wideo AI", cta: "Zacznij Teraz", items: [
    { title: "Reklama i Marketing", desc: "Twórz przekonujące treści promocyjne.", tags: ["Wideo Produktowe", "Treści Marki", "Reklamy"] },
    { title: "Kreatywne Opowiadanie", desc: "Twórz unikalne narracje z multimodalnymi wejściami.", tags: ["Filmy Krótkometrażowe", "Projekty Artystyczne", "Teledyski"] },
    { title: "Treści Social Media", desc: "Generuj angażujące treści.", tags: ["Instagram Reels", "TikTok Wideo", "YouTube Shorts"] },
    { title: "Wideo Ruchu i Tańca", desc: "Prześlij referencyjną choreografię.", tags: ["Cover Taneczny", "Sekwencje Akcji", "Choreografia"] },
    { title: "Pre-wizualizacja Filmowa", desc: "Odwołuj się do klipów filmowych.", tags: ["Storyboarding", "Planowanie Kamery", "Dowód Koncepcji"] },
    { title: "Synchronizacja Muzyczna", desc: "Prześlij ścieżki audio i twórz zsynchronizowane wideo.", tags: ["Beat Sync", "Teledyski", "Sound Design"] },
  ]},
  howItWorks: { title: "Jak Stworzyć Wideo AI", cta: "Zacznij Tworzyć", steps: [
    { title: "Prześlij Pliki", description: "Prześlij obrazy, wideo lub pliki audio jako odniesienie." },
    { title: "Opisz Wizję", description: "Użyj naturalnego języka, aby opisać, czego chcesz." },
    { title: "Generuj i Powtarzaj", description: "Generuj 4-15 sekundowe wideo." },
  ]},
  testimonials: { title: "Uwielbiane przez Twórców na Całym Świecie", subtitle: "Twórcy z całego świata dzielą się doświadczeniami z Seedance 2.0" },
  pricing: { title: "Cennik", subtitle: "Wybierz plan, który najbardziej Ci odpowiada.", monthly: "Miesięcznie", annually: "Rocznie", save: "Oszczędź 50%", perMonth: "/mies.", subscribe: "Subskrybuj", mostPopular: "Najpopularniejsze", plans: [
    { name: "Basic", desc: "Dla hobbystów i początkujących", credits: "800 kredytów/mies.", features: ["Do 80 filmów/mies.", "Wiele modeli AI", "Standardowa prędkość", "Bez znaku wodnego", "Licencja komercyjna"] },
    { name: "Standard", desc: "Dla większości twórców", credits: "2.000 kredytów/mies.", features: ["Do 200 filmów/mies.", "Wiele modeli AI", "Priorytetowe generowanie", "Bez znaku wodnego", "Priorytetowe wsparcie", "Licencja komercyjna"] },
    { name: "Pro", desc: "Dla zaawansowanych użytkowników", credits: "6.000 kredytów/mies.", features: ["Do 600 filmów/mies.", "Wiele modeli AI", "Najszybsza prędkość", "Bez znaku wodnego", "Wsparcie eksperta", "Licencja komercyjna"] },
  ]},
  faq: { title: "Często Zadawane Pytania", contactText: "Masz pytania? Skontaktuj się", items: [
    { q: "Co to jest Seedance 2.0?", a: "Rewolucyjny, multimodalny model generowania wideo AI." },
    { q: "Jakie wejścia są obsługiwane?", a: "Cztery modalności: obrazy, wideo, audio i tekst." },
    { q: "Jak działa rozszerzanie wideo?", a: "Prześlij wideo i określ sekundy do dodania." },
    { q: "Czy mogę edytować istniejące filmy?", a: "Tak! Zmieniaj postacie, modyfikuj akcje." },
    { q: "Jakie długości i rozdzielczości są obsługiwane?", a: "Filmy 4-15 sekund do 1080p." },
    { q: "Czy na filmach jest znak wodny?", a: "Nie! Wszystkie filmy są bez znaku wodnego." },
    { q: "Jak zacząć?", a: "Utwórz konto, wybierz plan i zacznij tworzyć." },
  ]},
  footer: { title: "Gotowy do Tworzenia?", subtitle: "Dołącz do tysięcy twórców korzystających z Seedance 2.0.", cta: "Zacznij Tworzyć", multiModal: "Multimodalne wejście", watermarkFree: "Bez znaku wodnego", referenceAny: "Odwołaj się do czego chcesz" },
};
export default pl;
