<template>
  <div class="gestor-reservas">
    <NavBar />
    <Dash />
    <DashReservas1 titulo="View Gestor Sala 1" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashReservas1 from "../components/DashReservas1.vue";

export default {
  name: "GestorReservas1",
  components: {
    NavBar,
    Dash,
    DashReservas1,
  },
};
</script>
