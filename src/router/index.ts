import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import LoginView from "../views/LoginView.vue";
import {
  LOGIN_PATH,
  LOGIN_ROUTE,
  LOGIN_TITLE,
  STATUS_PATH,
  STATUS_ROUTE,
  STATUS_TITLE,
} from "@/constants/routes";
import AuthenticationService from "@/services/authentication.service";

function statusGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  if (AuthenticationService.isAuthenticated()) {
    next();
  } else {
    next(LOGIN_PATH);
  }
}

function loginGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  if (AuthenticationService.isAuthenticated()) {
    next(STATUS_PATH);
  } else {
    next();
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: LOGIN_PATH,
    name: LOGIN_ROUTE,
    beforeEnter: loginGuard,
    component: LoginView,
    meta: { title: LOGIN_TITLE },
  },
  {
    path: STATUS_PATH,
    name: STATUS_ROUTE,
    beforeEnter: statusGuard,
    component: () => import("../views/StatusView.vue"),
    meta: { title: STATUS_TITLE },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    _: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const title = to.meta.title as string;
    if (title) {
      document.title = title;
    }
    next();
  }
);

export default router;
