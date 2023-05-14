import type {Meta, StoryObj} from '@storybook/react';

import 'app/styles/index.scss';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProviders';
import {MainPage} from './MainPage';

const meta: Meta<typeof MainPage> = {
	title: 'pages/MainPage',
	component: MainPage,
	decorators: [],
	args: {},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
	render: () => <MainPage />,
};

export const Dark: Story = {
	render: () => <MainPage />,
	decorators: [ThemeDecorator(Theme.DARK)]
};