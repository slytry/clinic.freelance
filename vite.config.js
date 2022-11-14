import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import zipPack from 'vite-plugin-zip-pack';

const src = resolve(process.cwd(), 'src');
const outDir = resolve(process.cwd(), 'dist');
const publicDir = '../public';
const _pages = resolve(src, 'pages');

export default defineConfig({
	root: src,
	publicDir,
	preview: {
		open: true,
	},
	server: {
		open: true,
	},
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(src, 'index.html'),
				// analisys: resolve(_pages, 'analisys', 'index.html'),
				// dent: resolve(_pages, 'dent', 'index.html'),
				// med: resolve(_pages, 'med', 'index.html'),
				services: resolve(_pages, 'services', 'index.html'),
				service: resolve(_pages, 'service', 'index.html'),
				reception: resolve(_pages, 'reception', 'index.html'),
			},
		},
	},
	plugins: [
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 80,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		}),
		zipPack(),
	],
});
