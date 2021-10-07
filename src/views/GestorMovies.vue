<template>
<div class="container_movie">
    <NavBar />
    <button type="submit" class="btn btn-light">Nuevo</button>
    <GestorMovies/>
    <GestorMovies/>
    <GestorMovies/>
    <GestorMovies/>
    <GestorMovies/>
    <Footer />
</div>

</template>

<script>
import GestorMovies from "../components/GestorMovies.vue"
import NavBar from "../components/NavBar.vue"
import Footer from "../components/Footer.vue"

export default {
    name: "GestorMoviesView",
    components: {
        GestorMovies,
        NavBar,
        Footer
    }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container_movie{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

body {
  background: var(--fondo);
  /* font-family: "Open Sans", sans-serif; */
  color: #FFF;
}

.btn{
  margin: 2px;
}

.btn:hover{
  color: #FFF;
  background-color: #E50914;
}
</style>
