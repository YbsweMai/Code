
import * as types from '../../../../store/mutation-types';
import { register }from '@/Request/register';
import { encode } from '../../../../common/utils';

// import { order } from '../../../request/order';

const actions = {
   async sendRegist ({ commit },data){
      try {

         const { username,password } = data;

         const user = await register( { username:encode(username),password:encode(password) });

         commit(types.REGIST_USER,user);

      } catch (error) {
         this._vm.$modal.show('errorshow',{ message:error.message });
      }
   }
};

export default actions;