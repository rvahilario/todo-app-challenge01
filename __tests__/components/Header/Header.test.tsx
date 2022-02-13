import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../../../src/components/Header';
import theme from '../../../src/themes/theme';

describe('<Header />', () => {
	it('should render Header', () => {
		render(
			<ThemeProvider theme={theme}>
				<Header title='Successful Test!' />
			</ThemeProvider>
		);

		expect(screen.getByText('Successful Test!')).toBeInTheDocument();
	});
});
