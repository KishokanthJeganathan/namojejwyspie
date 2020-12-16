import React from 'react';
import Link from 'next/link';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticProps({ params }) {
	let data = await client.getContentTypes();
	return {
		props: { posts: data.items }
	};
}

const index = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<ul>
					<li>
						<Link href={`/${post.sys.id}`}>
							<a>{post.name}</a>
						</Link>
					</li>
				</ul>
			))}
		</div>
	);
};

export default index;
