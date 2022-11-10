import ALoginService from "@/services/Agency/Login.service";
import router from "@/router";

import jwt_decode from "jwt-decode";

import { useToast } from "vue-toastification";
const toast = useToast();

export const ALoginMod = {
  namespaced: true,

  actions: {
    async Login({ commit }, payload) {
      await ALoginService.Login(payload).then((response) => {
        if (response.data.detail.token) {
          let token = response.data.detail.token;
          localStorage.setItem("token", token);
          let decoded = jwt_decode(token);
          if (decoded.IsAgreed == "1") {
            toast.success("You have logged in successfully!");
            router.push("/partner/dashboard");
          } else {
            router.push("/partner/agreement");
          }
        } else {
          toast.error("Incorrect email or password!");
        }
        console.log(response);
      });
    },
  },
};
