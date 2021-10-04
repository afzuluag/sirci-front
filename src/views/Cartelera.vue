<template>
  <div>
    <NavBar />
    <div class="cartelera">
      <h1>Cartelera</h1>
      <div class="cartelera-container">
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        />
        <CarteleraComp
          titulo="Sonic"
          formato="3D"
          clasif="Niños"
          horarios="9:00PM"
          url="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
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
