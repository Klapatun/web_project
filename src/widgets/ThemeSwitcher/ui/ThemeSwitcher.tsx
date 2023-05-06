import {classNames} from 'shared/lib/classNames/classNames';
import {Theme, useTheme} from 'app/providers/ThemeProviders';
import LightTheme from '../../../shared/assets/icons/theme-light.svg';
import DarkTheme from '../../../shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { toggleTheme, theme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
		</Button>
	);
};
