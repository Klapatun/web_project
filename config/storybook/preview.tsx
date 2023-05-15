import {addDecorator} from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {Theme} from '../../src/app/providers/ThemeProviders';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

addDecorator((story) => story());
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
