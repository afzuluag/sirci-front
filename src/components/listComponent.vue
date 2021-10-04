<template>
  <div>
    <h1> Listar </h1>
       {{ Cinemas.strcinema }}
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
            axios.get("http://localhost:8000/consultaSillas").then((res) => this.strcinema=res.data);

       },
       methods: {
       }  
     }
</script>