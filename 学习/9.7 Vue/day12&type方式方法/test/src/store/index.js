import Vue from "vue";
import Vuex from "vuex";
import data from "./data"


/* 导出所有在mutation-type里的方法 */
import * as types from "./mutation-type"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin:false,
    list:[
      { name: 'KK'},
      { name: '22'},
      { name: '33'},
      { name: '66'}
    ],
    user:JSON.parse(localStorage.getItem('userInfo')) || {}  // 用户登录信息
  },
  mutations: {
    // updateLogin(state){
    //   state.isLogin = !state.isLogin
    // },
    // updateList(state,value){
    //   state.list = value
    // }

    [types.UPDATE_LOGIN] (state) {
      state.isLogin = !state.isLogin
    },

    [types.UPDATE_List] (state,value) {
      state.list = value
    },

    [types.UPDATE_USER_INFO] (state,data){
      state.user = data
    }

  },
  actions: {
    updateLoginState({ commit }){
      commit(types.UPDATE_LOGIN)
    },
    action1({ commit },value) {
      commit(types.UPDATE_List,value)
    },
    updateUserInfo({commit},data){
      localStorage.setItem('userInfo',JSON.stringify(data))
      commit(types.UPDATE_USER_INFO,data)
    }
  },
  modules: {
    data
  }
});
