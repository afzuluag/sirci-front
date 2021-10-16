<template>
  <div class="container">
    <h3>{{ titulo }}</h3>
  </div>
</template>

<script>
export default {
  name: "DashCont",
  props: {
    titulo: String,
  },
};
</script>

<style scoped>
.container {
  border-color: #fff;
  border-style: ridge;
  margin-left: 260px;
  margin-top: 5px;
  margin-right: 15px;
  background-position: center;
  background: #141414f1;
  background-size: cover;
  width: auto;
  height: 572px;
}

h3 {
  text-align: center;
  color: #fff;
}
</style>
