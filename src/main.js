import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
require("./plugins/fontawesome");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

//const uri =
//  "mongodb+srv://algesuar:Mintic1234@cluster0.2ddcc.mongodb.net/cinema?retryWrites=true&w=majority";
