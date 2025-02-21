import React, { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light"; // Get stored theme or default to "light"
  const [theme, setTheme] = useState<string>(storedTheme);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save new theme to localStorage
  };

  useEffect(() => {
    // Sync theme state with localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
