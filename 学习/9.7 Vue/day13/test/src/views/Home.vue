<template>
  <div class="home">
    <div v-for="item in list" :key="item._id">
      <div style="padding-bottom:30px">
        <img :src="item.image" alt="" style="width:200px">
        <p>{{item.name}}</p>
        <p>{{item.createdAt}}</p>
        <p>{{item.price}}元</p>
      </div>      
    </div>

      <img :src="myUserInfo.avatar" alt="">
      <p>{{myUserInfo.age}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios"

export default {
  name: "Home",
  data () {
    return{
      list:[],
      myUserInfo:{},
    }
  },
  created() {
    // this.getShopList()   // 在created调用请求
    // this.getUserInfo()
    this.login()
  },
  methods: {
    // 请求写在方法里
    /* get请求 */
    getShopList(){
      axios.get('http://49.235.98.65:3000/shop/shopList')
      .then( response => {
        console.log(response);
        console.log(response.data);
        this.list = response.data
      })
      .catch( error => {
        console.log(error);
      });
      },
      getUserInfo(){
        let userid = '5f69cd1b0023164a8b9f3ee3';
        axios ({
          url:'http://49.235.98.65:3000/user/userinfo',
          headers:{'user':userid},
          params:{
            id:userid
          },
        }).then(response => {
          console.log('1',response);
          this.myUserInfo = response.data;
        })
        .catch( error => {
          console.log('2',error)
        })
      },
      login (){
        axios({
          method: 'post',
          url: 'http://49.235.98.65:3000/user/login',
          data: {
            username: 'jwjk11',
            password: 'abcabc'
          }
        }).then( response => {
          console.log( 'login res==>', response.data.user)
          this.myUserInfo = response.data.user
        }).catch( error => {
          console.log('login error==>',error)
        })
      }
  },
  components: {
    HelloWorld
  }
};
</script>
