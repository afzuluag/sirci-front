import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes =  [
    {
      path: '/createmovie',
      name: 'createmovie',
      component: ()=> import("../views/CreateMovie.vue"),
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: ()=> import("../views/DashBoard.vue"),
    },
    {
        path: '/gestormovies',
        name: 'GestorMovies',
        component: ()=> import("../views/GestorMovies.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
