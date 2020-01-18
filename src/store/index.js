import Vue from "vue";
import Vuex, { Store } from "vuex";
import notify from "./notify";
Vue.use(Vuex);

export default new Store({
  modules: {
    notify
  }
});
