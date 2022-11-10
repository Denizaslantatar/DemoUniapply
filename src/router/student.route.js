const LoginForm = () => import("@/components/Auth/Student/LoginForm.vue");
const DashboardHome = () => {
  return import("@/components/Dashboard/Student/DashboardHome.vue");
};
const ForgotPassword = () =>
  import("@/components/Auth/Student/ForgotPassword.vue");
const SignUp = () => import("@/components/Auth/Student/RegisterForm.vue");

export default [
  {
    path: "/student/signin",
    component: LoginForm,
  },
  {
    path: "/student/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/student/signup",
    component: SignUp,
  },
  {
    path: "/student/dashboard",
    component: DashboardHome,
    meta: {
      student: true,
    },
  },
];
