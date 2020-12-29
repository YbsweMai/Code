<template>
    <div>
        <h1 class="hh1">Sass</h1>
        <div class="container">
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
        </div>

        <div class="div1"></div>
        <div class="div2"></div>
        
    </div>
</template>


<script>
export default {
    name:'Sass'
}
</script>


<style lang="scss"> /* 与less不同的是 lang后面写sacc  */
    /* 标记符使用$ */
    $font-size:50px;
    $color:#f97197;

    .hh1{
        font-size: $font-size;
        color: $color;
    }

    .container{
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 50px auto;
        h1{
            color: red;
        }
        h2{
            color: yellow;
        }
        h3{
            color: aqua;
        }
    }

    .div1{
        width: 100px;
        height: 100px;
        background-color: bisque;
       
    }

     /* 继承 @extend */
    .div2{
        @extend .div1;
        background-color: aqua;
    }

     /* 混入 @mixin定义  @include调用 */
    @mixin marginleft{
        margin-left: 50px;
    }
    .div1{
        @include marginleft;
    }

    /* 混入传值 可改变继承的属性*/
    @mixin marginleft2($val:10px){
        margin-left: $val;
    }
    .div2{
        @include marginleft2(100px)
    }

    /* 引入外部sass  */
    @import "./style/sass.scss"
</style>