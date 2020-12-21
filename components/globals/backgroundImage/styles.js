import styled from 'styled-components';
import { media, setPosition } from '../../../utils/helpers';
import Image from 'next/image';

export const Relative = styled.section`
	position: relative;
	width: 100%;
`;

export const ImageHolder = styled(Image)`
 position: absolute;
  z-index: -1;
  object-fit: cover;
  object-position: center;`;

export const Content = styled.div`
	height: 80vh;
	${setPosition.center};

	span {
		background-color: white;
		padding: 2rem 2rem;
		text-align:center;
		${media.small`width: 60vw;`};
		${media.desktop`
		width: 40vw;
		p{padding:0rem 2rem;}
		`};
`;
