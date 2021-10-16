<template>
  <div class="container">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <div class="nav-class">
      <nav>
        <router-link to="/CreateMovie"
          ><i class="fas fa-user-plus"></i> Nueva Pelicula</router-link
        >
      </nav>
    </div>

    <h3>{{ titulo }}</h3>

    <form
      class="form-editar"
      @submit.prevent="editarPelicula(peliculaEditar)"
      v-if="editar"
    >
      <h3>Editar Pelicula</h3>

      <input
        type="text"
        class="form-control my-2"
        placeholder="Nombre Pelicula"
        v-model="peliculaEditar.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Formato Pelicula"
        v-model="peliculaEditar.formato"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="clasificacion"
        v-model="peliculaEditar.clasificacion"
      />

      <input
        type="checkbox"
        class="chk-box"
        id="cboxAdmin"
        value="activo"
        v-model="peliculaEditar.activo"
      />
      <p1> Activo </p1>
      <button class="btn-success my-2 mx-2" type="submit">Editar</button>
      <button class="my-2" type="submit" @click="editar = false">
        Cancelar
      </button>
    </form>

    <table
      class="table1"
      align="center"
      cellspacing="1"
      border="1"
      cellpadding="15"
    >
      <thead>
        <tr>
          <th scope="col" style="background-color: gray">#</th>
          <th scope="col" style="background-color: gray">Pelicula</th>
          <th scope="col" style="background-color: gray">Formato</th>
          <th scope="col" style="background-color: gray">Clasificacion</th>
          <th scope="col" style="background-color: gray">Puntaje</th>
          <th scope="col" style="background-color: gray">Reparto</th>
          <th scope="col" style="background-color: gray">Estado</th>
          <th scope="col" style="background-color: gray" colspan="2">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in peliculas" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td align="center">{{ item.nombre }}</td>
          <td align="center">{{ item.formato }}</td>
          <td align="center">{{ item.clasificacion }}</td>
          <td align="center">{{ item.puntaje }}</td>
          <td align="center">{{ item.reparto }}</td>
          <td align="center">{{ item.activo }}</td>
          <td align="center">
            <button v-on:click="eliminarPelicula(item._id)">Eliminar</button>
          </td>
          <td align="center">
            <button v-on:click="activarEdicion(item._id)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashListMovies",
  props: {
    titulo: String,
  },

  data() {
    return {
      peliculas: [],
      editar: false,
      peliculaEditar: {},
    };
  },

  created() {
    this.listarMovies();
  },

  methods: {
    listarMovies() {
      axios
        .get("https://protected-temple-21080.herokuapp.com/api/pelicula")
        .then((res) => {
          console.log(res.data);
          this.peliculas = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    eliminarPelicula(id) {
      axios
        .delete(
          `https://protected-temple-21080.herokuapp.com/api/pelicula/${id}`
        )
        .then((res) => {
          const index = this.peliculas.findIndex(
            (item) => item._id === res.data._id
          );
          this.peliculas.splice(index, 1);
          alert("La Pelicula " + id + " fue Eliminado Exitosamente");
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.editar = true;
      axios
        .get(`https://protected-temple-21080.herokuapp.com/api/pelicula/${id}`)
        .then((res) => {
          this.peliculaEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarPelicula(item) {
      axios
        .put(
          `https://protected-temple-21080.herokuapp.com/api/pelicula/${item._id}`,
          item
        )
        .then((res) => {
          const index = this.peliculas.findIndex((n) => n._id === res.data._id);
          this.peliculas[index].nombre = res.data.nombre;
          this.peliculas[index].formato = res.data.formato;
          this.peliculas[index].clasificacion = res.data.clasificacion;
          this.peliculas[index].puntaje = res.data.puntaje;
          this.peliculas[index].reparto = res.data.reparto;
          this.peliculas[index].activo = res.data.activo;
          alert("Pelicula " + item._id + " Actualizado con Exito");
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
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
  color: #fff;
}

h3 {
  text-align: center;
}

.table1 {
  font-size: 13px;
  border-style: ridge;
  border-color: blanchedalmond;
  width: 860px;
  align-content: center;
  background: #fff;
  color: black;
  padding: 1px;
  margin-left: 50px;
  margin-top: 15px;
}

.form-editar {
  margin-left: 50px;
  border-radius: 5px;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: 15px;
  margin-bottom: 10px;
}

.nav-class {
  margin-right: 10px;
  margin-top: 10px;
}
.nav-class {
  margin-left: 10px;
  margin-top: 10px;
  color: #fff;
}
</style>
