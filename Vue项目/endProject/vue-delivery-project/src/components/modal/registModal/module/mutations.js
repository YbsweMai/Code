
import * as types from '../../../../store/mutation-types';

const mutations = {

   [types.REGIST_USER] (state,data){

      state.registUser = data;

   }
};

export default mutations;