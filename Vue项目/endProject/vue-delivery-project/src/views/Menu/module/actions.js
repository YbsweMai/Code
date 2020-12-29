import * as types from '@/store/mutation-types';
import { menu } from '@/Request/menu';
import _ from 'lodash';
// import { getStorage } from '@/common/utils';

const actions =  {
   /* 接收menu页面传来的商店id */
   async getMenu ({ commit },id){
      // console.log('id',id);
      try {
         commit(types.SHOW_LOADING);

         await sleep(2000);

         /* 将商店id传入请求当中 */
         const data = await menu(id);

         const menuList = renderMenu(data);

         commit(types.GET_MENU,menuList);

      } catch (error) {

         this._vm.$modal.show('errorshow',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   },

   setCountArray ({ commit },data){
      // if(!getStorage('cart')){
      //    data = [];
      // }
      commit(types.SET_COUNTARRAY, data);
   },
   delCountArray ({ commit },index){

      commit(types.DEL_COUNTARRAY, index);
   },
   clearCountArray ({ commit }){
      let data = [];
      commit(types.CLEAR_COUNTARRAY,data);
   }

};

function sleep (time){

   return new Promise((res)=>{

      setTimeout(()=>{
         res();
      },time);
   });
}

function renderMenu (data){
   let categories = data.categories;
   let foods = data.foods;
   let arr = [];
   _.forEach(categories, function (i) {
      let a =  _.filter(foods,((j)=>{
         return i._id === j.category._id;
      }));
      _.forEach(a,(item)=>{
         item.count = 0;
      });

      arr.push({
         foods:a,
         category:i,
      });
   });

   let arrFinal =  _.forEach(arr,(j)=>{
      _.forEach(j.foods,(k)=>{
         _.orderBy(k,[ 'k.available' ] ,[ 'desc' ]);
      });
   });
   return  arrFinal;
}
export default actions;