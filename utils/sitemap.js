const YOUR_URL = 'https://sitemap-delta.vercel.app';
const getDate = new Date().toISOString();

const client = require('contentful').createClient({
	space: 'bw95q4zgddfj',
	accessToken: 'eq9wMNqM3KEyfjI4GXJf9BXIsapjQewWTb_mBH58yY0'
});

async function generateSiteMap() {
	const mains = await client.getEntries({
		limit: 4,
		content_type: 'mains'
	});

	// map these posts ids to generate your sitemap
	const postList = `
        ${mains.items
			.map((id) => {
				return `
              <url>
                <loc>${`${YOUR_URL}/${id.sys.contentType.sys.id}`}</loc>
                <lastmod>${getDate}</lastmod>
              </url>`;
			})
			.join('')}
      `;

	// Send a list of paths to globby for it to read
	// We add an ! before the files we want to be ignored
	// change the file path to match the files in your own project
	const pages = await globby([ 'src/pages/**/*.js', '!src/pages/_*.js', '!src/pages/**/[id].js', '!src/pages/api' ]);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
				.map((page) => {
					const regex = /(pages)|(src)|(.js)|(.md)|(index)/gi;
					const route = page.replace(regex, '');
					return `
                      <url>
                          <loc>${`${YOUR_URL}/${route}`}</loc>
                      </url>
                  `;
				})
				.join('')}
            // Add the postList
            {postList}
      </urlset>
  `;

	fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSiteMap();
