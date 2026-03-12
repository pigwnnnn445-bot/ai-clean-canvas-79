import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
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

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-lg flex items-center justify-center text-foreground hover:bg-hover-bg transition-colors cursor-pointer"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 max-h-80 overflow-y-auto rounded-lg border border-border bg-popover shadow-lg z-50">
          {Object.entries(locales).map(([code, { label }]) => (
            <button
              key={code}
              onClick={() => { setLocale(code); setOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm transition-colors cursor-pointer ${
                locale === code
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground hover:bg-hover-bg"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
