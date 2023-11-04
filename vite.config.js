import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        vue(),
    ],

    resolve: {
        alias: {
            "@": "resources/js",
            "ziggy-js": "vendor/tightenco/ziggy/dist/vue.es.js",
        },
    },
    server: {
        hmr: {
            host: "localhost",
            watch: {
                usePolling: true,
            },
        },
    },
});
