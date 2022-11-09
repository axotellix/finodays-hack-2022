import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		// ...svelte-preprocess options
	}),
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-') || warning.code === 'a11y-click-events-have-key-events') {
		  return;
		}
		handler(warning);
	},
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components'
		}
	}
};

export default config;
