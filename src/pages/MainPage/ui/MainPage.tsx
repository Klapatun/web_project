import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

export const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    return (
        <div>
            {t('MAIN_PAGE')}
            <Input
                placeholder="Введите текст"
                value={value}
                onChange={(value) => setValue(value)}
            />
        </div>
    );
};
