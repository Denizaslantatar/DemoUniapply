const TermsAndUse = () => import("@/components/Public/TermsAndUse.vue");
const PrivacyPolicy = () => import("@/components/Public/PrivacyPolicy.vue");

export default [
  {
    path: "/",
    component: PublicHome,
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "/term-conditions",
    component: TermsAndUse,
  },
];
