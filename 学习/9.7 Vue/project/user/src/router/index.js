import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/regist",
    name: "regist",
    component: () => import("../views/regist.vue")
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/usercenter",
    component: () => import("../views/user.vue"),
    children: [
      {
        path: "usercenter",
        name: "usercenter",
        component: () => import("../views/pages/usercenter.vue")
      },
      {
        path: "mall",
        name: "mall",
        component: () => import("../views/pages/mall.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 检测除了登陆或者注册页面后是否登陆 如果不是也没有登陆信息 则转到登陆页面
router.beforeEach((to, from, next) => {
  if (to.name != "login" && to.name != "regist") {
    const isLogin = localStorage.getItem("user") || "";
    if (!isLogin) {
      alert("请先登录");
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
