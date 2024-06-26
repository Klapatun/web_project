import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [],
    args: {},
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
    render: (args) => <NotFoundPage {...args} />,
};

export const Dark: Story = {
    render: (args) => <NotFoundPage {...args} />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
