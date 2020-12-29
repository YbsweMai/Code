import * as types from '@/store/mutation-types';

const mutations = {
   [types.GET_MENU] (state,menuList){
      state.menuList = menuList;
      // console.log(state.menuList);
   },
   [types.SET_COUNTARRAY] (state,data){
      state.count.push(data);
      // console.log(state.count);
   },
   [types.DEL_COUNTARRAY] (state,index){
      state.count.splice(index,1);
   },
   [types.CLEAR_COUNTARRAY] (state,data){
      state.count = data;
   }

};

export default mutations;