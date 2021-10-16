<template>
  <div>
    <div>
      <div class="cartelera-item">
        <h3>{{ titulo }}</h3>
        <img :src="url" />
        <div class="cartelera-text">
          <h3>{{ formato }} - {{ clasificacion }}</h3>
          <p>{{ horarios }}</p>
        </div>
      </div>
    </div>
    <div class="boton-link">
      <router-link :to="{ name: 'Cartelerainfo' }" class="btn btn-success"
        >Detalles
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarteleraComp",
  props: {
    titulo: String,
    id_pelicula: String,
    url: String,
    formato: String,
    clasificacion: String,
    calificacion: String,
    horarios: String,
    reparto: String,
    sinopsis: String,
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
  margin-right: 60px;
  margin-bottom: 8px;
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
.boton-link .btn {
  width: 40%;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  padding: 5px;
  font-size: 12px;
  background-color: #ca1818;
  border-radius: 6px;
  color: #ffffff;
  border: 2px solid #ca1818;
}
.boton-link {
  margin-left: 45px;
  margin-bottom: 25px;
}
</style>
