<template>
  <div id="cartelera-item">
    <h3>{{ titulo }}</h3>
    <a v-bind:href="enlace"><img src="/src/assets/img/sonic.jpg" /></a>
    <h3>{{ formato }} - {{ clasif }}</h3>
    <p>{{ horarios }}</p>
  </div>
</template>

<script>
export default {
  name: "CarteleraComp",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
