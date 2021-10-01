<template>
  <div>
    <div id="cartelera-item">
      <h3>{{ titulo }}</h3>
      <a v-bind:href="enlace"><img src="/src/assets/img/sonic.jpg" /></a>
      <div id="cartelera-text">
        <h3>{{ formato }} - {{ clasif }}</h3>
        <p>{{ horarios }}</p>
      </div>
    </div>
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
<style scoped>
/*Titulo*/
img {
  width: 100%;
  height: 100%;
}
#cartelera-item {
  width: 90%;
  max-width: 1400px;
  margin: auto;
}
#cartelera-item {
  color: #fff;
  width: 155px;
  height: 260px;
  position: relative;
  overflow: hidden;
  margin-bottom: 25px;
}
.cartelera-title {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
}
.cartelera-img {
  position: relative;
  overflow: hidden;
}
#cartelera-text {
  position: absolute;
  bottom: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  transform: translateY(100%);
}
#cartelera-text p {
  text-align: center;
}
#cartelera-item:hover #cartelera-text {
  transform: translateY(0%);
  transition: all 0.5s ease-out;
}
</style>
