
import * as types from '../../../store/mutation-types';
import { order }from '@/Request/order';
import { getStorage } from '../../../common/utils';
import router from '../../../router/index';

const actions = {
   async getOrder ({ commit }){
      try {
         if(getStorage('user')){

            commit(types.SHOW_LOADING);

            await sleep(2000);

            const id = getStorage('user')._id;

            const list = await order(id);

            commit(types.GET_ORDER,list);

            // console.log('list',list);
         }else {
            // console.log(1231232131);
            router.push({
               name:'Restaurant'
            });
         }

      } catch (error) {
         // commit(types.GET_ORDER,{ message: error.message });
         this._vm.$modal.show('errorshow',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   }
};

function sleep (time){

   return new Promise((res)=>{

      setTimeout(()=>{
         res();
      },time);
   });
}

export default actions;