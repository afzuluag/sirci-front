/* eslint-disable */

<template>
  <div class="admin_users">
    <NavBar />
    <Dash />
    <DashListUsers titulo="Lista de Usuarios SIRCi" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashListUsers from "../components/DashListUsers.vue";

export default {
  name: "ListUsers",
  components: {
    NavBar,
    Dash,
    DashListUsers,
  },
};
</script>
