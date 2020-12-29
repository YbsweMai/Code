import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/management"
  },
  {
    path: "/management",
    name: "management",
    component: () => import("../views/management.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  }
];

/* 路由守守卫 */
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 检测除了登陆页面后是否登陆 如果不是登陆页面也没有登陆信息 则转到登陆页面
router.beforeEach((to,from,next)=>{

  if(to.name != 'login'){
    const isLogin = localStorage.getItem("userid") || ''
    if(!isLogin) {
      next({
        name:'login'
      })
    }else {
      next()
    }
  }else {
    next()
  }
})

export default router;
