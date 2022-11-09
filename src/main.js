// Basi Libraries
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createStore } from "vuex";

// Extra Libraries
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import vSelect from "vue-select";
import { useToast } from "vue-toastification";
const toast = useToast();

// // Import all of Bootstrap's CSS
// import "~bootstrap/scss/bootstrap";

// // Import our custom CSS
// import "../scss/styles.scss";

// // Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

import "./assets/main.css";

import { createPopper } from "@popperjs/core";

const deniz = createApp(App);
deniz.use(router);
deniz.use(axios);
deniz.use(store);
deniz.use(useVuelidate);
deniz.use(required, email);
deniz.use(bootstrap);
deniz.use(useToast, {
  // Setting the global default position
  transition: "Vue-Toastification__bounce",
  maxToasts: 3,
  newestOnTop: true,
});
Vue.component("v-select", vSelect);

const store = createStore({
  // add root component
});

deniz.mount("#app");
