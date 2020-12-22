import styled from 'styled-components';
import { media, setFontSize, setPosition } from '../../../utils/helpers';

export const Wrapper = styled.div`
	display: grid;
	margin-top: 2rem;

	h5 {
		font-size: ${setFontSize.normal};
	}

	${media.small`width: 100%;
    grid-template-columns: 1fr;
    h5{margin: 0rem;
	margin-top: 1rem;`};

	${media.phone`width: 65%;`};

	${media.tablet`
    grid-template-columns: 1.2fr 2fr;
    h5{margin: 2rem 0rem;
    `};
	${media.desktop`width: 72%;`};
`;

export const Content = styled.div`
	${setPosition.verticalCenter};
	padding: 0rem 1rem;
`;
