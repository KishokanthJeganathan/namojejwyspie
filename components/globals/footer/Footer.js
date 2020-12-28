import React from 'react';
import * as S from '../footer/styles';
import Image from 'next/image';
import NavigationLinks from '../constants/NavigationLinks';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
	return (
		<S.FooterWrapper>
			<span>
				<Link href="/">
					<S.Name>Namojej Wyspie</S.Name>
				</Link>
			</span>

			<S.About>
				<p>
					Jestem Michalina i pisze bloga o Sri Lance. Mój chłopak pochodzi ze Sri Lanki i to dzieki niemu
					zainteresowałam sie kulturą, kuchnią i historią tego kraju. Mieszkamy i pracujemy w Poznaniu. Ja na
					co dzień pracuję w ochronie zdrowia, a blog prowadzę hobbystycznie
				</p>
			</S.About>
			<S.Menu>
				<ul>
					{NavigationLinks.map((link) => (
						<Link href={link.link} key={uuidv4()}>
							<S.LinkContent>{link.destination}</S.LinkContent>
						</Link>
					))}
				</ul>
			</S.Menu>
		</S.FooterWrapper>
	);
};

export default Footer;
