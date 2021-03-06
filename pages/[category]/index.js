import React from 'react';
import BackgroundImage from '../../components/globals/backgroundImage/BackgroundImage';
import Layout from '../../components/globals/Layout';
import RecipeGroup from '../../components/globals/recipeGroup/RecipeGroup';

const client = require('contentful').createClient({
	space: process.env.CONTENTFUL_SPACE,
	accessToken: process.env.CONTENTFUL_TOKEN
});

export async function getStaticPaths() {
	let allData = await client.getEntries();

	const cleanedData = allData.items.filter((post) => post.sys.contentType.sys.id !== 'popular');
	return {
		paths: cleanedData.map((path) => ({
			params: { category: path.sys.contentType.sys.id }
		})),
		fallback: true
	};
}

export async function getStaticProps({ params }) {
	let data = await client.getEntries({
		content_type: params.category
	});

	return {
		props: { posts: data.items },
		revalidate: 1
	};
}

const Index = ({ posts }) => {
	if (!posts) return <div>404</div>;

	return (
		<Layout
			title={posts[0].sys.contentType.sys.id.toUpperCase()}
			image={`https:${posts[0].fields.mainImage.fields.file.url}`}
			slug={posts[0].sys.contentType.sys.id}
			description={`Information about the ${posts[0].sys.contentType.sys
				.id} Sri Lankans love and have on a daily basis`}
		>
			<BackgroundImage
				src={`https:${posts[0].fields.mainImage.fields.file.url}`}
				title="POSZUKUJESZ CODZIENNIE JEŚĆ I PIĆ JAK SRI LANKANS?"
				subtitle="JESTEŚ W ODPOWIEDNIM MIEJSCU!"
			/>
			<RecipeGroup data={posts} fr="4" />
		</Layout>
	);
};

export default Index;
