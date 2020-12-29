<template>
    <div>
        <Header v-if="isShow"></Header>
        <div @click="closeHeader" class="middle-container">
            <p>现在加入我们</p>
            <div class="middle-box">
                <h5>咨询</h5>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

import Header from "./header.vue"
import Footer from "./footer.vue"

export default {
    name:'home',
    data(){
        return {
            isShow:true,
            title:'home页面的title'
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created', this.title)
       
    },
    beforeMount() {
        console.log('beforeMount')
        
    },
    mounted() {
        console.log('mounted')
        
    },
    beforeUpdate() {
        console.log('beforeUpdate')
        
    },
    updated() {
         console.log('updated')
       
    },
    beforeDestroy() {
        console.log('beforeDestroy')
        
    },
    destroyed() {
        console.log('destroyed')
        
    },
    components:{
        Header,
        Footer,
    },
    methods: {
        closeHeader(){
            this.isShow = !this.isShow
        }
    },
}
</script>

<style>

.middle-container{
    width: 100%;
    height: 380px;
    padding-bottom: 5px;
    background-color: pink;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 -5px 10px #ccc;
}

.middle-container p{
    height: 45px;
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    line-height: 45px;
    margin-bottom: 60px;
}

.middle-box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 55px;
    background-color: #fff;
    border-radius: 28px;
}

.middle-box h5{
    font-size: 18px;
    font-weight: 400;
    color: #333;
    text-align: center;
    line-height: 55px;
    opacity: 1;
    cursor: pointer;
}
</style>