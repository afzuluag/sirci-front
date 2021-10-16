<template>
  <div id="header">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <div id="contenedor">
      <h2 id="tit">SIRCI</h2>
      <nav>
        <router-link to="/"><i class="fas fa-film"></i> Inicio</router-link>
        <router-link to="/dashboard"
          ><i class="fas fa-chalkboard-teacher"></i> Dashboard</router-link
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