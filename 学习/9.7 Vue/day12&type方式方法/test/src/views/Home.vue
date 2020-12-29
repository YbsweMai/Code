<template>
  <div class="home">
    <h1>{{isLogin}}</h1>
    <h1>{{list}}</h1>
    <button @click="fun">更改登录状态</button>

    <div>
      <ul>
        <li>{{user.name}}</li>
        <li>{{user.age}}</li>
        <li>{{user.nickName}}</li>
        <li>{{user.university}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapState,mapMutations,mapActions } from "vuex"   //用到vuex里的哪个属性就要在这边加入
export default {
  name: "Home",
  computed: {
    ...mapState({
      "isLogin":state => state.isLogin,
      "list":state => state.list,
      "user":state => state.user
    })
  },
  methods: {
    // ...mapMutations([
    //   'updateLogin',
    //   'updateList'
    // ]),
    ...mapActions([
      'updateLoginState','action1'
    ]),
    fun(){
      // this.updateLogin()
      this.updateLoginState()

      let list = [
        { name:'迪丽热巴'},
        { name:'赵丽颖'},
        { name:'刘大狗'},
        { name:'K大狗'},
      ]
      this.action1(list)
      // this.updateList(list)
    }
  },
  components: {
  },

};
</script>
