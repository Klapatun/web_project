import {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export function useTheme(): UseThemeResult {
	const {theme, setTheme} = useContext(ThemeContext);

	const toggleTheme = () => {
		const NewTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme(NewTheme);
		document.body.className = NewTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, NewTheme);
	};

	return {
		theme,
		toggleTheme,
	};
}