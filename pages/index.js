import React from 'react';
import BackgroundImage from '../components/globals/backgroundImage/BackgroundImage';
import About from '../components/homepage/about/About';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticProps() {
	let data = await client.getContentTypes();

	let latest = await client.getEntries({
		limit: 3,
		order: 'sys.createdAt'
	});

	let deserts = await client.getEntries({
		limit: 4,
		order: 'sys.createdAt'
	});

	const shopping = await client.getEntry('54iIx9Pc2QlkJgo2SzyxT2');

	const about = await client.getEntry('6cavwsUEt3zmpvL1rbMxyZ');

	return {
		props: {
			posts: data.items,
			latest: latest.items,
			shopping: shopping.fields,
			about: about.fields,
			deserts: deserts.items
		}
	};
}

const index = ({ posts, latest, shopping, about, deserts }) => {
	return (
		<React.Fragment>
			<BackgroundImage src="/Srilankan Cooking.jpg" />
			<About />

			{/* <RecipeGroup data={latest} title="MAINS" slug="mains" fr="3" /> */}

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
