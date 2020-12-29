import React from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import SEO from './SEO';

const Layout = ({ children, title, description, image, slug, article }) => {
	return (
		<React.Fragment>
			<SEO title={title} description={description} image={image} slug={slug} article={article} />
			<Navbar />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
