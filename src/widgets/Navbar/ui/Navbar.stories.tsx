import type {Meta, StoryObj} from '@storybook/react';

import 'app/styles/index.scss';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProviders';
import {Navbar} from './Navbar';

const meta: Meta<typeof Navbar> = {
	title: 'widget/Navbar',
	component: Navbar,
	decorators: []
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
	render: () => <Navbar />,
};

export const Dark: Story = {
	render: () => <Navbar />,
	decorators: [ThemeDecorator(Theme.DARK)]
};