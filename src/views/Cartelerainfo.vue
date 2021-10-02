<template>
  <div>
    <NavBar />
    <Infodetallada />
    <Botones />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Infodetallada from "@/components/Infodetallada.vue";
import Botones from "@/components/Botones.vue";
export default {
  name: "Cartelerainfo",
  components: {
    NavBar,
    Infodetallada,
    Footer,
    Botones,
  },
};
</script>

<style scoped></style>
