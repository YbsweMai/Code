<template>
  <div class="home">
    <h1>我是首页</h1>
    <br >
  <el-button :plain="true" @click="open2">打开消息提示</el-button>

    <div class="time">
      <el-calendar v-model="value"></el-calendar>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data(){
    return{
       value: new Date()
    }
  },
  components: {
    
  },
      methods: {
            open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

    }
};
</script>


<style lang="scss">

</style>