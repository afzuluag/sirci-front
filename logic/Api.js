import axios from "axios";
const API = "https://lit-reaches-52960.herokuapp.com/personas";

export default {
  getAll() {
    return axios.get(API);
  },
  create(todo) {
    return axios.post(API, todo);
  },
  getOne(nombre) {
    const API2 = `${API}/${nombre}`;
    //console.log(API2);
    return axios.get(API2);
  },
  update(nombre, obj) {
    const API2 = `${API}/${nombre}`;
    //console.log(API2);
    return axios.put(API2, obj);
  },
  delete(nombre) {
    const API2 = `${API}/${nombre}`;
    //console.log(API2);
    return axios.delete(API2);
  },
};