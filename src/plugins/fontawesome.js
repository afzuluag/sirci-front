import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faFilm,
  faUser,
  faUserEdit,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faFilm, faUser, faUserEdit, faPhotoVideo);

Vue.component("font-awesome-icon", FontAwesomeIcon);
