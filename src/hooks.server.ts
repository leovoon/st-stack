import type { Handle } from '@sveltejs/kit';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';
import { detectLocale } from '$lib/i18n/i18n-util.js';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { sequence } from '@sveltejs/kit/hooks';

const tRPCHandler = createTRPCHandle({ router, createContext });
const handleDetectLocale = (async ({ event, resolve }) => {
	//TODO: get locale from cookie
	const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
	const locale = detectLocale(acceptLanguageHeaderDetector);
	event.locals.locale = locale;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
}) satisfies Handle;

export const handle: Handle = sequence(tRPCHandler, handleDetectLocale);
