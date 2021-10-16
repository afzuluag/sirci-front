<template>
  <div>
    <section class="sidebar">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <center>
        <img src="@/assets/film.jpg" class="profile_image" />
        <h4><i class="fas fa-chalkboard-teacher"></i> DashBoard</h4>
      </center>
      <router-link to="/GestorReservas1"
        ><i class="fas fa-desktop"></i><span> Gestor Sala 1</span></router-link
      >
      <router-link to="/GestorReservas2"
        ><i class="fas fa-th"></i><span> Gestor Sala 2</span></router-link
      >
      <router-link to="/ListMovies"
        ><i class="fas fa-table"></i><span> Gestor Peliculas</span></router-link
      >

      <router-link to="/ListUsers"
        ><i class="fas fa-cogs"></i
        ><span> Administrar Usuarios</span></router-link
      >
      <router-link to="/"
        ><i class="fas fa-sign-out-alt"></i
        ><span> Cerrar Sesion</span></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Dash",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
/*css Menu lateral */
.sidebar {
  background: #141414f1;
  border-color: #fff;
  border-style: ridge;
  margin-top: 5px;
  margin-left: 15px;
  padding-top: 10px;
  position: fixed;
  left: 0;
  width: 240px;
  height: 572px;
}

.sidebar .profile_image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
}

.sidebar h4 {
  color: var(--rojo);
  margin-top: 0;
  margin-bottom: 20px;
}

.sidebar a {
  color: #fff;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
}

.sidebar a:hover {
  background: var(--rojo);
}

.sider i {
  padding-right: 10px;
}

label #sidebar_btn {
  z-index: 1;
  color: #fff;
  position: fixed;
  cursor: pointer;
  left: 300px;
  font-size: 20px;
  margin: 5px 0;
  transition: 0.5s;
  transition-property: color;
}

label #sidebar_btn:hover {
  color: #ffc300;
}
</style>
