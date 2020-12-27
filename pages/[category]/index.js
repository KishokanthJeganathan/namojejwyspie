import React from 'react';
import BackgroundImage from '../../components/globals/backgroundImage/BackgroundImage';
import RecipeGroup from '../../components/globals/recipeGroup/RecipeGroup';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
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
		<React.Fragment>
			<BackgroundImage
				src={`https:${posts[0].fields.mainImage.fields.file.url}`}
				title="POSZUKUJESZ CODZIENNIE JEŚĆ I PIĆ JAK SRI LANKANS?"
				subtitle="JESTEŚ W ODPOWIEDNIM MIEJSCU!"
			/>
			<RecipeGroup data={posts} fr="4" />
		</React.Fragment>
	);
};

export default Index;
