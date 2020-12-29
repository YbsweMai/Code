import * as ActionType from '../../../Redux/ActionType';

const initialState = { user:[] };

export default (state = initialState, payload) => {

   switch (payload.type) {
   case ActionType.GET_USER:
      console.log('payload',payload);
      return {
         ...state,
         user: payload.data.user
      };
   default:
      return state;
   }
};