import { Message } from "element-ui";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// 全局变量
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
