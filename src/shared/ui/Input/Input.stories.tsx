import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Modal',
    component: Input,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    render: () => <Input value="234254yh" placeholder="Type here" />,
};

export const Dark: Story = {
    render: () => <Input value="234254yh" placeholder="Type here" />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
