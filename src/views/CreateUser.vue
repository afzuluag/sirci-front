/* eslint-disable */

<template>
  <div class="admin_users">
    <NavBar />
    <Dash />
    <DashCreateUser titulo="Creacion de Usuarios SIRCi" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashCreateUser from "../components/DashCreateUser.vue";

export default {
  name: "CreateUser",
  components: {
    NavBar,
    Dash,
    DashCreateUser,
  },
};
</script>
