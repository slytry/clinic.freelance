import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                analisys: resolve(root, 'pages', 'analisys', 'index.html'),
                dent: resolve(root, 'pages', 'dent', 'index.html'),
                med: resolve(root, 'pages', 'med', 'index.html'),
                services: resolve(root, 'pages', 'services', 'index.html'),
                service: resolve(root, 'pages', 'service', 'index.html'),
                reception: resolve(root, 'pages', 'reception', 'index.html'),
            },
        },
    },
});
