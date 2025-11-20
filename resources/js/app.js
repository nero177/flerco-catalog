import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import { createInertiaApp } from '@inertiajs/vue3'
import i18n from './i18n';
import 'aos/dist/aos.css'
import AOS from 'aos'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

const pinia = createPinia()

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) });
    
    app.use(plugin)
    app.use(pinia)
    app.use(i18n);
    app.use(VueViewer)
    
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
    })

    app.mount(el)
  },
})