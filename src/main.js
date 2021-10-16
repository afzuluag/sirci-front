import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

// Agregamos la URL base de nuestra API
//axios.defaults.baseURL = "http://localhost:3000/api";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");