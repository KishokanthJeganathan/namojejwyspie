const { Readable } = require('stream');
const { SitemapStream, streamToPromise } = require('sitemap');
const globby = require('globby');
const path = require('path');
const fs = require('fs');

// Initialize Contentful SDK
const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

const getAllPosts = async () => client.getEntries({ content_type: 'post' }).then((posts) => posts.items);
(async function() {
	/*
    baseStaticPages string[] ['about.js', 'contact.js']

    Include all JS files in pages/ root directory.
    Exlcude index.js, underscored files, dynamic page templates, API folder.
  */
	const baseStaticPages = await globby(
		[ '**.js', '!_*.js', '!404.js', '!index.js', '![category]/[slug].js', '!api' ],
		{ cwd: path.resolve(__dirname, '../pages') }
	);

	// staticPages string[] ['about', 'contact']
	const staticPages = baseStaticPages.map((page) => page.split('.')[0]);

	let allData = await client.getEntries();

	const cleanedData = allData.items.filter((post) => post.sys.contentType.sys.id !== 'popular');
	const postSlugs = cleanedData.map((post) => `${post.sys.contentType.sys.id}/${post.fields.slug}`);

	const sitemapStream = new SitemapStream({
		hostname: 'https://sitemap-delta.vercel.app' // https://pauldavidpatterson.com
	});

	const links = [ ...postSlugs, ...staticPages, '/' ];
	const linksStream = Readable.from(links).pipe(sitemapStream);

	const xml = await streamToPromise(linksStream);

	const publicFolderPath = path.resolve(__dirname, '../public/sitemap.xml');

	fs.writeFileSync(publicFolderPath, xml);

	console.log('Generated and saved sitemap: /public/sitemap.xml');
})();
