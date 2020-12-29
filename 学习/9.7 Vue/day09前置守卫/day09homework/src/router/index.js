import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect:'/Project',
    // component: Home
    component: () => import("../views/Home.vue"),
    children:[
      {
        path:"project",
        name:"project",
        component:()=> import("../views/user/Project.vue"), 
      },
      {
        path:"email",
        name:"email",
        component:()=> import("../views/user/email.vue"), 
      },
      {
        path:"setting",
        name:"setting",
        component:()=> import("../views/user/setting.vue"), 
      },
    ]
  },
  {
    path:'/quit',
    name:"quit",
    component:()=> import("../views/quit.vue")
  }
  

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
