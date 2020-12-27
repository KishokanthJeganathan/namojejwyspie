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

	const all = await client.getEntries();

	return {
		props: {
			latest: latest.items,
			mains: mains.items,
			deserts: deserts.items,
			drinks: drinks.items,
			popular: popular.items,
			all
		},
		revalidate: 1
	};
}

const Index = ({ latest, mains, deserts, drinks, popular, all }) => {
	console.log(all);
	const cleanedData = all.items.filter((post) => post.sys.contentType.sys.id !== 'popular');

	console.log(cleanedData);
	return (
		<React.Fragment>
			<RecipeGroup data={latest} fr="4" />
			<Newsletter />
			<BackgroundImage
				slug="/"
				src="/food.jpg"
				title="Czy kuchnia Sri Lanki różni się od kuchni indyjskiej?"
				subtitle="Tak! Bardzo i dlatego poświęciłem cały artykuł, aby opowiedzieć o jego wyjątkowości!"
			/>
			<Latest data={mains} slug="mains" title="MAINS SRI LANKANS KOCHAJĄ CODZIENNIE JEŚĆ" popular={popular} />
			<BackgroundImage
				slug="/"
				src="/ingridients.jpg"
				title="Szukasz miejsca na zakup składników do dań ze Sri Lanki w Polsce?"
				subtitle="Masz szczęście, bo mam post poświęcony tylko temu!"
			/>
			<RecipeGroup data={deserts} fr="4" title="CO SRI LANKANIE MAJĄ NA PUSTYNIĘ" slug="deserts" />
			<BackgroundImage
				slug="/"
				src="/island.jpeg"
				title="Myślisz o wizycie na Sri Lance i nie wiesz, od czego zacząć?"
				subtitle="Martwiłem się moim chłopakiem, dopóki nie dał mi swojej wersji najlepszych rzeczy do zrobienia na Sri Lance przez 2 tygodnie"
			/>
			<RecipeGroup data={drinks} fr="4" title="CODZIENNE NAPOJE SRI LANKAN" slug="drinks" />
		</React.Fragment>
	);
};

export default Index;
