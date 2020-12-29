
import * as types from '../../../store/mutation-types';

const mutations = {

   [types.GET_ORDER] (state,data){

      state.orderList = data.list;

   }
};

export default mutations;