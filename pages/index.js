import React from 'react';
import Carousel from '../components/globals/carousel/Carousel';
import MobileAbout from '../components/homepage/about/MobileAbout';
import BackgroundImage from '../components/globals/backgroundImage/BackgroundImage';
import RecipeItem from '../components/globals/recipeItem/RecipeItem';
import RecipeGroup from '../components/globals/recipeGroup/RecipeGroup';
import Newsletter from '../components/globals/newsletter/Newsletter';
import About from '../components/homepage/about/About';
import Latest from '../components/homepage/latest/Latest';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticProps() {
	const latest = await client.getEntries({
		limit: 4,
		order: 'sys.createdAt'
	});

	const About = await client.getEntry('6cavwsUEt3zmpvL1rbMxyZ');

	return {
		props: {
			latest: latest.items,
			about: About.fields
		}
	};
}

const index = ({ latest, about }) => {
	console.log(about);
	return (
		<React.Fragment>
			<RecipeGroup data={latest} fr="4" />
			<Newsletter />
			<BackgroundImage
				src="/food.jpg"
				title="Is Sri Lankan cuisine different from Indian cuisine?"
				subtitle="Yes! Very much so and that is why I dedicated an entire article to talk about how unique it is!"
			/>
			<Latest data={latest} about={about} />
			<RecipeGroup data={latest} fr="4" title="EVERYDAY MEALS FROM SRI LANKA" slug="hey" />
			<BackgroundImage
				src="/ingridients.jpg"
				title="Looking for a place to buy the ingridients for Sri Lankan dishes in Poland?"
				subtitle="You are in luck because I have a post dedicated only for this!"
			/>
			<RecipeGroup data={latest} fr="4" title="WHAT THE SRI LANKANS HAVE FOR DESERT" slug="hey" />
			<BackgroundImage
				src="/island.jpeg"
				title="Thinking of visiting Sri Lanka and not sure where to start?"
				subtitle="I bothered my boyfriend untill he gave me his version of the best things to do in Sri Lanka for a 2 weeks"
			/>
			<RecipeGroup data={latest} fr="4" title="EVERYDAY SRI LANKAN DRINKS" slug="hey" />
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
