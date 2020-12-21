import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import Navbar from '../components/globals/navbar/Navbar';
import Footer from '../components/globals/footer/Footer';
import './_app.css';
import About from '../components/homepage/about/About';
import { media } from '../utils/helpers';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: 'Raleway', sans-serif;
	${media.small`
	max-width: 100vw;
	margin:auto;`}
	${media.desktop`
	max-width: 75vw;
	margin:auto;`}
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
				{/* <About /> */}
				<main>
					<Component {...pageProps} />
				</main>

				{/* <Footer /> */}
			</ThemeProvider>
		</React.Fragment>
	);
}
