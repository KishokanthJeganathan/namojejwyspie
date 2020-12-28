import React from 'react';
import ExtendedRecipeItem from '../../globals/extendedRecipeItem/ExtendedRecipeItem';
import About from '../about/About';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { CTA } from '../../globals/recipeGroup/styles';
import { IoIosArrowRoundForward } from 'react-icons/io';
import * as S from './styles';

const Latest = ({ data, slug, title, popular }) => {
	return (
		<S.SectionWrapper>
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
				<CTA style={{ margin: '1rem 0rem' }}>
					SEE THE REST
					<IoIosArrowRoundForward style={{ fontSize: '1.4rem' }} />{' '}
				</CTA>
			</Link>
		</S.SectionWrapper>
	);
};

export default Latest;
