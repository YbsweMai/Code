import * as types from '@/store/mutation-types';
import { submit } from '@/Request/submit';

import { getStorage ,cleanStorage } from '@/common/utils';

const actions =  {

   async submitOrder ({ commit }){

      try {
         commit(types.SHOW_LOADING);
         await sleep(2000);
         let data = {
            payment:getStorage('payment').value,
            cart:getStorage('cart'),
            userId:getStorage('user')._id,
            restaurantId:'59879867376b1e0011183f83' ,
         };

         await submit(data);
         cleanStorage('cart');

      } catch (error) {

         this._vm.$modal.show('errorshow',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   },

};

function sleep (time){

   return new Promise((res)=>{

      setTimeout(()=>{
         res();
      },time);
   });
}

export default actions;