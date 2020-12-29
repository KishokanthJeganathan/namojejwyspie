import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import PopularPost from '../../globals/popularPost/PopularPost';
import { v4 as uuidv4 } from 'uuid';
import AboutContent from '../../globals/constants/AboutContent';

const About = ({ popular }) => {
	return (
		<S.Aside>
			<S.About>
				<Image src={AboutContent[0].image} alt="picture of michalina and kisho" width={500} height={500} />
				<h2>About Me</h2>
				<p>{AboutContent[0].content}</p>
			</S.About>

			<S.PopularPosts>
				<h2>Most popular recipes</h2>
				{popular.map((post) => (
					<PopularPost
						key={uuidv4()}
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
