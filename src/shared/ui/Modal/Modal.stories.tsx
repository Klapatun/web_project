import type {Meta, StoryObj} from '@storybook/react';

import 'app/styles/index.scss';
import {Modal} from 'shared/ui/Modal/Modal';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProviders';

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	decorators: []
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	render: () => <Modal isOpen={true}>Random Text dbiucjkbwdougewd biuj vcwuibkjd cwbd cdw</Modal>,
};

export const Dark: Story = {
	render: () => <Modal isOpen={true}>Random Text dbiucjkbwdougewd biuj vcwuibkjd cwbd cdw</Modal>,
	decorators: [ThemeDecorator(Theme.DARK)]
};