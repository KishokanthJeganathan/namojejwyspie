import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.text};
`;

export async function getStaticProps() {
	let data = await client.getContentTypes();
	return {
		props: { posts: data.items }
	};
}

const index = ({ posts }) => {
	return (
		<div>
			<Title>hello</Title>
			{posts.map((post) => (
				<ul>
					<li>
						<Link key={post.sys.id} href={`/${post.sys.id}`}>
							<a>{post.name}</a>
						</Link>
					</li>
				</ul>
			))}
		</div>
	);
};

export default index;
