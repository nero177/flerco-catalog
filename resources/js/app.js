import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import { createInertiaApp } from '@inertiajs/vue3'
import 'aos/dist/aos.css'
import AOS from 'aos'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import { createI18nInstance } from './i18n'

const pinia = createPinia()

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    const i18n = createI18nInstance({
      locale: props.initialPage.props.locale ?? 'uk',
      messages: props.initialPage.props.translations ?? {},
    })

    const app = createApp({ render: () => h(App, props) });
    
    app.use(plugin)
    app.use(pinia)
    app.use(i18n);
    app.use(VueViewer)

    const locale = props.initialPage.props.locale || 'uk';
    const messages = props.initialPage.props.translations || {};

    i18n.global.setLocaleMessage(
      locale,
      messages[locale] || {}
    );

    i18n.global.locale.value = locale;

    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
    })

    app.mount(el)
  },
})