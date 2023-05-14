import type {Meta, StoryObj} from '@storybook/react';

import 'app/styles/index.scss';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProviders';
import {AboutPage} from './AboutPage';

const meta: Meta<typeof AboutPage> = {
	title: 'pages/AboutPage',
	component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
	render: () => <AboutPage />,
};

export const Dark: Story = {
	render: () => <AboutPage />,
	decorators: [ThemeDecorator(Theme.DARK)]
};