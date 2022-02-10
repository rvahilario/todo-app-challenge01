import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/themes/theme';
import GlobalStyle from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
