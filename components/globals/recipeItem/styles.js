import styled from 'styled-components';
import { media, setFontSize, setFontWeight } from '../../../utils/helpers';

export const RecipeItemWrapper = styled.div`
	h3 {
		font-size: ${setFontSize.smallTitle};
		text-align: center;
		font-weight: ${setFontWeight.thin};
	}
	text-align: center;
	padding: 1rem;
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
