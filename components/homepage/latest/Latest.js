import React from 'react';
import ExtendedRecipeItem from '../../globals/extendedRecipeItem/ExtendedRecipeItem';
import About from '../about/About';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import RecipeGroup from '../../globals/recipeGroup/RecipeGroup';

export const SectionWrapper = styled.section`padding: 1rem;`;

const Latest = ({ data, about }) => {
	return (
		<SectionWrapper>
			<About about={about} />
			{data.map((item) => (
				<ExtendedRecipeItem
					key={uuidv4()}
					title={item.fields.title}
					src={`https://${item.fields.mainImage.fields.file.url}`}
					alt={item.fields.mainImage.fields.file.fileName}
					slug={`/${item.fields.type}/${item.fields.slug}`}
				/>
			))}
		</SectionWrapper>
	);
};

export default Latest;
