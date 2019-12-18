import router from "@/router";
import NProgress from "nprogress";
import { Message } from "element-ui";
import { Route } from "vue-router";
import { UserModule } from "@/store/modules/user";

NProgress.configure({ showSpinner: false });

const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start();

  if (UserModule.token) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      if (UserModule.roles.length === 0) {
        try {
          await UserModule.GetUserInfo();
        } catch (error) {
          await UserModule.ResetToken();
          Message.error(error || "has error");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      } else {
        next();
      }
    }
  }
});
