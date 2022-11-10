import VisitorService from "@/services/Public/visitor.service";
import jwt_decode from "jwt-decode";

export const Visitor = {
  namespaced: true,
  states: {
    UserType: "visitor",
  },
  mutations: {
    SetUserType(state, user) {
      state.UserType = user;
    },
  },
  actions: {
    async GetVisitorToken() {
      await VisitorService.GetVisitorToken().then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
      });
    },
    async GetUserType({ commit }) {
      let token = localStorage.getItem("token");
      let user = "visitor";
      if (token) {
        let decoded = await jwt_decode(token);
        if (
          decoded.Type == "std" &&
          (decoded.StudentId || decoded.StudentPreId)
        ) {
          user = "student";
        } else if (decoded.Type == "partner") {
          user = "partner";
        }
      }
      commit("SetUserType", user);
    },
  },
};
