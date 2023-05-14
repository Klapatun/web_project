import type {Meta, StoryObj} from '@storybook/react';

import 'app/styles/index.scss';
import {AppLink, AppLinkTheme} from './AppLink';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProviders';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	decorators: [],
	args: {
		to: '/'
	}
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
	render: (args) => (
		<AppLink theme={AppLinkTheme.PRIMARY} {...args}>Text</AppLink>
	),
};

export const Secondary: Story = {
	render: (args) => (
		<AppLink theme={AppLinkTheme.SECONDARY} {...args}>Text</AppLink>
	),
};

export const PrimaryDark: Story = {
	render: (args) => (
		<AppLink theme={AppLinkTheme.PRIMARY} {...args}>Text</AppLink>
	),
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
	render: (args) => (
		<AppLink theme={AppLinkTheme.SECONDARY} {...args}>Text</AppLink>
	),
	decorators: [ThemeDecorator(Theme.DARK)]
};