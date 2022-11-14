import { createStore } from "vuex";

import { ALoginMod } from "./Agency/Login.module";
import { SLoginMod } from "./Student/Login.module";
import { Visitor } from "./Public/visitor.module";
import { ALoginMod } from "./Agency/Login.module";

const store = createStore({
  modules: {
    ALoginMod,
    SLoginMod,
    Visitor,
    ARegisterMod,
  },
});
export default store;
