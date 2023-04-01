import cls from "./ThemeSwitchr.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProviders";

interface ThemeSwitchrProps {
  className?: string;
}

export const ThemeSwitchr = ({ className }: ThemeSwitchrProps) => {
  const { toggleTheme } = useTheme();

  return (
    <button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      Поменять тему
    </button>
  );
};
