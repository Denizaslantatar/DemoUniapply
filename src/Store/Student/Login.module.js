import SLoginService from "@/services/Student/Login.service";
import router from "@/router";

import { useToast } from "vue-toastification";
const toast = useToast();

export const SLoginMod = {
  namespaced: true,

  actions: {
    async Login({ commit }, payload) {
      await SLoginService.Login(payload).then((response) => {
        if (response?.data?.token && response?.data?.success) {
          toast.success("You have logged in successfully");
          localStorage.setItem("token", response.data.token);
          localStorage.removeItem("token");
          router.push("/student/dashboard");
        } else {
          toast.error("Incorrect email or password!");
        }
      });
    },
  },
};
