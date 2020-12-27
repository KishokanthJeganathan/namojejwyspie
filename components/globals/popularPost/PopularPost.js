import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as S from './styles';

const PopularPost = ({ src, alt, title, slug }) => {
	return (
		<Link href={`/${slug}`}>
			<a>
				<S.Wrapper>
					<Image src={src} alt={alt} height={1200} width={1000} />
					<p>{title}</p>
				</S.Wrapper>
			</a>
		</Link>
	);
};

export default PopularPost;
