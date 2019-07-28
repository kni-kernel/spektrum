import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound";
import store from "./store";

Vue.use(VueRouter);

const shouldNotBeAuthenticated = (to, from, next) => {
  if (process.env.VUE_APP_LOCAL || !store.getters.getLoginState) {
    next();
    return;
  }
  next("/");
};

const shouldBeAuthenticated = (to, from, next) => {
  if (process.env.VUE_APP_LOCAL || store.getters.getLoginState) {
    next();
    return;
  }
  next("/login");
};

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: shouldBeAuthenticated
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/Login.vue"),
      beforeEnter: shouldNotBeAuthenticated
    },
    { path: "/404", component: NotFound },
    { path: "*", redirect: "/404" }
  ]
});
