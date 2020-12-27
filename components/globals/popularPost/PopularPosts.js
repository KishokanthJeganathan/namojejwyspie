import Image from 'next/image';
import React from 'react';
import * as S from './styles';

const PopularPost = ({ src, alt, title }) => {
	return (
		<S.Wrapper>
			<Image src={src} alt={alt} height={1200} width={1000} />
			<p>{title}</p>
		</S.Wrapper>
	);
};

export default PopularPost;
