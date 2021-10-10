<template>
  <div class="gestor-movie">
    <NavBar />
    <Dash />
    <DashPeliculas titulo="Vista de Gestor de Peliculas" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashPeliculas from "../components/DashPeliculas.vue";

export default {
  name: "GestorMovie",
  components: {
    NavBar,
    Dash,
    DashPeliculas,
  },
};
</script>
