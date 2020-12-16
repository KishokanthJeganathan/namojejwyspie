import React from 'react';
import Link from 'next/link';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticPaths() {
	let data = await client.getEntries();
	return {
		paths: data.items.map((path) => ({
			params: { category: path.fields.type }
		})),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	let data = await client.getEntries({
		content_type: params.category
	});

	return {
		props: { posts: data.items }
	};
}

const index = ({ posts }) => {
	console.log(posts);
	return (
		<div>
			{posts.map((post) => (
				<ul>
					<li>
						<Link href={`/${post.fields.type}/${post.fields.slug}`}>
							<a>{post.fields.title}</a>
						</Link>
					</li>
				</ul>
			))}
		</div>
	);
};

export default index;
