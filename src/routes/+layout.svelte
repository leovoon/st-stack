<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	export let data: LayoutData;

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

</script>

<SvelteSeo
	title={$page.data.SEO.title}
	description={$page.data.SEO.description}
	canonical={$page.data.SEO.canonical}
/>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
