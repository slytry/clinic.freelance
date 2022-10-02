import { defineConfig, Plugin } from 'vite';
import { resolve } from 'path';

import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    root: 'src',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                nested: resolve(__dirname, 'src/nested/index.html'),
            },
        },
        build: {
            outDir: '../dist',
        },
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@use '/style'`,
    //         },
    //     },
    // },
    plugins: [
        createHtmlPlugin({
            minify: true,
            /**
             * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
             * @default src/main.ts
             */
            entry: 'src/main.ts',
            /**
             * If you want to store `index.html` in the specified folder, you can modify it, otherwise no configuration is required
             * @default index.html
             */
            template: 'public/index.html',

            /**
             * Data that needs to be injected into the index.html ejs template
             */
            inject: {
                data: {
                    title: 'index',
                    injectScript: `<script src="./inject.js"></script>`,
                },
                tags: [
                    {
                        injectTo: 'body-prepend',
                        tag: 'div',
                        attrs: {
                            id: 'tag',
                        },
                    },
                ],
            },
        }),
    ],
});
