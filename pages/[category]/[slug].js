import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';
import * as S from '../../components/slugPage/styles';
import BackgroundImage from '../../components/globals/backgroundImage/BackgroundImage';
import About from '../../components/homepage/about/About';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticPaths() {
	let allData = await client.getEntries();

	const cleanedData = allData.items.filter((post) => post.sys.contentType.sys.id !== 'popular');

	return {
		paths: cleanedData.map((path) => ({
			params: { category: path.sys.contentType.sys.id, slug: path.fields.slug }
		})),
		fallback: true
	};
}

export async function getStaticProps({ params }) {
	let data = await client.getEntries({
		content_type: params.category,
		'fields.slug': params.slug
	});

	let popular = await client.getEntries({
		limit: 4,
		content_type: 'popular'
	});

	return {
		props: { post: data.items, popular: popular.items },
		revalidate: 1
	};
}

const Recipe = ({ post, popular }) => {
	if (!post) return <div>404</div>;

	const {
		content,
		date,
		mainImage: { fields: { file: { url }, title: alt } },
		metaDescription,
		title
	} = post[0].fields;

	console.log(post);

	const website_url = 'namojejwyspie.vercel.app';

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => <strong>{text}</strong>
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <S.Paragraphs>{children}</S.Paragraphs>,
			'embedded-asset-block': (node) => {
				return (
					<Image
						src={`https:${node.data.target.fields.file.url}`}
						alt=""
						layout="responsive"
						width={node.data.target.fields.file.details.image.width}
						height={node.data.target.fields.file.details.image.height}
					/>
				);
			},
			[INLINES.HYPERLINK]: (node) => {
				return (
					<a
						href=""
						target={`${node.data.uri.startsWith(website_url) ? '_self' : '_blank'}`}
						rel={`${node.data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
					>
						{node.content[0].value}
					</a>
				);
			}
		}
	};

	return (
		<S.Article>
			<BackgroundImage src={`https:${url}`} title={title} />
			<About popular={popular} />
			<S.RichContent>{documentToReactComponents(content, options)}</S.RichContent>
		</S.Article>
	);
};

export default Recipe;
