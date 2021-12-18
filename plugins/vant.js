import { defineNuxtPlugin } from '#app';
import { Icon } from 'vant';

import 'vant/lib/index.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp
        .use(Icon)
});
