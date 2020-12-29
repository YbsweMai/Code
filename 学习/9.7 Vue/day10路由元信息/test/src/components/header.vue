<template>
    <div class="header-container">
        <div class="header-left">
            <h1>半圆学社</h1>
        </div>
        <div class="header-right">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/club">俱乐部</router-link></li>
                <li><router-link to="/about">关于我们</router-link></li>
                <li><router-link to="/join">加入我们</router-link></li>
                <li><router-link to="/contact">联系我们</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'header'
}
</script>

<style scoped lang="scss">

    a{
        text-decoration: none;
        color: black;
    }

    .header-container{
        display: flex;
        justify-content: space-between;
        background-color: aqua;
        .header-left{
            
            line-height: 110px;
        }
        
        .header-right{

            line-height: 110px;
            ul{
                display: flex;
                align-content: center;
                li{
                    list-style: none;
                    padding: 0 20px;
                }
            }
        }
    }
</style>