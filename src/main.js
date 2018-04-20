import Vue from "vue";

import App from "./App.vue";

import router from "./router/index";
import store from "./store/store";
import filters from "./shared/filters";

Vue.config.productionTip = false;

/* Initializing filters */
for (const filter in filters) {
  Vue.filter(filter, filters[filter]);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
