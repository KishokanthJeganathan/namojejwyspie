import styled from 'styled-components';
import { media } from '../../../utils/helpers';

export const Aside = styled.aside`
	width: 20%;
	margin: 1rem;
	float: right;

	${media.small`display:none`};
	${media.tablet`display:block`};
`;

export const About = styled.div`
	border: 1px solid black;
	margin-bottom: 2rem;
	p,
	h3 {
		padding: 0rem 1rem;
	}
`;

export const BlogPost = styled.div`
	padding-bottom: 1rem;
	border: 1px solid black;

	text-align: center;

	p,
	h3 {
		padding: 0rem 1rem;
		text-align: left;
	}
`;
