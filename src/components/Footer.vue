<template>
  <footer>
    <p>SIRCI&copy;</p>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
footer {
  width: 100%;
  position: relative;
  margin: 1% 0%;
  text-align: center;
}
footer p {
  color: #aaa;
}
</style>
