<template>
  <div>
    <h1> Listar </h1>
       {{ Cinemas.cinema }}
  </div>
</template>

<script>
   import axios from "axios";
   export default{
        data(){
           return{
               strcinema: []
           }
        },

        created(){
            axios.get("http://localhost:8000/consultaSillas").then((res) => this.cinema=res.data);

       },
       methods: {
       }  
     }
</script>