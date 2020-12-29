import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Index from "../views/index.vue";
// import Login from "../views/login.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path:"/home",
    name:"Home",
    component:Home
  },
  {
    path:"/login",
    name:"Login",
    // component:Login
    component:()=> import("../views/login.vue")  // 路由懒加载 不需要在全局引入，当访问此路由时才加载页面
  },

  {
    path:"/user",
    name:"User",
    // component:Login
    component:()=> import("../views/user/user.vue"),
    children:[
    {
      path:"class",
      name:"class",
      component:()=> import("../views/user/class.vue"),

    },
    {
      path:"setting",
      name:"setting",
      component:()=> import("../views/user/setting.vue"),

    },
  ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


/* 全局守卫钩子 */
router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.getItem('isLogin') || false;
  console.log('from',from)
  console.log('to',to)
  if(to.name === "About"){
    if(!isLogin){
      console.log("没登录，不许进")
      next({
        name:'Login'
      })
      return
    }else{
      console.log('你已登陆，可以进入about页面')
      next()
      return
    }
  }
  next()
})

export default router;
