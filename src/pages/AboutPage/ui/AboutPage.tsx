import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

export const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('ABOUT_PAGE')}
        </div>
    );
};
