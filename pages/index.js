import React from 'react';
import BackgroundImage from '../components/globals/backgroundImage/BackgroundImage';
import RecipeGroup from '../components/globals/recipeGroup/RecipeGroup';
import Latest from '../components/homepage/latest/Latest';
import Layout from '../components/globals/Layout';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

export async function getStaticProps() {
	const latest = await client.getEntries({
		limit: 4,
		order: 'sys.createdAt'
	});

	const mains = await client.getEntries({
		limit: 4,
		content_type: 'mains'
	});

	const deserts = await client.getEntries({
		limit: 4,
		content_type: 'deserts'
	});

	const drinks = await client.getEntries({
		limit: 4,
		content_type: 'drinks'
	});

	const popular = await client.getEntries({
		limit: 4,
		content_type: 'popular'
	});

	return {
		props: {
			latest: latest.items,
			mains: mains.items,
			deserts: deserts.items,
			drinks: drinks.items,
			popular: popular.items
		},
		revalidate: 1
	};
}

const Index = ({ latest, mains, deserts, drinks, popular }) => {
	return (
		<Layout title="hey" description="cool" image="/food.jpg" currentURL="hi">
			<RecipeGroup data={latest} fr="4" />
			<BackgroundImage
				slug="/"
				src="/food.jpg"
				alt="image of sri lankan food"
				title="Czy kuchnia Sri Lanki różni się od kuchni indyjskiej?"
				subtitle="Tak! Bardzo i dlatego poświęciłem cały artykuł, aby opowiedzieć o jego wyjątkowości!"
			/>
			<Latest data={mains} slug="mains" title="MAINS SRI LANKANS KOCHAJĄ CODZIENNIE JEŚĆ" popular={popular} />
			<BackgroundImage
				slug="/"
				src="/ingridients.jpg"
				alt="image of sri lankan ingridients for its cuisine"
				title="Szukasz miejsca na zakup składników do dań ze Sri Lanki w Polsce?"
				subtitle="Masz szczęście, bo mam post poświęcony tylko temu!"
			/>
			<RecipeGroup data={deserts} fr="4" title="CO SRI LANKANIE MAJĄ NA PUSTYNIĘ" slug="deserts" />
			<RecipeGroup data={drinks} fr="4" title="CODZIENNE NAPOJE SRI LANKAN" slug="drinks" />
			<BackgroundImage
				slug="/"
				alt="image of sri lankan beach"
				src="/island.jpeg"
				title="Myślisz o wizycie na Sri Lance i nie wiesz, od czego zacząć?"
				subtitle="Martwiłem się moim chłopakiem, dopóki nie dał mi swojej wersji najlepszych rzeczy do zrobienia na Sri Lance przez 2 tygodnie"
			/>
			<RecipeGroup data={drinks} fr="4" title="Składniki Sri Lanki używane codziennie" slug="ingridients" />
		</Layout>
	);
};

export default Index;
