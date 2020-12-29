import * as ActionType from '../../../Redux/ActionType';
import { exchangerecord } from '../../../Request/exchangerecord';

/* 获取商品 */
export function Exchangerecord (id){

   return async (dispatch)=>{

      try {

         const { list } = await exchangerecord(id);

         dispatch({ type: ActionType.Exchange_Record, data: { list } });

         console.log('list',list);

      } catch (error) {
         console.log(error);
      }
   };
}
