import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import Link from 'next/link';

const RecipeItem = ({ title, src, alt, slug, padding, border }) => {
	return (
		<S.RecipeItemWrapper padding={padding} border={border}>
			<Image src={src} alt={alt} width={500} height={500} />
			<h3>{title}</h3>
			{slug && (
				<Link href={slug}>
					<S.Button>READ</S.Button>
				</Link>
			)}
		</S.RecipeItemWrapper>
	);
};

export default RecipeItem;
