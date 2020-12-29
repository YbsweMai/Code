import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 把封装的get post请求挂载到vue实例的原型上变成全局方法
import { get,post ,put,del} from "./utils/fetch" 
Vue.prototype.abcGet = get  // .abcGet是名字
Vue.prototype.abcPost = post
Vue.prototype.abcPut = put
Vue.prototype.abcDel = del

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
