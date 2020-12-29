<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <button @click="chance('Less')">less</button>
    <button @click="chance('Sass')">sass</button>
    <Less v-if="activeComp === 'Less'"></Less>  
    <Sass v-else-if="activeComp === 'Sass'"></Sass>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Less from "./components/less"
import Sass from "./components/Sass"

export default {
  name: "App",
  data(){
    return{
      activeComp:'Sass'
    }
  },
  components: {
    Less,Sass
  },
  methods: {
    chance(name){
      this.activeComp = name
    }
  },
};
</script>

<style>

</style>
