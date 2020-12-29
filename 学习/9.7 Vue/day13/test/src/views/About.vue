<template>
  <div class="about">
    <img :src="aboutGetUserInfo.avatar" alt="">
    <h1>{{aboutGetUserInfo.nickname}}</h1>

    <img :src="aboutPostUserInfo.avatar" alt="">
    <h1>{{aboutPostUserInfo.nickname}}</h1>
  </div>
</template>

<script>

/* 因为封装的请求已经定义在全局了，所以不用引入了，直接用this.+全局定义的名字  */
// import { get,post } from "../utils/fetch"

export default {
  name:'about',
  data (){
    return{
      aboutGetUserInfo:{},
      aboutPostUserInfo:{}
    }
  },
  created() {
    // this.getUserInfo()
    this.login()
  },
  methods: {
    async getUserInfo(){
      const data = await this.abcGet('/user/userinfo',{
        params:{
          id:'5f69cd1b0023164a8b9f3ee3'
        }
      })
      console.log('about data ',data)
      this.aboutGetUserInfo = data
    },

    async login (){
        // axios({
        //   method: 'post',
        //   url: 'http://49.235.98.65:3000/user/login',
        //   data: {
        //     username: 'jwjk11',
        //     password: 'alalal'
        //   }
        // }).then( response => {
        //   console.log( 'login res==>', response.data.user)
        //   this.myUserInfo = response.data.user
        // }).catch( error => {
        //   console.log('login error==>',error)
        // })

        let parmas = {
            username: 'jwjk11',
            password: 'alalal'
        }
        const data = await this.abcPost('/user/login',parmas)
        console.log('login data',data.user)
        this.aboutPostUserInfo = data.user

    }
  } 
}
</script>
