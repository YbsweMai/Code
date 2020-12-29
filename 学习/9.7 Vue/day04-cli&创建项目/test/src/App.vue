<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/home.vue";
// import Commom from "./utils/common"

export default {
  name: "App",
  components: {
    Home
  },
  methods: {
    // setLo(){

    //   Commom.setStorage('name','KK')
    // },
    // getLo(){

    //   console.log(Commom.getStorage('name'))
    // },
    // returnStr(){
    //   let abc = '1233'
    //   console.log(Commom.returnString(abc))
    // }
  },
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}


</style>
