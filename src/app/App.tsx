import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProviders/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import { Suspense } from "react";
import {useTranslation} from "react-i18next";

const Component = () => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <div>
            <button onClick={toggle}>{t('TRANSLATE')}</button>
            {t('TEST_EXAMPLE')}
        </div>
    );
}

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Component />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
  );
};
