// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightAutoSidebar from 'starlight-auto-sidebar';
import path from 'path';

// https://astro.build/config
export default defineConfig({
	// 🎯 你的 GitHub 组织/用户账号域名：https://inkloomer.github.io
	site: 'https://inkloomer.github.io',
	
	// 🎯 你的 GitHub 仓库名称（子项目名路径）：/inkloom
	base: '/inkloom',

	vite: {
		resolve: {
			alias: {
				'@': path.resolve('./src'),
			},
		},
	},

	integrations: [
		starlight({
			title: 'InkLoom',
			plugins: [starlightAutoSidebar()],
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				PageTitle: './src/components/overrides/PageTitle.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '客观题',
					items: [
						{ autogenerate: { directory: 'objective' } }
					],
				},
			],
		}),
	],
});
