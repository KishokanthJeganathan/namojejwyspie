import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Background from '../components/globals/background/Background';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticProps() {
	let data = await client.getContentTypes();
	return {
		props: { posts: data.items }
	};
}

const index = ({ posts }) => {
	return (
		<div>
			<Background />
			<ul>
				{posts.map((post) => (
					<li key={post.sys.id}>
						<Link key={post.sys.id} href={`/${post.sys.id}`}>
							<a>{post.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default index;
