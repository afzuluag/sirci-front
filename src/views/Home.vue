<template>
  <div class="home">
    <font-awesome-icon :icon="['fas', 'user-secret']" />
    <NavBar msg="Helllo "/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
