<template>
  <div>
    <NavBar />
    <section class="cartelera-detalles" id="info">
      <img src="/src/assets/img/2012.jpg" />
      <h1>{{ titulo }}</h1>
      <section class="cartelera-datos">
        <p>{{ formato }} - {{ clasif }} - {{ puntuacion }}</p>
      </section>
      <section class="info-item">
        <br />
        <h2>Reparto</h2>
        <p>{{ reparto }}</p>
        <br />
        <h2>Sinopsis</h2>
        <p>{{ sinopsis }}</p>
        <br />
        <h2>Horarios disponibles</h2>
        <p>{{ horarios }}</p>
      </section>
      <div class="boton-opciones">
        <router-link to="/"><button>Reservar</button></router-link
        ><span
          ><router-link to="/"><button>Regresar</button></router-link></span
        >
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Cartelerainfo",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.cartelera-detalles h1 {
  padding-left: 40px;
  color: var(--rojo);
  font-size: 30px;
  margin: 15px 20px 20px;
  overflow: auto;
}
.info-item {
  text-align: left;
  padding-left: 40px;
}
img {
  height: 245px;
  width: 180px;
  float: right;
  position: relative;
  margin-right: 60px;
  margin-bottom: 15px;
}
h2 {
  margin-left: 20px;
  color: #fff;
}
.cartelera-datos {
  padding-left: 40px;
  margin-right: 20px;
  color: #fff;
  position: relative;
  overflow: auto;
}
p {
  margin-left: 20px;
  margin-right: 20px;
  color: #aaa;
}
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
