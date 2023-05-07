import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from './Button';

describe('Button', () => {
	test('with only first parameter', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('', () => {
		render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
	});
});