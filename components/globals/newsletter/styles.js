import styled from 'styled-components';
import { media } from '../../../utils/helpers';

export const SectionWrapper = styled.section`
	border-top: 1px solid #d6d6d6;
	border-bottom: 1px solid #d6d6d6;
	display: grid;
	padding: 2rem 1rem;

	p {
		font-style: italic;
	}

	button {
		border: 1px solid black;
		background-color: white;
		color: gray;
	}

	${media.small`
    grid-template-columns: 1fr;
    `};

	${media.tablet`
    grid-template-columns: 1fr 1fr;
    `};
`;

export const Input = styled.input`
	border: 1px solid black;
	text-align: center;
`;

export const InputWrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	${media.small`
    height:8vh;
    `};

	${media.tablet`
    height:6vh;
    `};
`;
