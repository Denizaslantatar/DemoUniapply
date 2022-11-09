const LoginForm = () => import("@/components/Auth/Student/LoginForm.vue");
const DashboardHome = () => {
  return import("@/components/Dashboard/Student/DashboardHome.vue");
};

export default [
  {
    path: "/student/signin",
    component: LoginForm,
  },
  {
    path: "/student/dashboard",
    component: DashboardHome,
    meta: {
      student: true,
    },
  },
];
