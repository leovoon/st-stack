import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async function (event) {
	const locale = event.locals.locale;

	return {
		locale,
		SEO: {
			title: 'My App',
			description: 'My App Description',
			canonical: 'www.example.com'
		}
	};
};
