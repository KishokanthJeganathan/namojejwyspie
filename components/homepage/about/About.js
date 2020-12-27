import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import Link from 'next/link';
import PopularPost from '../../globals/popularPost/PopularPost';

const About = ({ popular }) => {
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

			<S.PopularPosts>
				<h3>Our most popular recipes</h3>
				{popular.map((post) => (
					<PopularPost
						title={post.fields.title}
						src={`https:${post.fields.image.fields.file.url}`}
						alt={post.fields.image.fields.title}
						slug={post.fields.slug}
					/>
				))}
			</S.PopularPosts>
		</S.Aside>
	);
};

export default About;
