import React from 'react';
import BackgroundImage from '../../components/globals/backgroundImage/BackgroundImage';
import RecipeGroup from '../../components/globals/recipeGroup/RecipeGroup';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticPaths() {
	let data = await client.getEntries();
	return {
		paths: data.items.map((path) => ({
			params: { category: path.sys.contentType.sys.id }
		})),
		fallback: true
	};
}

const index = ({ posts }) => {
	if (!posts) return <div>404</div>;

	return (
		<React.Fragment>
			<BackgroundImage
				src="/ingridients.jpg"
				title="Looking for a place to buy the ingridients for Sri Lankan dishes in Poland?"
				subtitle="You are in luck because I have a post dedicated only for this!"
			/>
			<RecipeGroup data={posts} fr="4" />
		</React.Fragment>
	);
};

export async function getStaticProps({ params }) {
	let data = await client.getEntries({
		content_type: params.category
	});

	return {
		props: { posts: data.items },
		revalidate: 1
	};
}

export default index;
