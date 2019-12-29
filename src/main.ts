import { Message } from "element-ui";
import Vue from "vue";
import Element from "element-ui";
import SvgIcon from "vue-svgicon";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/locales";
import "element-ui/lib/theme-chalk/index.css";
import "@/permission";
import "@/icons/components";

Vue.config.productionTip = false;
// 全局变量
Vue.prototype.$message = Message;
Vue.use(Element, {
  i18n: (key: string, value: string) => i18n.t(key, value),
});

Vue.use(SvgIcon, {
  tagName: "svg-icon",
  defaultWidth: "1em",
  defaultHeight: "1em",
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount("#app");
