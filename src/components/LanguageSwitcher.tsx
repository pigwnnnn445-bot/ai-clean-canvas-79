import { Globe, ChevronUp, Check } from "lucide-react";
import { useTranslation, locales } from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslation();
  const currentLabel = locales[locale]?.label || "English";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm text-foreground transition-colors hover:bg-hover-bg"
          aria-label="Switch language"
        >
          <Globe className="h-4 w-4 text-primary" />
          <span className="max-w-[80px] truncate font-medium">{currentLabel}</span>
          <ChevronUp className="h-3.5 w-3.5 text-body-muted data-[state=open]:rotate-180 transition-transform duration-200" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-50 max-h-80 w-56 overflow-y-auto rounded-xl border border-border bg-popover py-1"
      >
        {Object.entries(locales).map(([code, { label }]) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => setLocale(code)}
            className={`flex w-full cursor-pointer items-center justify-between px-4 py-2.5 text-sm transition-colors ${
              locale === code ? "font-medium text-primary" : "text-foreground"
            }`}
          >
            <span>{label}</span>
            {locale === code && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
