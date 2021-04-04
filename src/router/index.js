import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import about from "../views/About";
import blog from "../views/blog.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component:about
  },
  {
    path: "/blog",
    name: "blog",
    component: blog
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
