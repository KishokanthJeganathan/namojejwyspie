import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import Link from 'next/link';

const RecipeItem = ({ title, src, alt, slug, padding, border }) => {
	return (
		<S.RecipeItemWrapper padding={padding} border={border}>
			<Image src={src} alt={alt} width={1000} height={1200} />
			<h4>{title}</h4>
			{slug && (
				<Link href={slug}>
					<S.Button>READ</S.Button>
				</Link>
			)}
		</S.RecipeItemWrapper>
	);
};

export default RecipeItem;
