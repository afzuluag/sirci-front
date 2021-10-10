<template>
  <div class="cartelera-item">
    <h3>{{ titulo }}{{ $route.params.id }}</h3>
    <router-link to="/cartelerainfo/:id"><img :src="url" /></router-link>
    <div class="cartelera-text">
      <h3>{{ formato }} - {{ clasif }}</h3>
      <p>{{ horarios }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarteleraComp",
  props: {
    titulo: String,
    formato: String,
    clasif: String,
    horarios: String,
    url: String,
    id: String,
    reparto: String,
    sinopsis: String,
    puntuacion: String,
  },
};
</script>
<style scoped>
/*Titulo*/
img {
  width: 100%;
  height: 100%;
}
.cartelera-item {
  color: #fff;
  height: 260px;
  position: relative;
  overflow: hidden;
  margin-bottom: 25px;
  margin-right: 60px;
  max-width: 155px;
}
.cartelera-title {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
}
.cartelera-text {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  transform: translateY(100%);
}
.cartelera-text {
  text-align: center;
}
.cartelera-item:hover .cartelera-text {
  transform: translateY(0%);
  transition: all 0.5s ease-out;
}
</style>
