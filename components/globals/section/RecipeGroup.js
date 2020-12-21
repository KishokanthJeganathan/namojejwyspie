import React from 'react';
import RecipeItem from '../recipeItem/RecipeItem';
import * as S from './styles';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const RecipeGroup = ({ title, data, slug, fr }) => {
	return (
		<S.SectionWrapper>
			{title && <h2>{title}</h2>}
			<S.Content fr={fr}>
				{data.map((item) => (
					<RecipeItem
						key={uuidv4()}
						title={item.fields.title}
						src={`https://${item.fields.mainImage.fields.file.url}`}
						alt={item.fields.mainImage.fields.file.fileName}
						slug={`/${item.fields.type}/${item.fields.slug}`}
					/>
				))}
			</S.Content>
			{slug && (
				<Link href={slug}>
					<S.CTA>
						SEE ALL {title} <IoIosArrowRoundForward />
					</S.CTA>
				</Link>
			)}
		</S.SectionWrapper>
	);
};

export default RecipeGroup;
