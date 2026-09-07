"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { defaultLocale, localeDir, localeStorageKey, type Locale } from "@/lib/i18n/config";
import { translations } from "@/lib/i18n/translations";

function resolvePath(dict: object, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (acc, key) => (acc && typeof acc === "object" ? (acc as Record<string, unknown>)[key] : undefined),
      dict
    );
}

function readPath(dict: object, path: string): string | undefined {
  const value = resolvePath(dict, path);
  return typeof value === "string" ? value : undefined;
}

function readListPath(dict: object, path: string): string[] | undefined {
  const value = resolvePath(dict, path);
  return Array.isArray(value) ? (value as string[]) : undefined;
}

const LanguageContext = createContext<{
  locale: Locale;
  dir: "rtl" | "ltr";
  toggle: () => void;
  t: (key: string) => string;
  tList: (key: string) => string[];
}>({
  locale: defaultLocale,
  dir: localeDir[defaultLocale],
  toggle: () => {},
  t: (key: string) => key,
  tList: () => [],
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(localeStorageKey) as Locale | null;
    if (stored === "ar" || stored === "en") {
      setLocale(stored);
      document.documentElement.lang = stored;
      document.documentElement.dir = localeDir[stored];
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale((prev) => {
      const next: Locale = prev === "ar" ? "en" : "ar";
      document.documentElement.lang = next;
      document.documentElement.dir = localeDir[next];
      window.localStorage.setItem(localeStorageKey, next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string) => readPath(translations[locale], key) ?? readPath(translations[defaultLocale], key) ?? key,
    [locale]
  );

  const tList = useCallback(
    (key: string) => readListPath(translations[locale], key) ?? readListPath(translations[defaultLocale], key) ?? [],
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, dir: localeDir[locale], toggle, t, tList }}>
      {children}
    </LanguageContext.Provider>
  );
}
