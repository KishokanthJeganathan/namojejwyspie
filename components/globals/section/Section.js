import React from 'react';
import RecipeItem from '../recipeItem/RecipeItem';
import * as S from './styles';

const Section = ({ title, data }) => {
	console.log(data);
	return (
		<S.SectionWrapper>
			{title && <h2>{title}</h2>}
			<S.Content>
				{data.map((item) => (
					<RecipeItem
						title={item.fields.title}
						src={`https://${item.fields.mainImage.fields.file.url}`}
						alt={item.fields.mainImage.fields.file.fileName}
						slug={`/${item.fields.type}/${item.fields.slug}`}
					/>
				))}
			</S.Content>
		</S.SectionWrapper>
	);
};

export default Section;
