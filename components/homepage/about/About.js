import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import Link from 'next/link';
import { Button } from '../../globals/recipeItem/styles';

const About = ({ about }) => {
	return (
		<S.Aside>
			<S.About>
				<Image src="/about_image.jpg" width={500} height={500} />
				<h3>About Me</h3>
				<p>{about.content}</p>
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
