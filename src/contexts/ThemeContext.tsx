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
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  // Sayfa yüklendiğinde localStorage'dan tema al
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as ThemeMode;
      if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
        setTheme(savedTheme);
      } else {
        // Varsayılan olarak sistem teması
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        setTheme(systemTheme);
      }
    }
  }, []);

  // CSS değişkenlerini güncelle
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      const cssVariables = getCSSVariables(theme);

      Object.entries(cssVariables).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });

      // Body sınıfını güncelle
      document.body.className = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
