/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */
// Plugins
import vuetify from './vuetify'
import router from '../router'
//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
export function registerPlugins(app) {
    app.use(AOS.init())
        .use(vuetify)
        .use(router)
}