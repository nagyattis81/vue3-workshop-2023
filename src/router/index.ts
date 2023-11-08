import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import {
  LOGIN_PATH,
  LOGIN_ROUTE,
  STATUS_PATH,
  STATUS_ROUTE,
} from "@/constants/routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: LOGIN_PATH,
    name: LOGIN_ROUTE,
    component: LoginView,
  },
  {
    path: STATUS_PATH,
    name: STATUS_ROUTE,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StatusView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
