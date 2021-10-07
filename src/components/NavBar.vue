<template>
  <div id="contenedor">
    <h2>SIRCI</h2>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/cartelera">Cartelera</router-link>
      <!-- <font-awesome-icon icon="photo-video" /> -->
      <!-- <router-link to="/Login"
        ><font-awesome-icon icon="user" /> Inicia sesion</router-link
      >
      <router-link to="#"
        ><font-awesome-icon icon="user-edit" /> Registro</router-link
      > -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#contenedor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  width: 90%;
  margin: auto;
  color: #aaa;;
}

h2 {
  font-family: "Bebas Neue", cursive;
  font-weight: normal;
  color: var(--rojo);
  font-size: 40px;
}

nav a {
  color: #aaa;
  text-decoration: none;
  margin-right: 20px;
}

nav a:hover,nav a.activo {
  color: #fff;
}
</style>
