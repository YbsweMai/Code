import * as ActionType from '../../../Redux/ActionType';

import { getUserInfo } from '../../../Request/User';

export function getUser (){

   return async (dispatch)=>{

      try {

         const   user  = await getUserInfo();

         console.log('user',user);

         dispatch({ type: ActionType.GET_USER,  data:{ user }  });

      } catch (error) {

         //  dispatch({ data:{ message: error.message } });
      }
   };
}