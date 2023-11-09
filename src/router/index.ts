import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import {
  LOGIN_PATH,
  LOGIN_ROUTE,
  LOGIN_TITLE,
  STATUS_PATH,
  STATUS_ROUTE,
  STATUS_TITLE,
} from "@/constants/routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: LOGIN_PATH,
    name: LOGIN_ROUTE,
    component: LoginView,
    meta: { title: LOGIN_TITLE },
  },
  {
    path: STATUS_PATH,
    name: STATUS_ROUTE,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StatusView.vue"),
    meta: { title: STATUS_TITLE },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  const title = to.meta.title as string;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;
