import * as ActionType from '../../../Redux/ActionType';

const initialState = { shopMall:[] };

export default (state = initialState, payload) => {

   switch (payload.type) {
   case ActionType.LOAD_SHOP:
      console.log('shop',payload);

      return {
         ...state,
         shopMall: payload.data.list,
      };

   case ActionType.Exchange_Shop:
      console.log('record',payload);
      return {
         ...state,
         message: payload.data
      };
   default:
      return state;
   }
};