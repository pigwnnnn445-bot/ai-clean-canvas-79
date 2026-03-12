import { useState, useRef, useEffect } from "react";
import { Globe, ChevronUp, Check } from "lucide-react";
import { useTranslation, locales } from "@/i18n";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLabel = locales[locale]?.label || "English";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm text-foreground hover:bg-hover-bg transition-colors cursor-pointer"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="font-medium max-w-[80px] truncate">{currentLabel}</span>
        <ChevronUp className={`w-3.5 h-3.5 text-body-muted transition-transform duration-200 ${open ? "" : "rotate-180"}`} />
      </button>

      {open && (
        <div onMouseDown={(e) => e.stopPropagation()} className="absolute right-0 bottom-full mb-2 md:bottom-auto md:top-full md:mb-0 md:mt-2 w-56 max-h-80 overflow-y-auto rounded-xl border border-border bg-popover shadow-lg z-50 py-1">
          {Object.entries(locales).map(([code, { label }]) => (
            <button
              key={code}
              onClick={() => {
                setLocale(code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                locale === code
                  ? "text-primary font-medium"
                  : "text-foreground hover:bg-hover-bg"
              }`}
            >
              <span>{label}</span>
              {locale === code && <Check className="w-4 h-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
