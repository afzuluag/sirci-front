<template>
  <div class="gestor-reservas">
    <NavBar />
    <Dash />
    <DashReservas titulo="Vista Reservas" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashReservas from "../components/DashReservas.vue";

export default {
  name: "GestorReservas",
  components: {
    NavBar,
    Dash,
    DashReservas,
  },
};
</script>
