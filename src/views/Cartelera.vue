<template>
  <div>
    <NavBar />
    <div class="cartelera">
      <h1>Cartelera</h1>
      <div class="cartelera-container">
        <CarteleraComp
          titulo="z"
          formato="String"
          clasif="String"
          horarios="String"
          url="https://th.bing.com/th/id/R.b28b19ad42419660b65d0079db8984e0?rik=JpKCKYfmoXoQBA&riu=http%3a%2f%2fes.web.img2.acsta.net%2fpictures%2f19%2f11%2f12%2f12%2f25%2f0815514.jpg&ehk=j%2b1Os9Fcc%2bXuxpPblBaN0FD9K%2b6Fv2WBDEvf5iHDznA%3d&risl=&pid=ImgRaw&r=0"
          reparto="String"
          sinopsis="String"
          puntuacion="String"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CarteleraComp from "@/components/CarteleraComp.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Cartelera",
  components: {
    CarteleraComp,
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.cartelera h1 {
  color: var(--rojo);
  text-align: left;
  font-size: 30px;
  margin-bottom: 25px;
}
.cartelera {
  width: 90%;
  max-width: 1400px;
  margin: auto;
}
.cartelera-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
