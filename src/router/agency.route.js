const LoginForm = () => import("@/components/Auth/Agency/LoginForm.vue");
const DashboardHome = () =>
  import("@/components/Dashboard/Agency/DashboardHome.vue");

export default [
  {
    path: "/recruiter/signin",
    component: LoginForm,
  },
  {
    path: "/agency/dashboard",
    component: DashboardHome,
    meta: {
      agency: true,
    },
  },
];
