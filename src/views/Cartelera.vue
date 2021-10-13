<template>
  <div>
    <NavBar />
    <div class="cartelera">
      <h1>Cartelera</h1>
      <div class="cartelera-container">
        <CarteleraComp
          v-for="cartelera in carteleras"
          v-bind:key="cartelera.id"
          v-bind:titulo="cartelera.titulo"
          v-bind:img="cartelera.img"
          v-bind:formato="cartelera.formato"
          v-bind:clasificacion="cartelera.clasificacion"
          v-bind:calificacion="cartelera.calificacion"
          v-bind:horarios="cartelera.horarios"
          v-bind:reparto="cartelera.reparto"
          v-bind:sinopsis="cartelera.sinopsis"
        ></CarteleraComp>
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
