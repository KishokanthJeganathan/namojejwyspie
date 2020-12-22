import styled from 'styled-components';
import { media, setFontSize, setPosition } from '../../../utils/helpers';

export const FooterWrapper = styled.footer`
	border-top: 1px solid gray;
	padding: 2rem;
	display: grid;
	span {
		display: grid;
		align-content: center;
		margin-left: 0.5rem;
	}

	${media.small`
    grid-template-columns: 1fr ;
    p{margin:0rem};
	padding:0.5rem;
	padding-top:2rem;
`};

	${media.tablet`
    grid-template-columns: 1fr 2fr 0.8fr;
    margin: 2rem 1rem;
	padding:1rem 0rem;
	padding-top: 3rem;
    margin-left: 1rem;
    justify-items:center;text-align: center;
    
    `};
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;

	${media.small`justify-content: flex-start;
    ul{padding:0.5rem}
  `};

	${media.tablet`justify-content: flex-end;
    align-items: center;
    text-align: center;
    ul{padding:0rem}`};
`;

export const Name = styled.p`
	font-weight: bold;
	${media.small`
font-size: ${setFontSize.smallTitle};

    `};
	${media.tablet`
    font-size: ${setFontSize.title};

    `};
`;

export const LinkContent = styled.a`
	${media.small`display:inline;
	padding-right:0.5rem;
	
	`};

	${media.tablet`display: block;`};
`;

export const About = styled.div`
	${setPosition.center};
	${media.small`
   
    p{padding:0.5rem};
  
`};
`;
