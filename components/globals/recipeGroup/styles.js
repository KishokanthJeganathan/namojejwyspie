import styled from 'styled-components';
import { media, setPosition } from '../../../utils/helpers';

export const SectionWrapper = styled.section`
	h2 {
		padding: 0rem 1rem;
		margin: 0rem;
	}
	margin: 1.5rem 0rem;
`;

export const Content = styled.div`
	display: grid;
	justify-content: center;
	margin-bottom: 2rem;
	column-gap: 2rem;
	row-gap: 2rem;

	${media.small`
	grid-template-columns:1fr 1fr;
	padding:0rem 1rem;
	`};
	${media.phone`
	grid-template-columns: ${(props) => `repeat(${props.fr},1fr)`};
	`};
	${media.desktop`
	padding:0rem ;
	`};
`;

export const CTA = styled.a`
	padding: 0rem 1rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;
