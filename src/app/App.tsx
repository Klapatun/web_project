import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProviders/lib/useTheme";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        <button onClick={toggleTheme}>Поменять тему</button>
      </div>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
