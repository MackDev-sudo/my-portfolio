import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  currentTheme: "light" | "dark"; // The actual applied theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "system";
  });

  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      let newTheme: "light" | "dark";

      if (theme === "system") {
        newTheme = mediaQuery.matches ? "dark" : "light";
      } else {
        newTheme = theme as "light" | "dark";
      }

      setCurrentTheme(newTheme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(newTheme);
    };

    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);

    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case "light":
          return "dark";
        case "dark":
          return "system";
        case "system":
          return "light";
        default:
          return "light";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
