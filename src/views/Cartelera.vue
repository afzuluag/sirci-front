<template>
  <div>
    <NavBar />
    <h1>Cartelera</h1>
    <div id="cartelera-container">
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
</template>

<script>
import CarteleraComp from "@/components/CarteleraComp.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Cartelera",
  components: {
    CarteleraComp,
    NavBar,
  },
};
</script>

<style scoped>
h1 {
  color: var(--rojo);
  text-align: left;
  font-size: 30px;
  margin-bottom: 25px;
}
#cartelera-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
}
</style>
