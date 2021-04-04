import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "../src/css/font-awesome.min.css";
import "../src/fonts/fontawesome-webfont.eot";
import "../src/fonts/fontawesome-webfont.svg";
import "../src/fonts/fontawesome-webfont.ttf";
import "../src/fonts/fontawesome-webfont.woff";
import "../src/fonts/fontawesome-webfont.woff2";
import "../src/fonts/FontAwesome.otf";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
