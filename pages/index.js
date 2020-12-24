import React from 'react';
import BackgroundImage from '../components/globals/backgroundImage/BackgroundImage';
import RecipeGroup from '../components/globals/recipeGroup/RecipeGroup';
import Newsletter from '../components/globals/newsletter/Newsletter';
import Latest from '../components/homepage/latest/Latest';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticProps() {
	const latest = await client.getEntries({
		limit: 4,
		content_type: 'mains'
	});

	return {
		props: {
			latest: latest.items
		},
		revalidate: 1
	};
}

const Index = ({ latest }) => {
	return (
		<React.Fragment>
			<RecipeGroup data={latest} fr="4" />
			<Newsletter />
			<BackgroundImage
				src="/food.jpg"
				title="Is Sri Lankan cuisine different from Indian cuisine?"
				subtitle="Yes! Very much so and that is why I dedicated an entire article to talk how unique it is!"
			/>
			<Latest data={latest} slug="mains" />
			<BackgroundImage
				src="/ingridients.jpg"
				title="Looking for a place to buy the ingridients for Sri Lankan dishes in Poland?"
				subtitle="You are in luck because I have a post dedicated only for this!"
			/>
			<RecipeGroup data={latest} fr="4" title="WHAT THE SRI LANKANS HAVE FOR DESERT" slug="deserts" />
			<BackgroundImage
				src="/island.jpeg"
				title="Thinking of visiting Sri Lanka and not sure where to start?"
				subtitle="I bothered my boyfriend untill he gave me his version of the best things to do in Sri Lanka for a 2 weeks"
			/>
			<RecipeGroup data={latest} fr="4" title="EVERYDAY SRI LANKAN DRINKS" slug="drinks" />
		</React.Fragment>
	);
};

export default Index;
