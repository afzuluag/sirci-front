<template>
  <div class="gestor-movie">
    <NavBar />
    <Dash />
    <DashListMovies titulo="Lista de Peliculas" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashListMovies from "../components/DashListMovies.vue";

export default {
  name: "ListMovies",
  components: {
    NavBar,
    Dash,
    DashListMovies,
  },
};
</script>
