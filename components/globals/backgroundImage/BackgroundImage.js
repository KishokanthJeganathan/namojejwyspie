import React from 'react';
import * as S from './styles';

const BackgroundImage = () => {
	return (
		<S.Relative>
			<S.ImageHolder layout="fill" src="/Srilankan Cooking.jpg" />
			<S.Content>
				<h1>Welcome to Namojej Wyspie!</h1>
			</S.Content>
		</S.Relative>
	);
};

export default BackgroundImage;
