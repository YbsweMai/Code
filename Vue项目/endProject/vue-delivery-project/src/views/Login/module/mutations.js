
import * as types from '../../../store/mutation-types';

const mutations = {

   [types.GET_USER] (state,data){

      state.user = data;

   }
};

export default mutations;