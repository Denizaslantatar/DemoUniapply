const LoginForm = () => {
  return import("@/components/Auth/Agency/LoginForm.vue");
};
const DashboardHome = () => {
  return import("@/components/Dashboard/Agency/DashboardHome.vue");
};
const ForgotPassword = () => {
  return import("@/components/Auth/Agency/ForgotPassword.vue");
};
const RegisterForm = () => {
  return import("@/components/Auth/Agency/RegisterForm.vue");
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
