<template>
    <div>
        <button @click="fun('猫')">我是猫</button>
        <button @click="fun('狗')">我是狗</button>
        <button @click="fun('KK')">我是KK</button>
        <h2>Vue组件</h2>
        <h3>{{vueName}}</h3>
    </div>
</template>

<script>
export default {
    name:'HelloVue',
    data(){
        return{
            vueName:'vue'
        }
    },
    methods: {
        fun(name){
            this.vueName = name
        }
    },
}
</script>