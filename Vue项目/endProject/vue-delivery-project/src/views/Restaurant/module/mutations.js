import * as types from '../../../store/mutation-types';

const mutations = {
   [types.GET_REST] (state,data){
      state.restList = data.list;
   }
};

export default mutations;