import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import Link from 'next/link';
import { Button } from '../recipeItem/styles';

const ExtendedRecipeItem = ({ title, src, alt, slug, padding, border }) => {
	return (
		<S.Wrapper>
			<Image src={`https:${src}`} alt={alt} width={1000} height={1200} />
			<S.Content>
				<h5>BEST VEGAN MASHED POTATOES</h5>
				<p>
					Light and fluffy, creamy Vegan Mashed Potatoes made from scratch on the stovetop are a delicious,
					quick and easy side dish for just about any occasion! Recipe is customizable with a healthy butter
					or oil free option. Whether you like them silky smooth and fluffy, or creamy and chunky, this vegan
					mashed potatoes recipe has…
				</p>
				<Link href="">
					<Button>Read More</Button>
				</Link>
			</S.Content>
		</S.Wrapper>
	);
};

export default ExtendedRecipeItem;
