import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import * as mdijs from "@mdi/js";
import mdiVue from "mdi-vue/v3";

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(mdiVue, {
    icons: mdijs,
  })
  .mount("#app");
