/* eslint-disable no-undef */
import { resolve } from 'path';

export const root = resolve(process.cwd(), 'src');
export const outDir = resolve(process.cwd(), 'dist');
const _pages = resolve(root, 'pages');

export const path = {
	home: resolve(_pages, 'home'),
	anal: resolve(_pages, 'analisys'),
};
