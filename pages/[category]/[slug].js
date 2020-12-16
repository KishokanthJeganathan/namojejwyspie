import React from 'react';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticPaths() {
	let data = await client.getEntries();
	return {
		paths: data.items.map((path) => ({
			params: { category: path.fields.type, slug: path.fields.slug }
		})),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	let data = await client.getEntries({
		content_type: params.category,
		'fields.slug': params.slug
	});

	return {
		props: { post: data.items[0].fields }
	};
}

const recipe = ({ post }) => {
	console.log(post);

	return <div>I am recipe page</div>;
};

export default recipe;
