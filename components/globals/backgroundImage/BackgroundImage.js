import Link from 'next/link';
import React from 'react';
import { Button } from '../recipeItem/styles';
import * as S from './styles';

const BackgroundImage = ({ src, title, subtitle, slug, alt }) => {
	return (
		<S.Relative>
			<S.ImageHolder layout="fill" src={src} alt={alt} />
			<S.Content>
				{title && (
					<span>
						<strong>
							<h3>{title}</h3>
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
