import Vue from 'vue'
import Vuex from 'vuex'
import home from '../store/home'
import login from '../store/login'

Vue.use(Vuex)

const store = new Vuex.Store({
  
    state:{},
    mutations:{},
    modules:{
        home,
        login
    }
})

// state: {
//     count: 10,
//     list:[
//         {name:'123123131',isFinish:'false'},
//         {name:'lkj',isFinish:'true'},
//         {name:'abcd',isFinish:'true'},
//         {name:'qweqwe',isFinish:'true'},
//         {name:'898980',isFinish:'false'}
//     ]
//   },
//   getters:{
//     doubleCount(state) {
//         return state.count*2
//     },
//     finishList(state) {
//         let arr = state.list.filter(item => {
//             return item.isFinish == 'true'
//         })
//         return arr
//     }
//   },
//   /* mutations定义修改state状态的方法，用commit调用 (同步操作)*/
//   mutations: {
//     addCount (state,value) {  // 第一种方法 需要在页面路由接受此方法  第二个参数是传值
//       state.count += value
//     },
//     addCount2 (state,value){  // value如果作为对象来传值
//         state.count += value.count
//     }
//   },
//   /* 可以进行异步操作 */
//   actions:{
//       addCount3(store,value){
//           console.log('store',store)
//           store.commit('addCount',value)
//       },

//       // 解构写法
//     //   addCount3({ commit },value){
//     //       commit('addCount',value)
//     //   }
//   }

export default store