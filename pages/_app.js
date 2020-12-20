import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import Navbar from '../components/globals/navbar/Navbar';
import './_app.css';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: 'Raleway', sans-serif;
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
			</ThemeProvider>
		</React.Fragment>
	);
}
