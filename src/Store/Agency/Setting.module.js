import ASettingServ from "@/services/Agency/Setting.service";

import { useToast } from "vue-toastification";
const toast = useToast();

export const ASettingMod = {
  namspaced: true,
  state: {
    bank: [],
  },
  mutations: {
    setBank(state, response) {
      state.bank = response.detail;
    },
  },
  actions: {
    async GetPartnerBankInfoList({ commit }) {
      await ASettingServ.GetPartnerBankInfoList().then((response) => {
        commit("setBank", response.data);
      });
    },
  },
};
