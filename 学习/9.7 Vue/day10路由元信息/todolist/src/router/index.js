import Vue from "vue";
import VueRouter from "vue-router";
import ToDoList from "../views/page/ToDoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ToDoList",
    component: ToDoList,
    children:[
      {
        path: "finish",
        name: "finish",
        component: () => import("../views/page/finish.vue")
      },
      // {
      //   path: "unfinished",
      //   name: "unfinished",
      //   component: () => import("../views/page/unfinished.vue")
      // },
      {
        path: "all",
        name: "all",
        component: () => import("../views/page/all.vue")
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
