import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import Link from 'next/link';

const RecipeItem = ({ title, src, alt, slug }) => {
	return (
		<S.RecipeItemWrapper>
			<Image src={src} alt={alt} width={500} height={500} />
			<h3>{title}</h3>
			<Link href={slug}>
				<S.Button>READ</S.Button>
			</Link>
		</S.RecipeItemWrapper>
	);
};

export default RecipeItem;
