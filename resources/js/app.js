/**
 * JavaScript dependencies
 */

window._ = require("lodash");
window.axios = require("axios");

/**
 * Ajax config
 */
window.axios.defaults.headers.common = {
  "X-CSRF-TOKEN": window.Laravel.csrfToken,
  "X-Requested-With": "XMLHttpRequest"
};

/**
 * Vue application instance
 */
import Vue from "vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueAxios, window.axios);

// lodash in vue
Vue.set(Vue.prototype, "_", _);

// disable message
//Vue.config.productionTip = false

import routes from "./routes";
Vue.router = new VueRouter({
  routes
});

// vue auth
// Vue.use(VueAuth, {
  // auth: require("@websanova/vue-auth/drivers/auth/bearer.js"),
  // http: require("@websanova/vue-auth/drivers/http/axios.1.x.js"),
  // router: require("@websanova/vue-auth/drivers/router/vue-router.2.x.js"),
  // rolesVar: "role",
  // loginData: { url: "login" },
  // logoutData: { url: "logout" },
  // fetchData: { url: "user" },
  // refreshData: { enabled: false }
// });

//Buffer
window.bus = new Vue();

import App from './views/App';

// init
new Vue({
  el: '#app',
  router: Vue.router,
  components: { App },
  template: '<App/>',
});

