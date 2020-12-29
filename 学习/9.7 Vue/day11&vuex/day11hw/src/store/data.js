const data = {
    namespaced:true,
    state: {
        list:{name:'',
        age:'',
        nickName:'',
        university:''}
      },
      /* mutations定义修改state状态的方法，用commit调用 (同步操作)*/
      mutations: {
        addContent(state,value){
            state.list.name = value.name
            state.list.age = value.age
            state.list.nickName = value.nickName
            state.list.university = value.university
        }
      },
      getters:{
        // getName(state) {
        //     return state.name
        // },
      }, 
      actions:{
          
      }
}

export default data