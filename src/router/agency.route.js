const LoginForm = () => {
  return import("@/components/Agency/Auth/LoginForm.vue");
};
const DashboardHome = () => {
  return import("@/components/Agency/Dashboard/DashboardHome.vue");
};
const ForgotPassword = () => {
  return import("@/components/Agency/Auth/ForgotPassword.vue");
};
const RegisterForm = () => {
  return import("@/components/Agency/Auth/RegisterForm.vue");
};

export default [
  {
    path: "/recruiter/signin",
    component: LoginForm,
  },
  {
    path: "/recruiter/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/recruiter/signup",
    component: RegisterForm,
  },
  {
    path: "/agency/dashboard",
    component: DashboardHome,
    meta: {
      agency: true,
    },
  },
];
