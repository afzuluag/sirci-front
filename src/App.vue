<template>
  <div class="app">
    <div class="nav-bar">
     <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faUserSecret);
</script>

<style>
:root {
  --rojo: #e50914;
  --fondo: #141414;
}
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
