import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about.vue")
  },
  {
    path: "/club",
    name: "club",
    component: () => import("../views/club.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contact.vue")
  },
  {
    path: "/join",
    name: "join",
    component: () => import("../views/join.vue")
  },
  {
    path:"/admin",
    name:"admin",
    component:() => import("../views/admin.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
