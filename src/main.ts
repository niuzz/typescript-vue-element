import { Message } from "element-ui";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import service from "./utils/https";

Vue.config.productionTip = false;

Vue.prototype.$https = service;
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
