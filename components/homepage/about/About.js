import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import Link from 'next/link';
import { Button } from '../../globals/recipeItem/styles';

const About = () => {
	return (
		<S.Aside>
			<S.About>
				<Image src="/about_image.jpg" width={500} height={500} />
				<h3>About Me</h3>
				<p>
					Jestem Michalina i pisze bloga o Sri Lance. Mój chłopak pochodzi ze Sri Lanki i to dzieki niemu
					zainteresowałam sie kulturą, kuchnią i historią tego kraju. Mieszkamy i pracujemy w Poznaniu. Ja na
					co dzień pracuję w ochronie zdrowia, a blog prowadzę hobbystycznie
				</p>
			</S.About>

			<S.BlogPost>
				<Image src="/spices-in-sri-lanka (1).jpg" width={500} height={500} />
				<h3>Looking for a place to buy Sri Lankan spices?</h3>
				<p>I have summarised the most cost effective places for you to buy Sri Lankan ingridients in Poland</p>
				<Link href="">
					<Button>Read</Button>
				</Link>
			</S.BlogPost>
		</S.Aside>
	);
};

export default About;
