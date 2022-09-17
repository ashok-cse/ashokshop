
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-cloudflare-workers'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json']
		})
	],
	kit: {
		adapter: cloudflare()
	}
}

export default config
