<template>
    <div class="container">
        <div class="left">
            <ul>
                <!-- <li @click="jump('class')">我的课程</li>  
                <li @click="jump('setting')">设置</li> -->  <!-- 动态组件方式 -->

                <li><router-link to="../user/class">我的课程</router-link></li>
                <li><router-link to="../user/setting">设置</router-link></li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>

            <!-- <component :is="activeName"></component> --> <!-- 动态组件方式 -->

        </div>
    </div>
</template>


<script>
import Setting from "./setting"
import Class from "./class"
export default {
    name:'User',
    data(){
        return{
            activeName:'class'

        }
    },
    components:{
        Setting,Class // 动态组件方式
    },
    methods: {
        jump(name){
            console.log(this.activeName)
            this.activeName = name
        }
    },
}
</script>

<style lang="scss">
    .container{
        position: relative;
    }

    .left{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 300px;
        background-color: aqua;
        ul{
            padding: 0;
            li{
                list-style: none;
                text-decoration: none;
                line-height: 50px;
            }
        }
    }

    .right{
        position: fixed;
        top: 0;
        left: 300px;
        right: 0;
        bottom: 0;
        background-color: bisque;
    }
</style>