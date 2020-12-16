import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import Navbar from '../components/globals/navbar/Navbar';
import Footer from '../components/globals/footer/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
	colors: {
		text: 'black',
		background: 'white'
	}
};

export default function App({ Component, pageProps }) {
	return (
		<React.Fragment>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Navbar />
				<main>
					<Component {...pageProps} />
				</main>
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	);
}
