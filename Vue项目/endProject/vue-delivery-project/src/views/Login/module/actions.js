import * as types from '@/store/mutation-types';
import { login } from '@/Request/login';
import { encode } from '../../../common/utils';
/* 在js文件中进行路由操作需要引进 */
import  router  from '../../../router/index';

import { setStorage } from '../../../common/utils';

const actions =  {

   async sendLogin ({ commit },data){

      try {
         const { username,password } = data;

         const user = await login( { username:encode(username),password:encode(password) });

         commit(types.REGIST_USER,user);

         // console.log('logindata',user);

         setStorage('user',user);

         if(user){
            alert('登陆成功');
            router.push({
               name:'Restaurant'
            });
         }
      } catch (error) {
         // console.log('=====>in');
         // console.log('error',error);

         this._vm.$modal.show('errorshow',{ message:error.message });

      }
   },
};

export default actions;

