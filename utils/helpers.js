import { css } from 'styled-components';

export const setColor = {
	black: 'black',
	orange: '#D4A35E',
	white: 'white'
};

export const setFontWeight = {
	thin: '300',
	normal: '400',
	bold: '600'
};

export const setPosition = {
	center: `display: flex;
	justify-content:center;
	align-items:center;`
};

export const setFontSize = {
	title: '3rem',
	mediumTitle: '2rem',
	smallTitle: '1.4rem',
	normal: '1.1rem',
	normalSmall: '1rem',
	verySmall: '0.8rem'
};

const sizes = {
	large: 1200,
	desktop: 992,
	tablet: 768,
	phone: 576,
	small: 320
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`@media (min-width: ${sizes[label] / 16}em) {${css(...args)};}`;
	return acc;
}, {});
