import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    render: () => <LoginForm />,
    decorators: [StoreDecorator({ loginForm: { username: 'user', password: '123' } })],
};

export const Dark: Story = {
    render: () => <LoginForm />,
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: 'user', password: '123' } })],
};

export const WithError: Story = {
    render: () => <LoginForm />,
    decorators: [StoreDecorator({ loginForm: { username: 'user', password: '123', error: 'Attantion' } })],
};

export const Loading: Story = {
    render: () => <LoginForm />,
    decorators: [StoreDecorator({ loginForm: { username: 'user', password: '123', isLoading: true } })],
};
