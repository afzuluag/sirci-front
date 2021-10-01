import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

/*function ir_a_reservas() {
  location.href = "https://sirci-zulu.glitch.me";
  return false;
}
function ir_a_cartelera() {
  location.href = "https://steep-sunset-seaplane.glitch.me";
  return false;
}
new Vue({
  el: "#info",
  data() {
    return {
      titulo: null,
      formato: null,
      clasif: null,
      horarios: null,
      enlace: null,
      puntuacion: null,
      reparto: null,
      sinopsis: null,
    };
  },
}).$mount("#info");*/
