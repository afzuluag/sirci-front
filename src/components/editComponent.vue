<template>
    <form @submit.prevent="methodEnviar">
        <label>String cinema:</label> 
        <input type="text" v-model="cinema.strcinema" > <br> 

        <button> Entrar datos </button>
    </form>
</template>
<script>
   import axios from "axios"; 
   export default{
       data(){
          return{
              cinema:{
                  strsillas:"1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
              }
          }
       },
       created() {
         let apiURL = `http://localhost:8000/actualizaSillas/${this.$route.params.id}`;
         axios.get(apiURL).then((res) => {
         this.cinema = res.data;
 });
 },
   }
</script>   