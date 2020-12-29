import * as types from './mutation-types';

const restTitle = {
   state: {
      name:{
         title:{},
         tags:[],
         restId:{}
      }

   },
   mutations: {
      [types.SET_NAME] (state, data) {
         state.name.title = data.title;
         state.name.tags = data.tags;
         state.name.restId = data.restId;
         console.log('00--0-0-0-0-0-0',state);

      },

   },
   actions: {
      setTitle ({ commit }, data) {
         commit(types.SET_NAME, data);
      }
   }
};

export default restTitle;