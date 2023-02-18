import type { PageServerLoad } from './$types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const load: PageServerLoad = async function (event) {
	// const { queryClient } = await event.parent();
	// const client = trpc(event, queryClient);
	// return {
	// 	foo: client.greeting.createServerQuery('foo'),
	// 	queries: client.createServerQueries((t) => ['hi', 'hello'].map((name) => t.greeting(name)))
	// };
};
