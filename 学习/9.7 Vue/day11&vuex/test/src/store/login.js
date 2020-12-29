const login = {
    namespaced:true,
    state: {
        isLogin:true,
        count: 1000
      },
      /* mutations定义修改state状态的方法，用commit调用 (同步操作)*/
      mutations: {
        updateLogin (state,value) {  // 第一种方法 需要在页面路由接受此方法  第二个参数是传值
          state.count = value
        },
        addCount(state){
            state.count += 1000;
        }
      },
      actions:{
          updateAction({ commit }){
              commit("addCount")
          }
      }
}

export default login