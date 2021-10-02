<template>
  <div class="boton-opciones">
    <button onclick="javascript:ir_a_reservas();">Reservar</button
    ><span
      ><button onclick="javascript:ir_a_cartelera();">Regresar</button></span
    >
  </div>
</template>

<script>
</script>

<style scoped>
.boton-opciones {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  text-align: center;
}
.boton-opciones button {
  cursor: pointer;
  position: relative;
  margin-right: 20px;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
  color: #ffffff;
  background-color: #ca1818;
  border-radius: 6px;
  border: 2px solid #ca1818;
}
</style>
