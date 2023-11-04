import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";
import "../css/app.css";
import { ZiggyVue } from "ziggy-js";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        const page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || MainLayout;
        return page;

        // const page = resolvePageComponent(
        //     `./Pages/${name}.vue`,
        //     import.meta.glob("./Pages/**/*.vue")
        // );
        // page.then((module) => {
        //     module.default.layout = module.default.layout || MainLayout;
        // });
        // return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
});
