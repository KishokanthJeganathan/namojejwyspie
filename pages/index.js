import React from 'react';
import Carousel from '../components/globals/carousel/Carousel';
import MobileAbout from '../components/homepage/about/MobileAbout';
import BackgroundImage from '../components/globals/backgroundImage/BackgroundImage';
import RecipeItem from '../components/globals/recipeItem/RecipeItem';
import RecipeGroup from '../components/globals/section/RecipeGroup';
import Newsletter from '../components/globals/newsletter/Newsletter';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticProps() {
	let latest = await client.getEntries({
		limit: 4,
		order: 'sys.createdAt'
	});

	return {
		props: {
			latest: latest.items
		}
	};
}

const index = ({ latest }) => {
	console.log(latest);
	return (
		<React.Fragment>
			<RecipeGroup data={latest} fr="4" />
			<Newsletter />

			{/* <BackgroundImage /> */}
			{/* <Carousel data={latest} /> */}
			{/* <MobileAbout /> */}

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
