import { defineConfig } from 'vite';
import { resolve } from 'path';

// import { createHtmlPlugin } from 'vite-plugin-html';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root,
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                nested: resolve(__dirname, 'src/nested/index.html'),
            },
        },
        build: {
            outDir,
            emptyOutDir: true,
            rollupOptions: {
                main: resolve(root, 'index.html'),
                service: resolve(root, 'pages', 'services', 'index.html'),
            },
        },
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@use '/style/absract' as *;`,
    //         },
    //     },
    // },
    // plugins: [
    //     createHtmlPlugin({
    //         minify: false,
    //         pages: [
    //             {
    //                 entry: 'main.ts',
    //                 filename: 'index.html',
    //                 template: 'index.html',
    //                 injectOptions: {
    //                     data: {
    //                         title: 'Семья',
    //                     },
    //                 },
    //             },
    //             {
    //                 entry: 'src/pages/services.js',
    //                 filename: 'services.html',
    //                 template: 'src/pages/services.html',
    //                 injectOptions: {
    //                     data: {
    //                         title: 'Services',
    //                     },
    //                 },
    //             },
    //         ],
    //     }),
    // ],
});
