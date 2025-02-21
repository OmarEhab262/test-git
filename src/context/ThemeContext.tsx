import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
