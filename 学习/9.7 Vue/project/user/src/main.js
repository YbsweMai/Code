import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Moment from "moment";
Moment.locale("zh-cn");

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.filter("globalFormatTime", value => {
  // 全局时间格式

  let time = Moment(value).format("YYYY-MM-DD  H:mm");
  return time;
});

import { post, get, del, put } from "./utils/axios";
Vue.prototype.yPost = post;
Vue.prototype.yGet = get;
Vue.prototype.yDel = del;
Vue.prototype.yPut = put;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
