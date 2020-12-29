<template>
  <div class="App">
    <Header></Header>
    <div class="header-children">
      <router-view />
    </div>
    <Loading></Loading>
  </div>
</template>

<script>
import Header from '@/components/Header/Header';

import Loading from '@/components/Loading/Loading';
export default {
   name:'App',
   components:{
      Header,
      Loading
   }
};
</script>

<style lang="scss">

.App {
    width : 1440px;
    padding : 0 120px;
    margin : auto;
}
.header-children{
   position : relative;
    top :100px;
}
</style>
