import styled from 'styled-components';
import { media } from '../../../utils/helpers';

export const Aside = styled.aside`
	margin: 1rem;
	float: right;

	${media.small`display:none;`};
	${media.phone`display:block;width: 30%;`};
	${media.desktop`width: 23%;`};
`;

export const About = styled.div`
	border: 1px solid #d6d6d6;
	margin-bottom: 2rem;
	p,
	h3 {
		padding: 0rem 1rem;
	}
`;

export const BlogPost = styled.div`
	padding-bottom: 1.5rem;
	border: 1px solid #d6d6d6;

	a {
		margin: 1rem;
	}
	p,
	h3 {
		padding: 0rem 1rem;
	}
`;

export const MobileAbout = styled.div`
	${media.small`display:block;`};
	${media.phone`display:none;`};
`;
