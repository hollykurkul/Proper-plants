import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const themeColors = {
    background: isDark ? "#121814" : "#f4f7f5",
    text: isDark ? "#e1e7e4" : "#1a241e",
    cardBg: isDark ? "#1e2620" : "#ffffff",
    accent: isDark ? "#52b788" : "#2d6a4f",
  };

  return (
    <ThemeContext.Provider value={{ isDark, theme: themeColors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
