<template>
  <div>
    <NavBar />
    <Dash />
    <DashContent titulo="Vista Administrador de Usuarios" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashContent from "../components/DashPeliculas.vue";

export default {
  name: "AdminUsers",
  components: {
    NavBar,
    Dash,
    DashContent,
  },
};
</script>
