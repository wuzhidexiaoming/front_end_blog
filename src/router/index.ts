import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/index.vue";

const routerHistory = createWebHistory();
export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "关于",
    },
    component: () => import("../pages/about/index.vue"),
  },
  {
    path: "/hitokoto",
    name: "hitokoto",
    meta: {
      title: "一言",
    },
    component: () => import("../pages/hitokoto/index.vue"),
  },
  {
    path: "/task",
    name: "task",
    meta: {
      isShow: false,
      title: "任务",
    },
    component: () => import("../pages/task/index.vue"),
  },
  {
    path: "/shanbay",
    name: "shanbay",
    meta: {
      isShow: false,
      title: "扇贝",
    },
    component: () => import("../pages/shanbay/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/error/404.vue"),
  },
];
const router = createRouter({
  history: routerHistory,
  routes,
});
export default router;
