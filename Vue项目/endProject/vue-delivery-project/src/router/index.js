import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Home',
      redirect:'/restaurant',
      component: () =>import('../views/Restaurant/Restaurant.vue')
   },
   {
      path:'/login',
      name:'Login',
      component: () => import('../views/Login/Login.vue')
   },
   {
      path:'/restaurant',
      name:'Restaurant',
      component: () =>import('../views/Restaurant/Restaurant.vue')
   }
   ,
   {
      path:'/order',
      name:'Order',
      component: () =>import('../views/Order/Order.vue')
   },
   {
      /* restId需要和传值的变量名一致 */
      path:'/menu/:restId',
      name:'Menu',
      component: () =>import('../views/Menu/Menu.vue')
   },

];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

// 路由守卫 检测在登陆情况下无法进入login页面
router.beforeEach((to,from,next) => {
   const isLogin = localStorage.getItem('user');
   // 检测跳往login页面是否登陆 如果登陆跳转到restaurant
   if(to.name == 'Login'){
      if(isLogin){
         next({
            name:'Restaurant'
         });
      }else {
         next();
      }
      // 检测跳往order页面是否登陆 未登录跳转到restaurant
   }else if(to.name == 'Order'){
      if(!isLogin){
         next({
            name:'Restaurant'
         });
      }else{
         next();
      }

   }else{
      next();
   }
});

export default router;

