import Vue from "vue";
import App from "./App.vue";
import router from "./router/index"

Vue.config.productionTip = false;

new Vue({
  /* 引用的router需要放进来 */
  router,
  render: h => h(App)
}).$mount("#app");
