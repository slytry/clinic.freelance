import { defineConfig } from 'vite';
import { resolve } from 'path';
import viteImagemin from 'vite-plugin-imagemin'
import zipPack from "vite-plugin-zip-pack";

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root,
    resolve: {
      alias: {
        '@': root,
      },
    },
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
    plugins: [
      zipPack(),
        viteImagemin({
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 7,
          },
          mozjpeg: {
            quality: 20,
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
      ],
});
