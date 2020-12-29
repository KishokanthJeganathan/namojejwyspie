import React from 'react';

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
			.map(({ id }) => {
				return `
                    <url>
                        <loc>${`https://sitemap-delta.vercel.app/${id.sys.contentType.sys.id}`}</loc>
                    </url>
                `;
			})
			.join('')}
    </urlset>
    `;

export async function getStaticProps({ res }) {
	const mains = await client.getEntries({
		limit: 4,
		content_type: 'mains'
	});

	const posts = mains.items;

	res.setHeader('Content-Type', 'text/xml');
	res.write(createSitemap(posts));
	res.end();
}

export default Sitemap;
