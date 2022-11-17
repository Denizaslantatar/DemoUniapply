import ASettingServ from "@/services/Agency/Setting.service";

export const ASettingMod = {
  namespaced: true,
  state: {
    bankList: [],
  },
  mutations: {
    setBankList(state, list) {
      state.bankList = list;
    },
  },
  actions: {
    async GetBankList({ commit }) {
      await ASettingServ.GetPartnerBankInfoList().then((response) => {
        if (response.data.detail) {
          let bankList = response.data.detail;
          commit("setBankList", bankList);
        }
      });
    },
  },
};
