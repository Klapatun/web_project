import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import 'app/styles/index.scss';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: () => <Button>Text</Button>,
};

export const Clear: Story = {
    render: () => <Button theme={ButtonTheme.CLEAR}>Text</Button>,
};

export const Outline: Story = {
    render: () => <Button theme={ButtonTheme.OUTLINE}>Text</Button>,
};

export const OutlineSizeL: Story = {
    render: () => <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L}>Text</Button>,
};

export const OutlineSizeXL: Story = {
    render: () => <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.XL}>Text</Button>,
};

export const OutlineDark: Story = {
    render: () => <Button theme={ButtonTheme.OUTLINE}>Text</Button>,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
    render: () => <Button theme={ButtonTheme.BACKGROUND}>Text</Button>,
};

export const BackgroundInvertedTheme: Story = {
    render: () => <Button theme={ButtonTheme.BACKGROUND_INVERTED}>Text</Button>,
};

export const SquareSizeM: Story = {
    render: () => <Button theme={ButtonTheme.BACKGROUND} square>{'>'}</Button>,
};

export const SquareSizeL: Story = {
    render: () => <Button theme={ButtonTheme.BACKGROUND} size={ButtonSize.L} square>{'>'}</Button>,
};

export const SquareSizeXL: Story = {
    render: () => <Button theme={ButtonTheme.BACKGROUND} size={ButtonSize.XL} square>{'>'}</Button>,
};
