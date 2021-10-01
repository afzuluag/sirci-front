import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cartelera from "../views/Cartelera.vue";
import Cartelerainfo from "../views/Cartelerainfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cartelerainfo",
    name: "Cartelerainfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cartelerainfo.vue"),
  },
  {
    path: "/cartelera",
    name: "Cartelera",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cartelera.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
