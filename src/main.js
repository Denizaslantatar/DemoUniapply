// Basi Libraries
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./Store";

// Extra Libraries
import vSelect from "vue-select";

import { useToast } from "vue-toastification";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// // Import all of Bootstrap's CSS
// import "~bootstrap/scss/bootstrap";

// // Import our custom CSS
// import "../scss/styles.scss";

// // Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

const deniz = createApp(App);
deniz.config.globalProperties.toast = useToast();

deniz.use(router);
deniz.use(store);
deniz.use(Toast, {
  // Setting the global default position
  transition: "Vue-Toastification__bounce",
  maxToasts: 3,
  newestOnTop: true,
});
deniz.component("v-select", vSelect);

deniz.mount("#app");
