import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "${path.posix.join(__dirname.replace(/\\/g, '/'), 'resources/scss/variables')}" as *;`
            }
        },
    },
    resolve: {
        alias: {
            '$': '/resources/assets',
        },
    },
});
