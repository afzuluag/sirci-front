<template>
    <div class="dashboard">
        <NavBar />
        <p>Soy el Dashboard</p>
        <Footer />
    </div>
</template>

<script>

import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "Dashboard",
    components:{
        NavBar,
        Footer,
    },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: var(--fondo);
  font-family: "Open Sans", sans-serif;
}

</style>
