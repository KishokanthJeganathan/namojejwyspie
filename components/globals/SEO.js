import Head from 'next/head';
import config from '../globals/config';

export default function SEO({ description, title, image, slug }) {
	const { originalTitle, originalDescription, siteName, social: { twitter }, currentURL } = config;

	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<title>{`${title} | ${originalTitle}`}</title>
			<meta name="description" content={`${description ? description : originalDescription}`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${title ? title : originalTitle}`} key="ogtitle" />
			<meta
				property="og:description"
				content={`${description ? description : originalDescription}`}
				key="ogdesc"
			/>
			<meta property="twitter:card" content="summary" key="twcard" />
			<meta name="twitter:creator" content={twitter} key="twhandle" />
			<meta property="og:url" content={`${currentURL}/${slug}`} key="ogurl" />
			<meta property="og:image" content={image} key="ogimage" />
			<meta property="og:site_name" content={siteName} key="ogsitename" />
		</Head>
	);
}
