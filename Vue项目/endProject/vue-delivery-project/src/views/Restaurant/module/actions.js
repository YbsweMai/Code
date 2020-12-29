
import * as types from '@/store/mutation-types';
import { rest } from '@/Request/restaurant';

const actions =  {

   async getRest ({ commit }){

      try {
         commit(types.SHOW_LOADING);

         await sleep(2000);

         const data = await rest();

         // console.log('restaurant======>',data);

         commit(types.GET_REST,data);

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