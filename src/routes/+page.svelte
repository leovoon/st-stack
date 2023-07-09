<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/trpc/client';
	import { fade } from 'svelte/transition';
	import SvelteLogo from '~icons/vscode-icons/file-type-svelte'
	import { i } from '@inlang/sdk-js'

	const client = t($page);
	let hello = client.greeting.sayHi.createQuery('from tRPC', {
		refetchInterval: 3000
	});
</script>

<main class="mx-auto my-0 max-w-4xl space-y-4 p-12">
	<h1
		class="max-w-full bg-gradient-to-t from-orange-600 via-red-500 to-yellow-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-8xl"
	>
		st-stack
	</h1>

	<ul class="gap-x-4 sm:flex [&>*]:sm:inline-block">
		<a href="https://kit.svelte.dev/">
			<li>sveltekit, Typescript + playwright + vitest</li>
		</a>
		<a
			href="
		https://tailwindcss.com/docs/adding-custom-styles#customizing-your-theme"
		>
			<li>tailwindcss, with sort plugin</li>
		</a>
		<a href="https://captaincodeman.github.io/svelte-headlessui/">
			<li>svelte-headless-ui</li>
		</a>
		<a href="https://icflorescu.github.io/trpc-sveltekit/">
			<li>tRPC-sveltekit</li>
		</a>
		<a href="https://github.com/vishalbalaji/trpc-svelte-query-adapter">
			<li>tRPC-svelte-query-adapter: experimental</li>
		</a>
		<a href="https://www.prisma.io/docs/concepts/components/prisma-client/crud">
			<li>prisma</li>
		</a>
		<a href="https://inlang.com/documentation/sdk/sveltekit">
			<li>i18n - inlang</li>
		</a>
		<a href="https://github.com/artiebits/svelte-seo">
			<li>svelte-seo</li>
		</a>
		<a href="https://zod.dev/">
			<li>zod</li>
		</a>
		<a href="https://github.com/antfu/unplugin-icons">
			unplugin icon <SvelteLogo/>
		</a>
	</ul>

	<pre class="w-max bg-gradient-to-r from-orange-200 to-slate-100/10 text-orange-700 ">
	<code>
	{@html `
	{#if $hello.isLoading}
		Loading...refetch every 3s
	{:else if $hello.isError}
		{$hello.error.message}
	{:else}
		{$hello.data.hi}
	{/if}`}
</code>
	</pre>

	<div>
		{#if $hello.isLoading}
			Loading...refetch every 3s
		{:else if $hello.isError}
			{$hello.error.message}
		{:else}
			{#key $hello.data.hi}
				<span in:fade>
					{$hello.data.hi}
				</span>
			{/key}
		{/if}
	</div>

	<a
		href="https://github.com/leovoon/st-stack"
		class="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-orange-100 px-6 py-2 text-lg font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
	>
		<span> Setup </span>
	</a>

	<footer class="py-4 text-sm">
		<a href="https://github.com/leovoon/" class="inline-block">
			<div class="flex items-center">
				
				<span> by </span>
			</div>
			<span
				class="relative mx-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-400 hover:before:bg-orange-600"
			>
				<span class="relative text-white"> {i("author")} </span>
			</span>
		</a>
	</footer>
</main>
