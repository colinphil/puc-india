// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import VueNumber from "vue-number-animation";
import VueCountdown from "@chenfengyuan/vue-countdown";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.link.push({
    rel: 'stylesheet',
    href:'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
  });

  Vue.component(VueCountdown.name, VueCountdown);

  // Font Awesome
  Vue.component('font-awesome-icon', FontAwesomeIcon);

  // Animation Counter
  Vue.component('vue-number-animation', VueNumber);

  // Register BootstrapVue
  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
}
