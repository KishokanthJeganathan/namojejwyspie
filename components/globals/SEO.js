import Head from 'next/head';
import config from '../globals/config';

export default function SEO({ description, title, image, currentURL }) {
	const { originalTitle, originalDescription, siteName, social: { twitter } } = config;

	return (
		<Head>
			<title>{`${title} | ${originalTitle}`}</title>
			<meta name="description" content={`${description ? description : originalDescription}`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${title ? title : originalTitle}`} key="ogtitle" />
			<meta
				property="og:description"
				content={`${description ? description : originalDescription}`}
				key="ogdesc"
			/>
			<meta property="og:site_name" content={siteName} />
			<meta property="twitter:card" content="summary" key="twcard" />
			<meta property="twitter:creator" content={twitter} />
			<meta property="twitter:title" content={`${title ? title : originalTitle}`} />
			<meta property="twitter:description" content={`${description ? description : originalDescription}`} />
			<meta name="twitter:creator" content={twitter} key="twhandle" />
			<meta property="og:url" content={currentURL} key="ogurl" />
			<meta property="og:image" content={image} key="ogimage" />
			<meta property="og:site_name" content={siteName} key="ogsitename" />
		</Head>
	);
}
