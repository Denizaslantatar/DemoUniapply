import { createRouter, createWebHistory } from "vue-router";

// Dynamic Imports - Components / Public Pages
const HomeView = () => import("@/components/Public/HomeView.vue");
const AboutView = () => import("@/components/Public/AboutView.vue");
const Page401 = () => import("@/components/Errors/Page401.vue");
const Page404 = () => import("@/components/Errors/Page404.vue");

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
    {
      path: "/:catchAll(.*)",
      component: Page404,
    },
    ...AgencyRoute,
    ...StudentRoute,
  ],
});

import jwt_decode from "jwt-decode";
// Agency Token Control
let checkAgencyToken = () => {
  let token = localStorage.getItem("token");
  let check = false;
  if (token) {
    let decoded = jwt_decode(token);
    if (token && decoded.Type == "partner") {
      check = true;
    }
  }
  return check;
};

// Student Token Control
let checkStudentToken = () => {
  let token = localStorage.getItem("token");
  let check = false;

  if (token) {
    let decoded = jwt_decode(token);
    if (
      (token && decoded.Type == "std" && decoded.StudentId) ||
      decoded.StudentPreId
    ) {
      check = true;
    }
  }
  return check;
};

// If result is false, shows unauthorized path
router.beforeEach((to, from, next) => {
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
});

export default router;
