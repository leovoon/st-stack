import type { Handle } from '@sveltejs/kit';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';

const tRPCHandler = createTRPCHandle({ router, createContext });


export const handle: Handle = sequence(tRPCHandler);
