<template>
  <div class="container">
    <form action="">
      <label for="name">Nombre</label>
      <input type="text" id="name">
      <div class="">
          <label for="format">Formato</label>
          <!-- <input type="text" id="format"> -->
          <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Formato 1</a></li>
                <li><a class="dropdown-item" href="#">Formato 2</a></li>
                <li><a class="dropdown-item" href="#">Formato 3</a></li>
                <!-- <hr class="dropdown-menu__content-divider"> -->
                <li><a class="dropdown-item" href="#">Formato 4</a></li>
            </ul>
      </div>
      <div class="">
          <label for="class">Clasificación</label>
          <!-- <input type="text" id="class"> -->
          <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
          <ul class="dropdown-menu">
              <a class="dropdown-item">AA  - Películas para todo público que tengan además atractivo infantil y sean comprensibles para niños menores de siete años de edad.</a>
              <a class="dropdown-item">A   - Películas para todo público.</a>
              <!--<hr class="dropdown-menu__content-divider">-->
              <a class="dropdown-item">B   - Películas para adolescentes de 12 años en adelante.</a>
              <a class="dropdown-item">B15 - Película no recomendable para menores de 15 años de edad.</a>
              <a class="dropdown-item">C   - Películas para adultos de 18 años en adelante.</a>
              <a class="dropdown-item">D   - Películas para adultos, con sexo explícito, lenguaje procaz o alto grado de violencia.</a>
          </ul>
      </div>
      <label for="points">Puntaje</label>
      <input type="range">
        <div>
          <label for="state">Estado</label>
          <input type="radio" name="state" id="state-active" >
          <label for="state-active">Activa</label>
          <input type="radio" name="state" id="state-inactive">
          <label for="state-inactive">Inactiva</label>
        </div>
      <div>
        <div>
          <label for="people">Reparto</label>
          <input type="text">
        </div>
        <label for="sinopsis">Sinopsis</label>
        <textarea name="sinopsis" id="" cols="22" rows="5"></textarea>
        <div>
          <label for="file">Cartel</label>
          <input type="file" >
        </div>
      </div>
      <div>
          <button type="submit" class="btn btn-light">Guardar</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
   name: "CreateMovie",
   props:{
      titulo: String,
      formato: String,
   },
}
</script>

<style>


</style>
