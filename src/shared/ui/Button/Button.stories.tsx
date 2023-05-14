import type {Meta, StoryObj} from '@storybook/react';

import {Button, ThemeButton} from './Button';
import 'app/styles/index.scss';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProviders';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	decorators: []
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	render: () => <Button>Text</Button>,
};

export const Clear: Story = {
	render: () => <Button theme={ThemeButton.CLEAR}>Text</Button>,
};

export const Outline: Story = {
	render: () => <Button theme={ThemeButton.OUTLINE}>Text</Button>,
};

export const OutlineDark: Story = {
	render: () => <Button theme={ThemeButton.OUTLINE}>Text</Button>,
	decorators: [ThemeDecorator(Theme.DARK)]
};