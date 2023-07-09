# st-stack

opinionated sveltekit starter

- [sveltekit](https://kit.svelte.dev/), TypeScript + playwright + vitest
- [tailwindcss](https://tailwindcss.com/docs/adding-custom-styles#customizing-your-theme) with [sort plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [tRPC-sveltekit](https://icflorescu.github.io/trpc-sveltekit/page-server-data)
- [tRPC-svelte-query-adapter](https://github.com/vishalbalaji/trpc-svelte-query-adapter) experimental
- [zod](https://zod.dev/)
- [i18n - inlang](https://inlang.com/documentation/sdk/sveltekit)
- [prisma](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
- [tabler-icons](https://github.com/tabler/tabler-icons/tree/master/packages/icons-svelte)
- [svelte-seo](https://github.com/artiebits/svelte-seo)
- [unplugin icons](https://github.com/antfu/unplugin-icons)
- sitemap.xml

## Setup

### Prerequisite

Node.js and npm

I use `ni` - package manager shortcut by [antfu](https://github.com/antfu/ni)

```bash

npm i -g @antfu/ni
```

### Clone the project

```bash
npx degit https://github.com/leovoon/st-stack myApp
```

### Installation

Go inside the folder, install dependencies

```bash
cd myApp
ni
```

### Developing

```bash
# startup dev server

nr dev
```

```bash
# generate database schema types

npx prisma generate
```

## Building

To create a production version of your app:

```bash
nr build
```

## Contribution

Feel free to open pull request.
