// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'InkLoom',
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				PageTitle: './src/components/overrides/PageTitle.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '刑法专题图解',
					items: [
						{ autogenerate: { directory: 'criminal-law' } }
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
			],
		}),
	],
});
