import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import * as Homework from "./homework"

const data = {
    // namespaced:true,
    state: {
        list: JSON.parse(localStorage.getItem('keykey')) || {}
      },
      /* mutations定义修改state状态的方法，用commit调用 (同步操作)*/
      mutations: {
        // addContent(state,value){
        //     state.list.name = value.name
        //     state.list.age = value.age
        //     state.list.nickName = value.nickName
        //     state.list.university = value.university
        // }
        [Homework.add_Content] (state,data) {
          state.list = data
        },

        // [Homework.UPDATE_USER] (state,data) {
        //   state.list.name = 
        // }
      },
      actions:{
        addContent({ commit },data) {
          console.log('////', data)
          localStorage.setItem('keykey', JSON.stringify(data))
          commit(Homework.add_Content,data)
        },
      }
}

export default data