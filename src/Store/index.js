import { createStore } from "vuex";

import { ALoginMod } from "./Agency/Login.module";
import { SLoginMod } from "./Student/Login.module";
import { Visitor } from "./Public/visitor.module";

const store = createStore({
  modules: {
    ALoginMod,
    SLoginMod,
    Visitor,
  },
});
export default store;
