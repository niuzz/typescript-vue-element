import { Message } from "element-ui";
import Vue from "vue";
import Element from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
// 全局变量
Vue.prototype.$message = Message;
Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
