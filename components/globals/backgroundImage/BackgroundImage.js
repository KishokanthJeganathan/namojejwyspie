import React from 'react';
import * as S from './styles';

const BackgroundImage = ({ src }) => {
	return (
		<S.Relative>
			<S.ImageHolder layout="fill" src={src} />
			<S.Content>
				<span>
					<h1>A GUIDE TO SRI LANKA'S CULINARY DELIGHTS AND HISTORY</h1>
					<p>
						Weekly blogposts on how to make local mains, deserts and drinks using ingridients available in
						Poland
					</p>
				</span>
			</S.Content>
		</S.Relative>
	);
};

export default BackgroundImage;
