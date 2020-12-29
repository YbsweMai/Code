<template>
  <div>
    <button @click="click1">获取mixin里的方法</button>
    <br />
    <button @click="isShow = !isShow">过渡效果</button>
    <br />

    <!-- css过渡 -->
<!-- 
    <transition name="fade">
          <p class="font" v-if="isShow">过渡效果</p>
    </transition> -->

<!-- js过渡 -->
<!-- <transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled">
  <p v-if="isShow">Js过度</p>
</transition> -->

<!-- 动态组件 -->
  <button @click="chance('HelloWorld')">btn1</button>
  <button @click="chance('HelloVue')">btn2</button>
  <button @click="chance('HelloJS')">btn3</button>

<!-- 1 引用所创建的组件 -->
<!-- 2 keep-alive属性 能保存动态组件里的状态 -->
  <keep-alive>
    <component :is="activeComp"></component>
  </keep-alive>

  <!-- 单个组件 -->
  <!-- <HelloWorld></HelloWorld> -->

  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Commom from "./mixins/common"
import Velocity from "velocity-animate"
import HelloWorld from "./components/HelloWorld"
import HelloVue from "./components/HelloVue"
import HelloJS from "./components/HelloJS"



export default {
  name: "App",
  // mixins:[Commom.myMixin],
  data(){
    return{
      message1:'我是父组件里的message',
      isShow:true,
      /* 动态组件绑定名称 */
      activeComp:'HelloWorld',
    }
    
  },
  components : { HelloWorld, HelloVue, HelloJS },
  methods: {
    /* 改变组件绑定的名称 */
    chance(name){
      this.activeComp = name
    },

    click1(){
      console.log('mixin混入的message--->',this.message) // 如果重名 优先选择父组件
      console.log('父组件的message--->',this.message1) // 

      // this.sayHello()
    },
      beforeEnter: function (el) {
    // ...
    console.log('el',el)
    el.style.opacity = 0;
    el.style.color = "#f97197"
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
    // ...
    console.log('el',el)
    Velocity(el,{ opacity:1, color: "#fc5600" , fontSize:"30px"}, { duration:1000 })
    done()
  },
  afterEnter: function (el) {
    // ...
    Velocity(el,{ opacity:1, color: "#333333" , fontSize:"14px"}, { duration:1000 })
    console.log('el',el)
  },
  enterCancelled: function (el) {
    // ...
    console.log('el',el)
  },

  // --------
  // 离开时
  // --------

  // beforeLeave: function (el) {
  //   // ...
  //   console.log('el',el)
  // },
  // // 当与 CSS 结合使用时
  // // 回调函数 done 是可选的
  // leave: function (el, done) {
  //   // ...
  //   done()
  //   console.log('el',el)
  // },
  // afterLeave: function (el) {
  //   // ...
  //   console.log('el',el)
  // },
  // // leaveCancelled 只用于 v-show 中
  // leaveCancelled: function (el) {
  //   // ...
  //   console.log('el',el)
  // }

  },
};
</script>

<style>

.font{
  font-size: 14px;
  color: yellow;
}

  /* 未给过渡效果起名字时候是用.v- 起名字后用 .+名字 */ 
  .fade-enter{
    opacity: 0;
    font-size: 30px;
    color: cadetblue;
  }

  .fade-enter-active{
    /* transition: all 3s; */
    animation: small-big 3s;
  }

  .fade-enter-to{
    opacity: 1;
    font-size: 14px;
    color: yellow;
  }

  .fade-leave{
    font-size: 14px;
    color: yellow;
  }

  .fade-leave-active{
    /* transition: all 3s; */
    animation:  big-small 3s;
  }

  .fade-leave-to{
    font-size: 30px;
    color: blue;
  }

  @keyframes small-big{

    0%{
      font-size: 14px;
    }
    25%{
      font-size: 30px;
      color: wheat;
    }
    50%{
      font-size: 50px;
      color: violet;
    }
    75%{
      font-size: 60px;
      color: green;
    }
    100%{
      font-size: 80px;
      color: yellow;
    }
  }

    @keyframes big-small{

    0%{
      font-size: 80px;
      color: yellow;
    }
    25%{
      font-size: 60px;
      color: green;
    }
    50%{
      font-size: 50px;
      color: violet;
    }
    75%{
      font-size: 30px;
      color: wheat;
    }
    100%{
      font-size: 14px;
    }
  }
</style>
