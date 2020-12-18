import styled from 'styled-components';
import { media } from '../../../utils/helpers';
import Image from 'next/image';

export const Relative = styled.section`
	position: relative;

	${media.small`
	margin: 0rem;
	width: 100%;
	`};

	${media.phone`
	width: 65%;

	`};

	${media.desktop`
	width: 73%;
	margin: 1rem;
	

	`};
`;

export const ImageHolder = styled(Image)`
position: absolute;
  z-index: -1;
  object-fit: cover;
  object-position: center;`;

export const Content = styled.div`height: 80vh;`;
