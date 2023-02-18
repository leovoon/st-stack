import { svelteQueryWrapper } from 'trpc-svelte-query-adapter';
import type { QueryClient } from '@tanstack/svelte-query';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';
import type { Router } from '$lib/trpc/router';

let browserClient: ReturnType<typeof svelteQueryWrapper<Router>>;

export function t(init?: TRPCClientInit, queryClient?: QueryClient) {
	const isBrowser = typeof window !== 'undefined';
	if (isBrowser && browserClient) return browserClient;
	const client = svelteQueryWrapper<Router>({
		client: createTRPCClient<Router>({ init }),
		queryClient
	});
	if (isBrowser) browserClient = client;
	return client;
}
