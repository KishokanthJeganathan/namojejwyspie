import React from 'react';
import AboutContent from '../../globals/constants/AboutContent';
import Image from 'next/image';
import * as S from './styles';

const MobileAbout = () => {
	return (
		<section>
			<S.MobileAbout>
				<Image src="/about_image.jpg" width={500} height={500} />
				<h3>About Me</h3>
				<p>Heyyy</p>
			</S.MobileAbout>
		</section>
	);
};

export default MobileAbout;
