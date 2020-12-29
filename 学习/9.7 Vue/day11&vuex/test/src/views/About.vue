<template>
  <div class="about">
    <h1>home模块state:{{$store.state.home.count}}</h1>
    <h1>login模块state:{{$store.state.login.count}}</h1>
    <h1>getters双倍:{{$store.getters["home/doubleCount"]}}</h1>
    <h1>getters过滤:{{$store.getters["home/finishList"]}}</h1>
    <button @click="add">增加Count</button>
    <br />
    <button @click="add2">增加Count2传值为对象</button>
    <br />
    <button @click="add3">actions==>增加Count</button>
    <br />
    <button @click="updateLoginAction">Login/actions==>增加Count</button>

  </div>
</template>

<script>
export default {
  name:'about',
  methods: {
    /* 正常方式调用 mutations */
    add(){
      this.$store.commit('login/addCount')  // 'addCount是store里mutations的方法 需要.commit来接收  10是传的值
    },
    /* type方式调用mutations，传对象，以type绑定方法名 */
    add2(){
      this.$store.commit({  // 接受的值为对象时写法
        type:'home/addCount2',
        count:100
      })
    },
    add3(){
      // this.$store.dispatch({
      //   type:'addCount3',
      //   count:1000
      // })
      /* 调用的是actions 所有页面用dispatch调用 */
      this.$store.dispatch('home/addCount3',1000)
    },
    updateLoginAction(){
      this.$store.dispatch('login/updateAction')
    }
  },
}
</script>
