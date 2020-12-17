import React from 'react';
import Link from 'next/link';
import Background from '../components/globals/background/Background';
import { v4 as uuidv4 } from 'uuid';
import Section from '../components/globals/section/Section';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticProps() {
	let data = await client.getContentTypes();

	let latest = await client.getEntries({
		limit: 4,
		order: 'sys.createdAt'
	});

	return {
		props: { posts: data.items, latest: latest.items }
	};
}

const index = ({ posts, latest }) => {
	return (
		<React.Fragment>
			<Section data={latest} />
			{/* <ul>
				{posts.map((post) => (
					<li key={uuidv4()}>
						<Link href={`/${post.sys.id}`}>
							<a>{post.name}</a>
						</Link>
					</li>
				))}
			</ul> */}
		</React.Fragment>
	);
};

export default index;
