import styled from 'styled-components';
import { media } from '../../utils/helpers';

export const Article = styled.article``;

export const Paragraphs = styled.p`padding: 0rem 1rem;`;

export const RichContent = styled.div`
	a {
		color: darkblue;
	}

	${media.small`width: 100%;`};
	${media.phone`width: 65%;`};
	${media.desktop`width: 72%;`};
`;

export const ImageDescription = styled.p`
	text-align: center;
	font-style: italic;
`;
