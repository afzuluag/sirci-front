<template>
  <div id="header">
    <div id="contenedor">
      <h2 id="tit">SIRCI</h2>
      <nav>
        <router-link to="/"
          ><font-awesome-icon icon="film" /> Inicio</router-link
        >
        <router-link to="/dashboard"
          ><font-awesome-icon icon="cogs" /> Dashboard</router-link
        >
      </nav>
    </div>
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
#header {
  width: 90%;
  margin: auto;
}
#header #contenedor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
}
#header #tit {
  font-family: "Bebas Neue", cursive;
  font-weight: normal;
  color: var(--rojo);
  font-size: 40px;
}
#header nav a {
  color: #aaa;
  text-decoration: none;
  margin-right: 20px;
}
#header nav a:hover,
#header nav a.activo {
  color: #fff;
}
</style>