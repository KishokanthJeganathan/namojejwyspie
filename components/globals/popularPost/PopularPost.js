import Image from 'next/image';
import React from 'react';

const PopularPost = ({ src, alt, title }) => {
	return (
		<article>
			<Image src={src} alt={alt} height={1200} width={1000} />
			<p>{title}</p>
		</article>
	);
};

export default PopularPost;
