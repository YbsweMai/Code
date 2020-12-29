<template>
  <div class="about">
    <h1>俱乐部</h1>
      <el-button :plain="true" @click="open2">打开消息提示</el-button>

  </div>
</template>

<script>
export default {
    name:'club',
    methods: {
            open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

    }
}
</script>