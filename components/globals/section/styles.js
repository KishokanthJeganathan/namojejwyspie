import styled from 'styled-components';
import { media } from '../../../utils/helpers';

export const Content = styled.div`
	display: grid;

	justify-content: center;
	margin-bottom: 1rem;

	${media.small`
	grid-template-columns:1fr
	`} ${media.phone`
	grid-template-columns:1fr 1fr
	`} ${media.desktop`
	grid-template-columns: ${(props) => `repeat(${props.fr},1fr)`};
	`};
`;

export const SectionWrapper = styled.section`
	h2 {
		padding: 0rem 1rem;
		margin: 0rem;
	}
	margin: 1.5rem 0rem;
`;

export const CTA = styled.a`
	padding: 0rem 1rem;

	&:hover {
		text-decoration: underline;
	}
`;
