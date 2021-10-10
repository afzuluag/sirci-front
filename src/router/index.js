import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import Cartelera from "../views/Cartelera.vue";
import Cartelerainfo from "../views/Cartelerainfo.vue";
import GestorMovie from "../views/GestorMovie.vue";
import GestorReservas from "../views/GestorReservas.vue";
import AdminUsers from "../views/AdminUsers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cartelera",
    component: Cartelera,
  },
  {
    path: "/Dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/Cartelerainfo",
    name: "Cartelerainfo",
    component: Cartelerainfo,
  },
  {
    path: "/GestorMovie",
    name: "GestorMovie",
    component: GestorMovie,
  },
  {
    path: "/GestorReservas",
    name: "GestorReservas",
    component: GestorReservas,
  },
  {
    path: "/AdminUsers",
    name: "AdminUsers",
    component: AdminUsers,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
