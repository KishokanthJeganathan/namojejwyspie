import styled from 'styled-components';
import { media } from '../../../utils/helpers';

export const Aside = styled.aside`
	padding: 1rem;
	float: right;

	${media.small`display:none;`};
	${media.phone`display:block;width: 30%;`};
	${media.desktop`width: 23%;`};

	border-left: 1px solid #d6d6d6;
`;

export const About = styled.div`margin-bottom: 2rem;`;

export const MobileAbout = styled.div`
	${media.small`display:block;`};
	${media.phone`display:none;`};
`;

export const PopularPosts = styled.div``;
