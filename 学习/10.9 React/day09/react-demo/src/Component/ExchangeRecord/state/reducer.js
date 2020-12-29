import * as ActionType from '../../../Redux/ActionType';

const initialState = { getRecord:[] };

export default (state = initialState, payload) => {

   switch (payload.type) {
   case ActionType.Exchange_Record:
      console.log('exrecord',payload);

      return {
         ...state,
         getRecord: payload.data.list,
      };

   default:
      return state;
   }
};