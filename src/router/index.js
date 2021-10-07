import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import Peliculas from "../views/Peliculas.vue";
import Cartelerainfo from "../views/Cartelerainfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Peliculas",
    component: Peliculas,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/Cartelerainfo",
    name: "Cartelerainfo",
    component: Cartelerainfo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
