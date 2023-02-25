import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProviders/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        <button onClick={toggleTheme}>Поменять тему</button>
      </div>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  );
};
