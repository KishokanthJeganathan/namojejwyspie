import styled from 'styled-components';
import { media } from '../../../utils/helpers';

export const SectionWrapper = styled.section`
	${media.small`
padding: 1rem`};

	${media.large`
padding: 0rem`};
`;
