import { createStore } from "vuex";

import { ALoginMod } from "./Agency/Login.module";
import { SLoginMod } from "./Student/Login.module";
import { Visitor } from "./Public/visitor.module";
import { AregisterMod } from "./Agency/Register.module";

const store = createStore({
  modules: {
    ALoginMod,
    SLoginMod,
    Visitor,
    AregisterMod,
  },
});
export default store;
