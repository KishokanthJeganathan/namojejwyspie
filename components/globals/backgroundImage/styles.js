import styled from 'styled-components';
import { media, setPosition } from '../../../utils/helpers';
import Image from 'next/image';

export const Relative = styled.section`
	position: relative;
	margin: 0rem;
	width: 100%;
`;

export const ImageHolder = styled(Image)`
position: absolute;

  object-fit: cover;
  object-position: center;`;

export const Content = styled.div`
	height: 40vh;
	${setPosition.center};

	span {
		background-color: white;
		text-align: center;
		z-index: 1;

		${media.small`
		padding: 1.4rem;
		width:70vw;`};

		${media.tablet`
		padding: 2rem 1rem;
		width:40vw;
		`};
	}
`;
