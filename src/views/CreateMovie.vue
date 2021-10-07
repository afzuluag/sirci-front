<template>
<div>
    <NavBar />
    <CreateMovie/>
    <Footer />
</div>

</template>

<script>
import NavBar from "../components/NavBar.vue"
import CreateMovie from "../components/CreateMovie.vue"
import Footer from "../components/Footer.vue"

export default {
    name: "CreateMovieView",
    components: {
        NavBar,
        CreateMovie,
        Footer,
    },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
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
