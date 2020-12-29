module.exports = {
	images: {
		domains: [ 'images.ctfassets.net' ]
	},
	i18n: {
		locales: [ 'pl' ],
		defaultLocale: 'pl'
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/getAllPosts');
		}

		return config;
	}
};
