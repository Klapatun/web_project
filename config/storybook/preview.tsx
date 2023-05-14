import type { Preview } from '@storybook/react';
import {Theme} from '../../src/app/providers/ThemeProviders';
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(story) => story(),
		RouterDecorator,
		ThemeDecorator(Theme.LIGHT),
	],
};

export default preview;

