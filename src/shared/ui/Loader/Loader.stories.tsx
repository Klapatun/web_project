import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    render: () => <Loader />,
};

export const Dark: Story = {
    render: () => <Loader />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
