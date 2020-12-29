<template>
  <div id="app">
    <router-view />
<!-- <div style="width: 100%;height: 10px;background: red;"></div>
    <setting> </setting> -->

  </div>
</template>

<script>

import setting from "./pages/setting"

export default {
  name:'app',
  components:{
    setting,
  },
  watch: {
    "$route" (newv, oldv) {
      console.log('app newv', newv)
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
