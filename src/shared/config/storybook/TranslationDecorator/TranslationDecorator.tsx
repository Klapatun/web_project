import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';

export const TranslationDecorator = (Story: StoryFn) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            <Story />
        </Suspense>
    </I18nextProvider>
);
