import * as ActionType from '../../../Redux/ActionType';
import { loadShopList } from '../../../Request/menu';

export function loadShop (){

   return async (dispatch)=>{

      try {
         dispatch({ type: ActionType.SHOW_LOADING });

         const { list } = await loadShopList();

         dispatch({ type: ActionType.LOAD_SHOP, data: { list } });

         dispatch({ type: ActionType.HIDE_LOADING });
      } catch (error) {

         dispatch({ type:ActionType.SHOW_MODAL,data:{ message: error.message } });
      }finally{

         dispatch({ type:ActionType.HIDE_LOADING });
      }
   };
}