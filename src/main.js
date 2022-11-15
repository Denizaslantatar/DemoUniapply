// Basi Libraries
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./Store";

// Extra Libraries
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import { useToast } from "vue-toastification";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import Spinner from "@/components/Layouts/Loading/Spinner.vue";
import { VueFinalModal } from "vue-final-modal";

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
deniz.component("VueFinalModal", VueFinalModal);
deniz.component("v-select", vSelect);
deniz.component("Spinner", Spinner);

deniz.mount("#app");
