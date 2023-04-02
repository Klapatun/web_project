import cls from "./ThemeSwitchr.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProviders";
import LightTheme from '../../../shared/assets/icons/theme-light.svg'
import DarkTheme from '../../../shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitchrProps {
  className?: string;
}

export const ThemeSwitchr = ({ className }: ThemeSwitchrProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
        theme={ThemeButton.CLEAR}
        className={classNames(cls.themeSwitcher, {}, [className])}
        onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
};
