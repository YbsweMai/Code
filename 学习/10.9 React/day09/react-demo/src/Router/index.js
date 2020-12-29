import React from 'react';

/* pages */
import Login from '../Feature/Login/Login';
import Menu from '../Feature/Menu/Menu';

/* pages User */
import User from '../Feature/User/User';
// import UserCenter from '../Feature/UserCenter/UserCenter';
// import ShopMall from '../Feature/ShopMall/ShopMall';

export const routerConfig = [
   {
      path:'/login',
      component: Login
   },
   {
      path:'/menu',
      component: Menu
   },
   {
      path:'/user',
      component: User
   },
   // {
   //    path:'/userCenter',
   //    component: UserCenter
   // },
   // {
   //    path:'/shopMall',
   //    component: ShopMall
   // },
   {
      path:'*',
      component:()=>{
         return (
            <div>404</div>
         );
      }
   },
];