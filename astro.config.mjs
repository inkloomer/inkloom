// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import starlightAutoSidebar from 'starlight-auto-sidebar';
import starlightCatppuccin from '@catppuccin/starlight';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://astro.build/config
export default defineConfig({
	// 🎯 你的 GitHub 组织/用户账号域名：https://inkloomer.github.io
	site: 'https://inkloomer.github.io',
	
	// 🎯 你的 GitHub 仓库名称（子项目名路径）：/inkloom
	base: '/inkloom',

	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': path.resolve('./src'),
			},
		},
		// Pre-bundle the Remotion stack: client:only pages otherwise pull it as
		// hundreds of unbundled ESM requests on every dev cold load.
		optimizeDeps: {
			include: [
				'react',
				'react-dom',
				'react-dom/client',
				'react/jsx-runtime',
				'remotion',
				'@remotion/player',
				'@remotion/transitions',
				'@remotion/effects',
				'@remotion/rough-notation',
				'@remotion/fonts',
				'remotion-animated',
				'remotion-bits',
				'lucide-react',
				'neotraverse',
			],
		},
	},

	integrations: [
		react(),
		starlight({
			title: 'InkLoom',
			plugins: [
				starlightAutoSidebar(),
				starlightCatppuccin({
					dark: { flavor: 'mocha', accent: 'mauve' },
					light: { flavor: 'latte', accent: 'mauve' }
				})
			],
			customCss: [
				'./src/styles/site-tailwind.css',
				'./src/styles/custom.css',
			],
			components: {
				Head: './src/components/overrides/TypographyHead.astro',
				PageTitle: './src/components/overrides/PageTitle.astro',
				ThemeSelect: './src/components/overrides/ThemeSelect.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/inkloomer/inkloom' }],
			editLink: {
				base: 'https://github.com/inkloomer/inkloom/edit/main/',
			},
			lastUpdated: true,
			pagefind: true,
			sidebar: [
				{
					label: 'Demo',
					items: [
						{ autogenerate: { directory: 'demo' } }
					],
				},
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
