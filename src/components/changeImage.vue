<template>
</template>    

<script>
   import axios from "axios"; 
   export default{
     data: () => ({
        imageSource: 'silla11.png'
     }),
     methods: {
        changeSource: function() {
        imageSource : 'silla21.png'
        alert("Test");
        }
     }
   }
</script>