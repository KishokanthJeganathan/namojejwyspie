import React from 'react';
import * as S from './styles';

const BackgroundImage = ({ src }) => {
	return (
		<S.Relative>
			<S.ImageHolder layout="fill" src={src} />
			<S.Content>
				<span>
					<h1>A GUIDE TO SRI LANKA'S CULINARY DELIGHTS AND HISTORY</h1>
					<p>A GUIDE TO SRI LANKA'S CULINARY DELIGHTS AND HISTORY</p>
				</span>
			</S.Content>
		</S.Relative>
	);
};

export default BackgroundImage;
