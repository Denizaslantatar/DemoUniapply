import { createRouter, createWebHistory } from "vue-router";

// Dynamic Imports - Components / Public Pages
const HomeView = () => import("@/components/Auth/PublicPages/HomeView.vue");
const AboutView = () => import("@/components/Auth/PublicPages/AboutView.vue");
const Page401 = () => import("@/components/Errors/Page401.vue");

import StudentRoute from "./student.route";
import AgencyRoute from "./agency.route";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/about",
      component: AboutView,
    },
    {
      path: "/unauthorized",
      component: Page401,
    },
    ...AgencyRoute,
    ...StudentRoute,
  ],
});

import jwt_decode from "jwt-decode";
// Agency Token Control
let checkAgencyToken = () => {
  let aToken = localStorage.getItem("aToken");
  let check = false;
  if (aToken) {
    check = true;
  }
  return check;
};

// Student Token Control
let checkStudentToken = () => {
  let sToken = localStorage.getItem("sToken");
  let check = false;
  if (sToken) {
    check = true;
  }
  return check;
};

// If result is false, shows unauthorized path
/* router.beforeEach((to, from, next) => {
  if (to.matched.some((uri) => uri.meta.agency)) {
    if (checkAgencyToken()) {
      next();
    } else {
      next({
        path: "/unauthorized",
      });
    }
  } else if (to.matched.some((uri) => uri.meta.student)) {
    if (checkStudentToken()) {
      next();
    } else {
      next({
        path: "/unauthorized",
      });
    }
  } else {
    next();
  }
}); */

export default router;
