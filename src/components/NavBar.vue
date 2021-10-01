<template>
  <div id="NavBar">
    <h2 class="logotipo">SIRCI</h2>
    <nav>
      <router-link href="#"><i class="fas fa-film"></i>Inicio</router-link>
      <router-link to="/cartelera"
        ><i class="fas fa-photo-video"></i>Cartelera</router-link
      >
      <router-link href="#"
        ><i class="fas fa-user"></i>Inicia sesion</router-link
      >
      <router-link href="#"
        ><i class="fas fa-user-edit"></i>Registro</router-link
      >
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
.contenedor {
  width: 90%;
  margin: auto;
}
header {
  padding: 30px 0;
}
header .contenedor {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .logotipo {
  font-family: "Bebas Neue", cursive;
  font-weight: normal;
  color: var(--rojo);
  font-size: 40px;
}
header nav a {
  color: #aaa;
  text-decoration: none;
  margin-right: 20px;
}
header nav a:hover,
header nav a.activo {
  color: #fff;
}
</style>
