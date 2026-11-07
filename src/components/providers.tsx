"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import { dictionaries, type Dict, type Lang } from "@/lib/i18n";

type Theme = "light" | "dark";

type AppContextType = {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  toggleLang: () => void;
  t: Dict;
};

const AppContext = createContext<AppContextType | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
    if (savedLang === "id" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        lang,
        toggleLang,
        t: dictionaries[lang] as Dict,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within Providers");
  return ctx;
}
