import React from 'react';
import BackgroundImage from '../components/globals/backgroundImage/BackgroundImage';
import RecipeGroup from '../components/globals/recipeGroup/RecipeGroup';
import Newsletter from '../components/globals/newsletter/Newsletter';
import Latest from '../components/homepage/latest/Latest';
import InstagramCarousal from '../components/homepage/instagram/InstagramCarousal';
import Carousel from '../components/globals/carousel/Carousel';

const userInstagram = require('user-instagram');

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticProps() {
	const latest = await client.getEntries({
		limit: 4,
		order: 'sys.createdAt'
	});

	const about = await client.getEntry('6cavwsUEt3zmpvL1rbMxyZ');

	const insta = await userInstagram('namojejwyspie');

	return {
		props: {
			latest: latest.items,
			about: about.fields,
			insta: insta
		}
	};
}
const index = ({ latest, about, insta }) => {
	console.log(latest);
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
			<InstagramCarousal data={insta} />

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
