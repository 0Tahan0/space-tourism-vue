import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./css/main.css";
import theHeader from "@/components/theHeader.vue";
Vue.component("the-header", theHeader);

import theArt from "@/components/theArt.vue";
Vue.component("the-art", theArt);
import specialTitle from "@/components/specialTitle.vue";
Vue.component("special-title", specialTitle);

// Vue.component("the-art", "./components/theArt.vue");
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
