import { createContext, useContext, useState, ReactNode } from "react";
import { Translations } from "./types";
import en from "./locales/en";
import zh from "./locales/zh";
import de from "./locales/de";
import es from "./locales/es";
import fr from "./locales/fr";
import it from "./locales/it";
import nl from "./locales/nl";
import pl from "./locales/pl";
import pt from "./locales/pt";
import sk from "./locales/sk";
import ko from "./locales/ko";
import ja from "./locales/ja";
import ro from "./locales/ro";
import ar from "./locales/ar";
import id from "./locales/id";
import hi from "./locales/hi";
import tl from "./locales/tl";
import lt from "./locales/lt";
import ms from "./locales/ms";
import th from "./locales/th";
import vi from "./locales/vi";
import zhTw from "./locales/zh-tw";
import tr from "./locales/tr";
import el from "./locales/el";
import bn from "./locales/bn";
import hu from "./locales/hu";

export const locales: Record<string, { label: string; translations: Translations; dir?: string }> = {
  en: { label: "English", translations: en },
  de: { label: "Deutsch", translations: de },
  es: { label: "Español", translations: es },
  fr: { label: "Français", translations: fr },
  it: { label: "Italiano", translations: it },
  nl: { label: "Nederlands", translations: nl },
  pl: { label: "Polski", translations: pl },
  pt: { label: "Português", translations: pt },
  sk: { label: "Slovenčina", translations: sk },
  ko: { label: "한국어", translations: ko },
  ja: { label: "日本語", translations: ja },
  zh: { label: "中文", translations: zh },
  ro: { label: "Română", translations: ro },
  ar: { label: "العربية", translations: ar, dir: "rtl" },
  id: { label: "Bahasa Indonesia", translations: id },
  hi: { label: "हिन्दी", translations: hi },
  tl: { label: "Filipino", translations: tl },
  lt: { label: "Lietuvių", translations: lt },
  ms: { label: "Bahasa Melayu", translations: ms },
  th: { label: "ไทย", translations: th },
  vi: { label: "Tiếng Việt", translations: vi },
  "zh-tw": { label: "繁體中文", translations: zhTw },
  tr: { label: "Türkçe", translations: tr },
  el: { label: "Ελληνικά", translations: el },
  bn: { label: "বাংলা", translations: bn },
  hu: { label: "Magyar", translations: hu },
};

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState(() => localStorage.getItem("locale") || "en");

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    const dir = locales[newLocale]?.dir;
    document.documentElement.dir = dir || "ltr";
  };

  const t = locales[locale]?.translations || en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
