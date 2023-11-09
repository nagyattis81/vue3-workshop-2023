import { STATUS_PATH } from "@/constants/routes";
import { LS_TOKEN_KEY, LS_TOKEN_VALUE } from "@/constants/storage";
import router from "@/router";

export default {
  isAuthenticated() {
    const token = localStorage.getItem(LS_TOKEN_KEY);
    return token !== null;
  },
  login() {
    localStorage.setItem(LS_TOKEN_KEY, LS_TOKEN_VALUE);
    router.push(STATUS_PATH);
  },
};
