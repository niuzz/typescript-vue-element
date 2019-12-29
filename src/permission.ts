import router from "@/router";
import NProgress from "nprogress";
import { Message } from "element-ui";
import { Route } from "vue-router";
import { UserModule } from "@/store/modules/user";
import { PermissionModule } from "@/store/modules/permission";

NProgress.configure({ showSpinner: false });

const whiteList = ["/login", "/auth-redirect"];

const getPageTitle = (key: string) => {
  return key;
};

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
          const roles = UserModule.roles;
          PermissionModule.GenerateRoutes(roles);
          router.addRoutes(PermissionModule.dynamicRoutes);
          next({ replace: true });
        } catch (e) {
          UserModule.ResetToken();
          Message.error(e || "has error");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach((to: Route) => {
  NProgress.done();
  document.title = getPageTitle(to.meta.title);
});
