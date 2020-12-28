import styled from 'styled-components';
import { media, setFontSize, setFontWeight } from '../../../utils/helpers';

export const RecipeItemWrapper = styled.div`
	h3 {
		font-size: ${setFontSize.normal};
		font-weight: ${setFontWeight.thin};
	}

	/* padding: ${({ padding }) => (padding ? padding : '1rem')}; */
	border: ${({ border }) => (border ? border : '')};
`;

export const Button = styled.a`
	border: 1px solid black;
	padding: 0.5rem 1rem;
	font-size: ${setFontSize.verySmall};
	transition: 0.7s color;
	&:hover {
		background-color: black;
		color: white;
		cursor: pointer;
	}
`;
