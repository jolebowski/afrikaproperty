import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../i18n/I18nProvider";
import { cn } from "../../lib/utils";

type LanguageSelectorProps = {
  tone?: "light" | "dark";
  onChange?: () => void;
  className?: string;
};

export function LanguageSelector({ tone = "light", onChange, className }: LanguageSelectorProps) {
  const { language, setLanguage, languages } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (code: keyof typeof languages) => {
    setLanguage(code);
    setOpen(false);
    onChange?.();
  };

  const isDark = tone === "dark";

  return (
    <div className={cn("relative", className)} ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "p-2 rounded-full transition-colors flex items-center gap-2 border border-transparent",
          isDark
            ? "text-white hover:bg-white/10"
            : "text-text-secondary hover:bg-gray-100 border-gray-200"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-lg leading-none">{languages[language].flag}</span>
        <span className="text-xs font-medium uppercase">{languages[language].shortLabel}</span>
      </button>

      {open && (
        <div
          className={cn(
            "absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50",
            "animate-in fade-in zoom-in-95 duration-200"
          )}
          role="listbox"
        >
          {(Object.keys(languages) as Array<keyof typeof languages>).map((code) => (
            <button
              key={code}
              onClick={() => handleSelect(code)}
              className={cn(
                "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors flex items-center justify-between"
              )}
              role="option"
              aria-selected={language === code}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg leading-none">{languages[code].flag}</span>
                <span>{languages[code].label}</span>
              </div>
              {language === code && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
