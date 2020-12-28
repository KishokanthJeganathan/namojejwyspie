import styled from 'styled-components';
import { media, setFontSize, setPosition } from '../../../utils/helpers';

export const Wrapper = styled.article`
	display: grid;
	margin-top: 2rem;

	${media.small`width: 100%;
    grid-template-columns: 1fr;
    h4{margin: 0rem;
	margin-top: 1rem;`};

	${media.phone`width: 60%;`};

	${media.tablet`
	grid-template-columns: 1.2fr 2fr;`};
	${media.desktop`width: 72%;`};
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	${media.small`padding: 0rem;`};

	${media.tablet`padding: 0rem 1rem;`};
`;
