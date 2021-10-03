import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilm, faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFilm, faCogs);

Vue.component("font-awesome-icon", FontAwesomeIcon);
