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
    meta: {
      hidden: true,
    },
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "*",
    redirect: "/",
    meta: {
      hidden: true,
    },
  },
];

export const asyncRoutes: RouteConfig[] = [
  {
    path: "/table",
    component: Layout,
    redirect: "/table/complex-table",
    name: "Table",
    meta: {
      title: "table",
      icon: "table",
    },
    children: [
      {
        path: "draggable-table",
        component: () => import("@/views/table/draggable-table.vue"),
        name: "draggable-table",
        meta: {
          title: "draggableTable",
        },
      },
      {
        path: "complex-table",
        component: () => import("@/views/table/complex-table.vue"),
        name: "complex-table",
        meta: {
          title: "complexTable",
        },
      },
    ],
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
