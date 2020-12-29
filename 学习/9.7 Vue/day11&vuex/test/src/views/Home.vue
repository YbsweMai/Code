<template>
  <div class="home">
    <!-- <h1>{{$store.state.home.count}}</h1> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    console.log('vuex',this.$store)
  },
};
</script>
