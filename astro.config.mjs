// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// 🎯 你的 GitHub 组织/用户账号域名：https://inkloomer.github.io
	site: 'https://inkloomer.github.io',
	
	// 🎯 你的 GitHub 仓库名称（子项目名路径）：/inkloom
	base: '/inkloom',

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
