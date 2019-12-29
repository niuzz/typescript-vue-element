import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

export const constantRoutes: RouteConfig[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "dashboard",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

export const asyncRoutes: RouteConfig[] = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/directive",
    meta: {
      name: "permission",
      title: "permission",
      icon: "permission",
    },
  },
];

const createRouter = () =>
  new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: constantRoutes,
  });

const router = createRouter();

export default router;
