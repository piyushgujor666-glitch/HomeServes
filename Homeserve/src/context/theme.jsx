import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem("fixmate-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark");
    document.documentElement.classList.toggle("light", themeMode === "light");
    localStorage.setItem("fixmate-theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => setThemeMode((current) => current === "dark" ? "light" : "dark");

  return <ThemeContext.Provider value={{ themeMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default function useTheme() {
  return useContext(ThemeContext);
}
