import styled from 'styled-components';
import { media, setFontSize } from '../../../utils/helpers';

export const Navbar = styled.header`
	display: grid;

	span {
		display: grid;
		align-content: center;
		margin-left: 0.5rem;
	}

	${media.small`
    grid-template-columns: 3fr 1fr ;
    p{margin:0rem};
    padding:0.5rem;
`};

	${media.tablet`
    grid-template-columns: 1fr 0.5fr;
    margin: 0rem 1rem;
    margin-left: 1rem;
    `};

	${media.desktop`
    grid-template-columns: 1fr 1fr;
    `};
`;

export const Tagline = styled.p`
	${media.small`
 display: none;
    `};
	${media.tablet`
 display: block;

    `};
`;

export const Menu = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 2rem;
`;

export const LogoHolder = styled.div`display: flex;`;

export const Name = styled.p`
	${media.small`
font-size: ${setFontSize.smallTitle};

    `};
	${media.tablet`
    font-size: ${setFontSize.title};

    `};
`;

export const UL = styled.ul`
	list-style-type: none;
	text-align: center;

	a {
		text-decoration: none;
		color: white;
	}

	li {
		margin: 0.5rem 0rem;
	}
`;
