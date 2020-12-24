import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import Link from 'next/link';
import { Button } from '../recipeItem/styles';

const ExtendedRecipeItem = ({ title, src, alt, slug, padding, border, content, category }) => {
	let newSrc = src.replace('https:////', 'https://');
	console.log(newSrc);

	return (
		<S.Wrapper>
			<Image src={newSrc} alt={alt} width={1000} height={1200} />
			<S.Content>
				<h5>{title}</h5>
				<p>{content}</p>
				<Link href={slug}>
					<Button>Read More</Button>
				</Link>
			</S.Content>
		</S.Wrapper>
	);
};

export default ExtendedRecipeItem;
