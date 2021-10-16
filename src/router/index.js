import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import Cartelera from "../views/Cartelera.vue";
import Cartelerainfo from "../views/Cartelerainfo.vue";
import ListMovies from "../views/ListMovies.vue";
import GestorReservas1 from "../views/GestorReservas1.vue";
import GestorReservas2 from "../views/GestorReservas2.vue";
import ListUsers from "../views/ListUsers.vue";
import CreateUser from "../views/CreateUser.vue";
import CreateMovie from "../views/CreateMovie.vue";

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
    path: "/ListMovies",
    name: "ListMovies",
    component: ListMovies,
  },
  {
    path: "/GestorReservas1",
    name: "GestorReservas1",
    component: GestorReservas1,
  },
  {
    path: "/GestorReservas2",
    name: "GestorReservas2",
    component: GestorReservas2,
  },
  {
    path: "/ListUsers",
    name: "ListUsers",
    component: ListUsers,
  },
  {
    path: "/CreateUser",
    name: "CreateUser",
    component: CreateUser,
  },
  {
    path: "/CreateMovie",
    name: "CreateMovie",
    component: CreateMovie,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
