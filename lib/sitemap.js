const globby = require('globby');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

async function generateSitemap() {
	if (process.env.NODE_ENV === 'development') {
		return;
	}

	const baseUrl = process.env.BASE_URL;
	const pages = await globby([
		'src/pages/**/*{.js,.mdx}',
		'!src/pages/**/[*',
		'!src/pages/_*.js',
		'!src/pages/api'
	]);

	// normal page routes
	const pageLinks = pages
		.map((page) => {
			const path = page.replace('pages', '').replace('.js', '').replace('.mdx', '').replace('src/', '');
			return path === '/index'
				? { url: '/', changefreq: 'daily', priority: 0.7 }
				: { url: path, changefreq: 'daily', priority: 0.7 };
		})
		.filter((page) => !blocklist.includes(page.url));

	// post routes
	const posts = await client.getEntries('mains');
	const postLinks = posts.items.map((post) => ({
		url: `/${post.sys.contentType.sys.id}`,
		changefreq: 'daily',
		priority: 0.7
	}));

	const links = [ ...pageLinks, ...postLinks ];
	const stream = new SitemapStream({ hostname: baseUrl });

	const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

	fs.writeFileSync('./public/sitemap.xml', xml);
}

export default generateSitemap;
