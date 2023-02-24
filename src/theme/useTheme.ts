import { useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

const defauleTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export function useTheme(): UseThemeResult {
  const [theme, setTheme] = useState<Theme>(defauleTheme);

  const toggleTheme = () => {
    const NewTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(NewTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, NewTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
