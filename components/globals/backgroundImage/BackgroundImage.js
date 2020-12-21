import Link from 'next/link';
import React from 'react';
import { Button } from '../recipeItem/styles';
import * as S from './styles';

const BackgroundImage = ({ src, title, subtitle }) => {
	return (
		<S.Relative>
			<S.ImageHolder layout="fill" src={src} />
			<S.Content>
				<span>
					<strong>
						<p>{title}</p>
					</strong>
					<p>{subtitle}</p>
					<Link href="">
						<Button>Read</Button>
					</Link>
				</span>
			</S.Content>
		</S.Relative>
	);
};

export default BackgroundImage;
