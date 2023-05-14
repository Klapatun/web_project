import {StoryFn} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProviders';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
	<div className={`app ${theme}`}>
		<Story />
	</div>
);