"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeMode, getCSSVariables } from "@/styles/colors";

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback değerler ile güvenli hale getir
    console.warn("useTheme must be used within a ThemeProvider");
    return {
      theme: "dark" as ThemeMode,
      toggleTheme: () => {},
    };
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    // SSR'da varsayılan tema
    if (typeof window === "undefined") {
      return "dark";
    }

    // Client-side'da localStorage'dan tema al
    const savedTheme = localStorage.getItem("theme") as ThemeMode;
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      return savedTheme;
    }

    // Varsayılan olarak sistem teması
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return systemTheme;
  });

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  // CSS değişkenlerini güncelle
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      const body = document.body;
      const cssVariables = getCSSVariables(theme);

      Object.entries(cssVariables).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });

      // HTML ve Body sınıfını güncelle
      root.className = theme;
      body.className = `${body.className
        .replace(/\b(light|dark)\b/g, "")
        .trim()} ${theme}`.trim();
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
