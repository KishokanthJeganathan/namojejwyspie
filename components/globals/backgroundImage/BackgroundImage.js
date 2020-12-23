import Link from 'next/link';
import React from 'react';
import { Button } from '../recipeItem/styles';
import * as S from './styles';

const BackgroundImage = ({ src, title, subtitle, slug }) => {
	return (
		<S.Relative>
			<S.ImageHolder layout="fill" src={src} />
			<S.Content>
				{title && (
					<span>
						<strong>
							<p>{title}</p>
						</strong>
						<p>{subtitle}</p>
						{slug && (
							<Link href={slug}>
								<Button>Read</Button>
							</Link>
						)}
					</span>
				)}
			</S.Content>
		</S.Relative>
	);
};

export default BackgroundImage;
