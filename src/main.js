import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
require("./plugins/fontawesome");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

//const uri = "mongodb+srv://dfmrd:NJQX7dadAq9d2Q57@cluster0.x7sik.mongodb.net/Carte1?retryWrites=true&w=majority"