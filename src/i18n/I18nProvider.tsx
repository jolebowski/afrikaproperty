import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGES, type Language, translations, type TranslationDict } from "./translations";

type TranslateOptions<T = unknown> = {
  fallback?: T;
  params?: Record<string, string | number>;
};

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = unknown>(key: string, options?: TranslateOptions<T>) => T;
  formatCurrency: (value: number, currency?: string) => string;
  dictionary: TranslationDict;
  languages: typeof LANGUAGES;
};

const STORAGE_KEY = "afrika-language";
const DEFAULT_LANGUAGE: Language = "fr";

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const getNestedValue = (
  dict: TranslationDict | TranslationDict[keyof TranslationDict],
  key: string
): unknown => {
  if (!key) return undefined;
  const parts = key.split(".");
  let current: any = dict;

  for (const part of parts) {
    if (current == null) return undefined;
    current = current[part];
  }

  return current;
};

const applyParams = (value: string, params: Record<string, string | number>) => {
  return Object.entries(params).reduce(
    (acc, [paramKey, paramValue]) =>
      acc.replace(new RegExp(`{{\\s*${paramKey}\\s*}}`, "g"), String(paramValue)),
    value
  );
};

const detectInitialLanguage = (): Language => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && LANGUAGES[stored]) {
    return stored;
  }

  const navigatorLang = window.navigator?.language?.toLowerCase();
  const browserLanguages = window.navigator?.languages?.map((l) => l.toLowerCase()) ?? [];
  const candidates = [navigatorLang, ...browserLanguages].filter(Boolean) as string[];

  for (const candidate of candidates) {
    if (candidate.startsWith("fr")) return "fr";
    if (candidate.startsWith("en")) return "en";
    if (candidate.startsWith("pt")) return "pt";
    if (candidate.startsWith("kea") || candidate.includes("cv")) return "cv";
  }

  return DEFAULT_LANGUAGE;
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectInitialLanguage);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = LANGUAGES[language].locale;
  }, [language]);

  const translate = <T = unknown>(key: string, options?: TranslateOptions<T>): T => {
    const value =
      (getNestedValue(translations[language], key) ??
        getNestedValue(translations[DEFAULT_LANGUAGE], key) ??
        options?.fallback ??
        key) as any;

    if (typeof value === "string" && options?.params) {
      return applyParams(value, options.params) as T;
    }

    return value as T;
  };

  const formatCurrency = (value: number, currency = "EUR") => {
    const locale = LANGUAGES[language].locale;
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t: translate,
      formatCurrency,
      dictionary: translations[language],
      languages: LANGUAGES,
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}
