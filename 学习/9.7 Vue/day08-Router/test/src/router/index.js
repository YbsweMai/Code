
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";
import About from "../pages/about.vue"
import Contact from "../pages/contact.vue"
import Test from "../pages/test.vue"
import User from "../pages/user.vue"
import Nav from "../pages/nav.vue"
import Slide from "../pages/slide.vue"

/* 引入路由依赖后 需要调用路由 */
Vue.use(VueRouter);


/* 路由列表 定义页面 path是路径 */
const routes = [
  {
    path: "/",
    name:'root',
    redirect:'/user' // 重定向
  },
  {
    path: "/home",
    name:'home',
    // component: Home
    components:{
        default:Home,
        slide:Slide,
        nav: Nav

    }
  },
  {
    path: '/about/:id',  // 动态路由需要给路径赋值
    name:'about',
    component: About
  },
  {
    path: '/contact',
    name:'contact',
    alias:'/ccc',
    component: Contact
  },
  {
    path: '/test',
    name:'test',
    component: Test
  },
  {
    path: '/user',
    name:'user123',
    component: User
  }

];

/* 定义好的router需要在main.js中引用 */
const router = new VueRouter({
  mode: "history",   // hash
  base: '/',
  routes  // 给定义的new VueRouter（router）加入上面定义的路由表 （routes）
});

export default router;
