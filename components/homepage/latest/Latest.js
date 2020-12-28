import React from 'react';
import ExtendedRecipeItem from '../../globals/extendedRecipeItem/ExtendedRecipeItem';
import About from '../about/About';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Link from 'next/link';
import { CTA } from '../../globals/recipeGroup/styles';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const SectionWrapper = styled.section`padding: 1rem;`;

const Latest = ({ data, slug, title, popular }) => {
	return (
		<SectionWrapper>
			<About popular={popular} />
			<h2>{title}</h2>
			{data.map((item) => (
				<ExtendedRecipeItem
					key={uuidv4()}
					title={item.fields.title}
					src={`https://${item.fields.mainImage.fields.file.url}`}
					alt={item.fields.mainImage.fields.file.fileName}
					slug={`/${item.sys.contentType.sys.id}/${item.fields.slug}`}
					content={item.fields.metaDescription}
					category={item.sys.contentType.sys.id}
				/>
			))}
			<Link href={slug}>
				<CTA style={{ marginTop: '2rem' }}>
					SEE THE REST
					<IoIosArrowRoundForward style={{ fontSize: '1.4rem' }} />{' '}
				</CTA>
			</Link>
		</SectionWrapper>
	);
};

export default Latest;
