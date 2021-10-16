<template>
  <div>
    <NavBar />
    <Dash />
    <DashCont titulo="View DashBoard" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Dash from "../components/Dash.vue";
import DashCont from "../components/DashCont.vue";

export default {
  name: "DashBoard",
  components: {
    NavBar,
    Dash,
    DashCont,
  },
};
</script>
