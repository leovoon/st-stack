import { greeting } from '$lib/trpc/routes/greeting';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { t } from '$lib/trpc/t';

export const router = t.router({
	// Add your routers here
	greeting
});

export type Router = typeof router;

// 👇 type helpers 💡
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
