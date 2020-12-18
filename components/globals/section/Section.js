import React from 'react';
import RecipeItem from '../recipeItem/RecipeItem';
import * as S from './styles';
import { v4 as uuidv4 } from 'uuid';
import SectionWrapper from '../SectionWrapper';

const Section = ({ title, data }) => {
	console.log(data);
	return (
		<SectionWrapper>
			{title && <h2>{title}</h2>}
			<S.Content>
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
		</SectionWrapper>
	);
};

export default Section;
