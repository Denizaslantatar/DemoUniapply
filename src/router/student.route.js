const LoginForm = () => import("@/components/Student/Auth/LoginForm.vue");
const DashboardHome = () => {
  return import("@/components/Student/Dashboard/DashboardHome.vue");
};
const ForgotPassword = () =>
  import("@/components/Student/Auth/ForgotPassword.vue");
const SignUp = () => import("@/components/Student/Auth/RegisterForm.vue");

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
