import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite'
import inlangPlugin from "@inlang/sdk-js/adapter-sveltekit"

export default defineConfig({
	plugins: [
		inlangPlugin(),
		sveltekit(),
		Icons({
		  compiler: 'svelte',
		})
	],
	server: {
		port: 3000,
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
