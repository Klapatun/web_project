import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import 'app/styles/index.scss';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    render: () => <Text text="text" title="title" />,
};

export const OnlyTitle: Story = {
    render: () => <Text title="title" />,
};

export const OnlyText: Story = {
    render: () => <Text text="text" />,
};

export const PrimaryDark: Story = {
    render: () => <Text text="text" title="title" />,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    render: () => <Text title="title" />,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    render: () => <Text text="text" />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
