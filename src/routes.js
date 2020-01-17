import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "@/pages/Home.vue";
import Notify from "@/pages/Notify.vue";
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
		},
		{
			path: "/notify",
			name: "notify",
			component: Notify
		}
  ]
});
