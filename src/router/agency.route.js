const LoginForm = () => {
  return import("@/components/Agency/Auth/LoginForm.vue");
};
const DashboardHome = () => {
  return import("@/components/Agency/Dashboard/DashboardHome.vue");
};
const ForgotPassword = () => {
  return import("@/components/Agency/Auth/ForgotPassword.vue");
};
const RegisterContent = () => {
  return import("@/components/Agency/Auth/RegisterForm.vue");
};
const Settings = () => {
  return import("@/components/Agency/Settings/Settings.vue");
};
const BankingContainer = () => {
  return import("@/components/Agency/Settings/Pages/BankingContainer.vue");
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
    component: RegisterContent,
  },
  {
    path: "/partner/settings",
    component: Settings,
    redirect: "/partner/settings/agency",
    meta: {
      agency: true,
    },
    children: [
      {
        path: "agency",
        component: AgencyInfo,
      },
      {
        path: "banking",
        component: BankingContainer,
      },
      {
        path: "staff",
        component: StaffContainer,
      },
      {
        path: "commission",
        component: CommissionHome,
      },
    ],
  },
  {
    path: "/partner/dashboard",
    component: DashboardHome,
    meta: {
      agency: true,
    },
  },
];
