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
        <router-link to="/CreateUser"
          ><i class="fas fa-user-plus"></i> Nuevo Usuario</router-link
        >
      </nav>
    </div>

    <h3>{{ titulo }}</h3>

    <form
      class="form-editar"
      @submit.prevent="editarRegistro(registroEditar)"
      v-if="editar"
    >
      <h3>Editar Registro</h3>

      <input
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="registroEditar.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="apellido"
        v-model="registroEditar.apellido"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Email"
        v-model="registroEditar.email"
      />

      <input
        type="checkbox"
        class="chk-box"
        id="cboxAdmin"
        value="administrador"
        v-model="registroEditar.administrador"
      />
      <p1> Administrador </p1>
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
          <th scope="col" style="background-color: gray">Nombre</th>
          <th scope="col" style="background-color: gray">Apellido</th>
          <th scope="col" style="background-color: gray">Email</th>
          <th scope="col" style="background-color: gray">Administrador</th>
          <th scope="col" style="background-color: gray" colspan="2">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in registros" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td align="center">{{ item.nombre }}</td>
          <td align="center">{{ item.apellido }}</td>
          <td align="center">{{ item.email }}</td>
          <td align="center">{{ item.administrador }}</td>
          <td align="center">
            <button v-on:click="eliminarRegistro(item._id)">Eliminar</button>
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
  name: "DashListUsers",
  props: {
    titulo: String,
  },

  data() {
    return {
      registros: [],
      editar: false,
      registroEditar: {},
    };
  },

  created() {
    this.listarUsers();
  },

  methods: {
    listarUsers() {
      //axios.get("http://localhost:3000/api/registro").then((res) => {})
      axios
        .get("https://protected-temple-21080.herokuapp.com/api/registro")
        .then((res) => {
          console.log(res.data);
          this.registros = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    eliminarRegistro(id) {
      //    http://localhost:3000
      axios
        .delete(
          `https://protected-temple-21080.herokuapp.com/api/registro/${id}`
        )
        .then((res) => {
          const index = this.registros.findIndex(
            (item) => item._id === res.data._id
          );
          this.registros.splice(index, 1);
          alert("El Registro " + id + " fue Eliminado Exitosamente");
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.editar = true;
      axios
        .get(`https://protected-temple-21080.herokuapp.com/api/registro/${id}`)
        .then((res) => {
          this.registroEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarRegistro(item) {
      axios
        .put(
          `https://protected-temple-21080.herokuapp.com/api/registro/${item._id}`,
          item
        )
        .then((res) => {
          const index = this.registros.findIndex((n) => n._id === res.data._id);
          this.registros[index].nombre = res.data.nombre;
          this.registros[index].apellido = res.data.apellido;
          this.registros[index].email = res.data.email;
          this.registros[index].administrador = res.data.administrador;
          alert("Registro " + item._id + " Actualizado con Exito");
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
