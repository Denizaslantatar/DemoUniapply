import ARegisterService from "@/services/Agency/Register.service.js";

// import router from "@/router";
// JWT kullanılmamış?

import { useToast } from "vue-toastification";
const toast = useToast();

export const ARegisterMod = {
  namespaced: true,
  state: {
    isCountry: [],
    isCurrency: [],
  },
  mutations: {
    setCountry(state, list) {
      state.isCountry = list;
    },
    setCurrency(state, list) {
      state.isCurrency = list;
    },
  },
  actions: {
    async Register({ commit }, payload) {
      await ARegisterService.Register(payload).then((response) => {
        if (response.data.detail) {
          toast.success("You have been registered successfully");
        }
      });
    },
    async GetCurrencyCountry({ commit }) {
      await ARegisterService.GetRegisterAgency().then((response) => {
        if (response.data.detail) {
          let country = response.data.detail.Country;
          let currency = response.data.detail.Currency;
          commit("setCountry", country);
          commit("setCurrency", currency);
        }
      });
    },
  },
};
