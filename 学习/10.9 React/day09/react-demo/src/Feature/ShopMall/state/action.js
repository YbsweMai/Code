import * as ActionType from '../../../Redux/ActionType';
import { loadShopList } from '../../../Request/menu';
import { exchangeshop } from '../../../Request/exchangshop';

/* 获取商品 */
export function loadShop (){

   return async (dispatch)=>{

      try {

         const { list } = await loadShopList();

         dispatch({ type: ActionType.LOAD_SHOP, data: { list } });

         console.log('list',list);

      } catch (error) {
         console.log(error);
      }
   };
}

/* 兑换 */
export function Exchangeshop (id){
   return async (dispatch)=>{

      try {

         const  data  = await exchangeshop(id);

         dispatch({ type: ActionType.Exchange_Shop,data:data  });

      } catch (error) {

         console.log(error);
      }
   };
}