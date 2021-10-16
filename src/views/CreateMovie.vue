/* eslint-disable */

<template>
  <div class="admin_users">
    <NavBar />
    <Dash />
    <DashCreateMovie titulo="Creacion de Pelicula SIRCi" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashCreateMovie from "../components/DashCreateMovie.vue";

export default {
  name: "CreateMovie",
  components: {
    NavBar,
    Dash,
    DashCreateMovie,
  },
};
</script>
