import { Translations } from "../types";
const pl: Translations = {
  nav: { features: "Funkcje", useCases: "Zastosowania", howItWorks: "Jak to Działa", pricing: "Cennik", faq: "FAQ", signIn: "Zaloguj się", signOut: "Wyloguj się" },
  hero: { title: "Seedance", subtitle: "Doświadcz", subtitleHighlight: "prawdziwego multimodalnego tworzenia wideo AI", subtitleDesc: "Łącz obrazy, wideo, audio i tekst, aby generować kinowe treści z precyzyjnymi możliwościami odniesienia, płynnym rozszerzaniem wideo i sterowaniem językiem naturalnym.", imageToVideo: "Obraz do Wideo", textToVideo: "Tekst do Wideo", aiModel: "Model AI", images: "Obrazy", addEndFrame: "Dodaj końcową klatkę", uploadFirstFrame: "Prześlij Pierwszą Klatkę", uploadLastFrame: "Prześlij Ostatnią Klatkę", clickToUpload: "Kliknij aby przesłać lub przeciągnij i upuść", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Opisz jak chcesz animować swój obraz...", resolution: "Rozdzielczość", duration: "Czas trwania", aspectRatio: "Proporcje", generate: "Generuj", generating: "Generowanie...", cost: "Koszt", credits: "kredytów", available: "Dostępne", downloadVideo: "Pobierz Wideo", downloadSuccess: "Wideo pobrane pomyślnie", viewHistory: "Zobacz Historię", modelDesc20: "Stabilniejsze obiekty, płynniejsze przejścia i wyniki bliższe gotowemu do użycia wideo.", modelDesc15: "Ruch jest naturalny i płynny, tekstura delikatna i realistyczna, a ogólny styl spójny i wysoko dopracowany." },
  showcase: { title: "Znajdź", titleHighlight: "Inspirację", subtitle: "Odkryj oszałamiające przykłady wideo stworzone dzięki multimodalnym możliwościom Seedance 2.0." },
  features: { title: "Kluczowe Funkcje Seedance", titleHighlight: "2.0", subtitle: "Naprawdę kontrolowalny multimodalny model wideo AI.", items: [
    { title: "Multimodalne Wejście", description: "Prześlij do 9 obrazów, 3 wideo i 3 plików audio. Łącz swobodnie." },
    { title: "Odwołaj się do Wszystkiego", description: "Odwołaj się do ruchu, efektów, ruchów kamery, postaci i scen używając języka naturalnego." },
    { title: "Najwyższa Spójność", description: "Zachowaj idealną spójność twarzy, ubrań, tekstu, scen i stylów wizualnych." },
    { title: "Precyzyjna Replikacja Ruchu", description: "Prześlij wideo referencyjne aby replikować złożone choreografie." },
    { title: "Rozszerzanie i Edycja Wideo", description: "Rozszerzaj istniejące wideo, łącz klipy lub edytuj konkretne segmenty." },
    { title: "Wbudowana Generacja Audio", description: "Automatycznie generuj efekty dźwiękowe i muzykę w tle." },
  ]},
  useCases: { label: "Zastosowania", title: "Nieskończone Możliwości dla Każdego Twórcy", subtitle: "Od reklamy po kreatywne opowiadanie historii, odkryj nieskończone zastosowania wideo AI", cta: "Zacznij Teraz", items: [ "Zastosowania", title: "Nieskończone Możliwości dla Każdego Twórcy", cta: "Zacznij Teraz", items: [
    { title: "Reklama i Marketing", desc: "Twórz przekonujące treści promocyjne.", tags: ["Wideo Produktowe", "Treści Marki", "Reklamy"] },
    { title: "Kreatywne Opowiadanie", desc: "Twórz unikalne narracje z multimodalnymi wejściami.", tags: ["Filmy Krótkometrażowe", "Projekty Artystyczne", "Teledyski"] },
    { title: "Treści Social Media", desc: "Generuj angażujące treści z trendowymi szablonami.", tags: ["Instagram Reels", "TikTok Wideo", "YouTube Shorts"] },
    { title: "Wideo Ruchowe i Taneczne", desc: "Prześlij choreografię referencyjną i zastosuj do dowolnej postaci.", tags: ["Covery Taneczne", "Sekwencje Akcji", "Choreografia"] },
    { title: "Pre-wizualizacja Filmowa", desc: "Odwołaj się do klipów filmowych dla ruchów kamery i efektów.", tags: ["Storyboarding", "Planowanie Kamery", "Weryfikacja Konceptu"] },
    { title: "Synchronizacja Muzyczna", desc: "Prześlij ścieżki audio i twórz idealnie zsynchronizowane wideo.", tags: ["Sync Rytmiczny", "Teledyski", "Projektowanie Dźwięku"] },
  ]},
  howItWorks: { title: "Jak Tworzyć Wideo AI", cta: "Zacznij Tworzyć Teraz", steps: [
    { title: "Prześlij Zasoby", description: "Prześlij obrazy, wideo lub pliki audio jako referencje." },
    { title: "Opisz swoją Wizję", description: "Użyj języka naturalnego aby opisać czego chcesz." },
    { title: "Generuj i Iteruj", description: "Generuj wideo od 4-15 sekund. Rozszerzaj, edytuj lub udoskonalaj." },
  ]},
  testimonials: { title: "Uwielbiane przez Twórców na Całym Świecie", subtitle: "Twórcy z całego świata dzielą się doświadczeniami z Seedance 2.0" }, "Opinie", title: "Kochane przez Twórców na Całym Świecie" },
  pricing: { title: "Cennik", subtitle: "Wybierz plan najlepszy dla Ciebie.", monthly: "Miesięcznie", annually: "Rocznie", save: "Oszczędź 50%", perMonth: "/miesiąc", subscribe: "Subskrybuj", mostPopular: "Najpopularniejszy", plans: [
    { name: "Podstawowy", desc: "Idealny dla hobbystów i początkujących", credits: "800 kredytów/miesiąc", features: ["Do 80 wideo/miesiąc", "Wiele modeli AI", "Standardowa prędkość", "Bez znaku wodnego", "Licencja komercyjna"] },
    { name: "Standard", desc: "Idealny dla większości twórców", credits: "2 000 kredytów/miesiąc", features: ["Do 200 wideo/miesiąc", "Wiele modeli AI", "Priorytetowa generacja", "Bez znaku wodnego", "Priorytetowe wsparcie", "Licencja komercyjna"] },
    { name: "Pro", desc: "Idealny dla zaawansowanych użytkowników", credits: "6 000 kredytów/miesiąc", features: ["Do 600 wideo/miesiąc", "Wiele modeli AI", "Najszybsza generacja", "Bez znaku wodnego", "Wsparcie ekspertów", "Licencja komercyjna"] },
  ]},
  faq: { title: "Często Zadawane Pytania", contactText: "Masz pytania? Skontaktuj się", items: [
    { q: "Czym jest Seedance 2.0?", a: "Rewolucyjny multimodalny model generowania wideo AI." },
    { q: "Jakie wejścia są obsługiwane?", a: "Cztery modalności: do 9 obrazów, 3 wideo (≤15s), 3 pliki audio (MP3, ≤15s) i prompty tekstowe." },
    { q: "Jak działa rozszerzanie wideo?", a: "Prześlij wideo i określ ile sekund dodać." },
    { q: "Czy mogę edytować istniejące wideo?", a: "Tak! Zamień postacie, zmień akcje, dodaj lub usuń elementy." },
    { q: "Jakie długości i rozdzielczości są obsługiwane?", a: "Wideo od 4 do 15 sekund z rozdzielczościami do 1080p." },
    { q: "Czy są znaki wodne na wideo?", a: "Nie! Wszystkie wideo są bez znaków wodnych." },
    { q: "Jak zacząć?", a: "Zarejestruj się, wybierz plan i zacznij tworzyć." },
  ]},
  footer: { title: "Gotowy do Tworzenia?", subtitle: "Dołącz do tysięcy twórców korzystających z Seedance 2.0.", cta: "Zacznij Tworzyć Teraz", multiModal: "Multimodalne wejście", watermarkFree: "Bez znaku wodnego", referenceAny: "Odwołaj się do wszystkiego" },
};
export default pl;
