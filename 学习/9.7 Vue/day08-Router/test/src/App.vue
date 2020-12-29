<template>
  <div class="container">  <!-- 命名视图 -->
    <router-view class="main"></router-view>
    <router-view class="slide" name="slide"></router-view>
    <router-view class="nav" name="nav"></router-view>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
    
  }
};
</script>

<style lang="scss">
  .container{
    position: relative;
  }

  .slide{
    position: fixed;
    width: 100px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: bisque;
  }

  .nav{
    position: fixed;
    left: 100px;
    right: 0;
    height: 100px;
    background-color: skyblue;
  }

  .main{
    position: fixed;
    left: 100px;
    top: 100px;
    right: 0;
    bottom: 0;
    background-color: aqua;
  }
</style>
