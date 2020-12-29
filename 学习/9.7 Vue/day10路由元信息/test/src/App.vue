<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"

export default {
  name:'appVue',
  components:{ Header,Footer },
}
</script>

<style lang="scss">

*{
  padding: 0;
  margin:0 ;
}
</style>
