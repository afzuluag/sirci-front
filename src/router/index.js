import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import Cartelera from "../views/Cartelera.vue";
import Cartelerainfo from "../views/Cartelerainfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cartelera",
    component: Cartelera,
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
