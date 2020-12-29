import { createGlobalStyle } from 'styled-components';
import React from 'react';
import './_app.css';
import { media } from '../utils/helpers';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: 'Raleway', sans-serif;
	/* ${media.small`
	max-width: 100vw;
	margin:auto;`}
	${media.desktop`
	max-width: 85vw;
	margin:auto;`} */
  }
`;

export default function App({ Component, pageProps }) {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Component {...pageProps} />
		</React.Fragment>
	);
}
