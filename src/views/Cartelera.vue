<template>
  <div>
    <NavBar />
    <div class="cartelera">
      <h1>Cartelera</h1>
      <div class="cartelera-container">
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
        <CarteleraComp />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CarteleraComp from "@/components/CarteleraComp.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Cartelera",
  components: {
    CarteleraComp,
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.cartelera h1 {
  color: var(--rojo);
  text-align: left;
  font-size: 30px;
  margin-bottom: 25px;
}
.cartelera {
  width: 90%;
  max-width: 1400px;
  margin: auto;
}
.cartelera-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
