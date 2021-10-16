<template>
  <div class="gestor-reservas">
    <NavBar />
    <Dash />
    <DashReservas2 titulo="View Gestor Sala 2" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashReservas2 from "../components/DashReservas2.vue";

export default {
  name: "GestorReservas2",
  components: {
    NavBar,
    Dash,
    DashReservas2,
  },
};
</script>
