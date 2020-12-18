import React from 'react';
import Link from 'next/link';
import Background from '../components/globals/background/Background';
import { v4 as uuidv4 } from 'uuid';
import Section from '../components/globals/section/Section';
import Carousel from '../components/globals/carousel/Carousel';
import About from '../components/homepage/about/About';
import styled from 'styled-components';
import MobileAbout from '../components/homepage/about/MobileAbout';

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

	const shopping = await client.getEntry('54iIx9Pc2QlkJgo2SzyxT2');

	const about = await client.getEntry('6cavwsUEt3zmpvL1rbMxyZ');

	return {
		props: { posts: data.items, latest: latest.items, shopping: shopping.fields, about: about.fields }
	};
}

const Aside = styled.aside`
	width: 20%;
	padding-left: .5rem;
	margin-left: .5rem;
	float: right;
`;
const index = ({ posts, latest, shopping, about }) => {
	return (
		<React.Fragment>
			<Carousel data={latest} />
			<MobileAbout />

			{/* <Section data={latest} /> */}

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
