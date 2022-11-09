import { createStore } from "vuex";

import { ALoginMod } from "./Agency/Login.module";
import { SLoginMod } from "./Student/Login.module";

const store = createStore({
  modules: {
    ALoginMod,
    SLoginMod,
  },
});
export default store;
