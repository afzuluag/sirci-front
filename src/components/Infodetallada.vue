<template>
  <h1></h1>
</template>

<script>
new ({
  el: "#info",
  data() {
    return {
      titulo: null,
      formato: null,
      clasif: null,
      horarios: null,
      enlace: null,
      puntuacion: null,
      reparto: null,
      sinopsis: null,
    };
  },
}.$mount("#info")
function ir_a_reservas() {
  location.href = "https://sirci-zulu.glitch.me";
  return false;
}
function ir_a_cartelera() {
  location.href = "https://steep-sunset-seaplane.glitch.me";
  return false;
}
</script>

<style scoped>
</style>
