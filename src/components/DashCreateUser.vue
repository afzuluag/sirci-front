<template>
  <div class="container" id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <div class="nav-class">
      <nav>
        <router-link to="/ListUsers"
          ><i class="fas fa-users"></i> Listar Usuarios</router-link
        >
      </nav>
    </div>

    <h3>{{ titulo }}</h3>

    <div class="contain" id="app">
      <div class="form">
        <h1>Formulario de Registro</h1>

        <form @submit="agregarRegistro()">
          <p>
            <input
              class="controls"
              type="text"
              name="nombres"
              id="nombre"
              v-model="registro.nombre"
              placeholder="Ingrese Nombre Completo (*) "
              required
            />
          </p>

          <p>
            <input
              class="controls"
              type="text"
              name="apellido"
              id="apellido"
              v-model="registro.apellido"
              placeholder="Ingrese Apeliidos (*)"
              required
            />
          </p>

          <p>
            <input
              class="controls"
              type="email"
              name="email1"
              id="email1"
              v-model="registro.email"
              placeholder="Ingrese Email (*)"
              required
            />
          </p>
          <p>
            <input
              class="controls"
              type="email"
              name="email2"
              id="email2"
              v-model="registro.email2"
              @blur="validarEmail2"
              placeholder="Confirme Email (*)"
              required
            />
          </p>

          <p>
            <input
              class="controls"
              type="text"
              name="telefono"
              id="telefono"
              v-model="registro.telefono"
              placeholder="Ingrese Telefono (*)"
              required
            />
          </p>

          <p>
            <select
              class="controls"
              name="select"
              id="select"
              v-model="registro.genero"
            >
              <option value="value0">Seleccione Genero</option>
              <option value="value1">Masculino</option>
              <option value="value2">Femenino</option>
            </select>
          </p>

          <p>
            <input
              class="controls"
              type="password"
              name="psw1"
              id="psw1"
              v-model="registro.clave"
              placeholder="Ingrese Password (*)"
              required
            />
          </p>

          <p>
            <input
              class="controls"
              type="password"
              name="psw2"
              id="psw2"
              v-model="registro.psw2"
              placeholder="Confirme Password (*)"
              required
            />
          </p>

          <p>
            <input
              class="controls"
              type="text"
              name="ciudad"
              id="ciudad"
              v-model="registro.ciudad"
              placeholder="Ingrese Ciudad Residencia"
            />
          </p>

          <p>
            <input
              class="controls"
              type="text"
              name="direccion"
              id="direccion"
              v-model="registro.direccion"
              placeholder="Ingrese Direccion Residencia"
            />
          </p>

          <p>
            <input
              class="controls"
              type="date"
              name="fcumple"
              id="fcumple"
              v-model="registro.fcumpleanos"
            />
          </p>

          <p>
            <input
              class="chk-box"
              type="checkbox"
              id="cboxAdmin"
              value="administrador"
              v-model="registro.administrador"
            />
            <p1> Administrador? </p1>
          </p>

          <p2>(*) Campos Obligatorios</p2>

          <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>

          <p>
            <input class="button" type="submit" value="Registrar" />
          </p>

          <p>¿Ya tienes una cuenta? <a href="#">Ingresa aqui</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DashCreateUser",
  props: {
    titulo: String,
  },

  data() {
    return {
      registros: [],
      registro: {
        nombre: "",
        apellido: "",
        email: "",
        clave: "",
        telefono: "",
        direccion: "",
        genero: "",
        ciudad: "",
        fcumpleanos: "",
        administrador: false,
      },
    };
  },

  //created() {},

  methods: {
    agregarRegistro() {
      //axios.post("http://localhost:3000/api/nuevo_registro", this.registro).then((res) => {console.log("Producto creado")})
      axios
        .post(
          "https://protected-temple-21080.herokuapp.com/api/nuevo_registro",
          this.registro
        )
        .then((res) => {
          this.registros.push(res.data);
          this.registro.nombre = "";
          this.registro.apellido = "";
          this.registro.email1 = "";
          this.registro.email2 = "";
          this.registro.telefono = "";
          this.registro.genero = "";
          this.registro.psw1 = "";
          this.registro.psw2 = "";
          this.registro.ciudad = "";
          this.registro.direccion = "";
          this.registro.fcumple = "";
          this.registro.administrador = false;
          alert("Registro Exitoso");
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    /*  listarRegistro(){
      this.axios.get('/registro')
      .then(res=>(
        this.registro=res.data;

      ))

      .catch(e=>(

        console.log(e.response)

      ))
    }
    */
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
}

h3 {
  text-align: center;
  color: #fff;
}

/**CSS FORM*/
* {
  box-sizing: border-box;
}

body {
  padding: 1rem;
}

.contain {
  max-width: 600px;
  padding: 20px;
  margin: auto;
  margin-top: 20px;
}

.form {
  background: #fff;
  border-radius: 5px;
}

.form h1 {
  text-align: center;
  margin-bottom: 10px;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0;
}

form p {
  margin-left: 10px;
  margin-right: 10px;
}

form p2 {
  margin-left: 10px;
  margin-right: 10px;
  color: red;
  font-size: 13px;
}

.button {
  background: lightgrey;
  width: 100%;
  border: 0;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 15px;
  padding: 1em;
  border: 5px red;
  grid-column: 1 / 2;
}

.button:hover,
button:focus {
  background: rgb(54, 17, 221);
  color: white;
  outline: 0;
}

.controls {
  width: 100%;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid #8b8b8b;
  font-family: sans-serif;
  font-size: 15px;
}

.nav-class {
  margin-left: 10px;
  margin-top: 10px;
  color: #fff;
}
</style>
