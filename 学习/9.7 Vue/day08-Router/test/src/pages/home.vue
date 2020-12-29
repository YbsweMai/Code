<template>
    <div>       
        <h1>home</h1>
        <button @click="jumpAbout1">跳转关于我们parmas</button>
        <button @click="jumpAbout2">跳转关于我们query</button>
        <button @click="jumpAbout3">跳转关于我们动态路由</button>

        <div>
            <input type="text" v-model="input1">
            <button @click="goRemove">后退</button>
        </div>
        
        <div>
            <input type="text" v-model="input2">
            <button @click="goPush">前进</button>
        </div>

        <!-- 行业式路径跳转 -->
        <router-link to="/user">路由路径跳转到user</router-link> 
        <br >
        <!-- 行业式路由名称跳转 -->
        <router-link :to="{name:'user123'}">路由名称跳转到user</router-link>
    </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            input1:-1,
            input2:1
        }
    },
    methods: {
        jumpAbout1(){
            // console.log(this.$router) // 可以得到整个路由
            this.$router.push({ // 利用push方法跳转页面
                path:'/about' , // 利用path跳转
                name:'about',   // 利用name跳转
                params:{   // 路由传参方式一  需要去about页面接受参数 （此方法页面刷新传的参数就消失 报错）
                    a:1,
                    b:{
                        name:'KK'
                    }
                }
            })

            // this.$router.replace({ // replace(替换)方式
            //     path:'/about'   
            // })

            // this.$router.go(-1) // go方法后退1层
        },
        jumpAbout2(){
            this.$router.push({
                path:'/about/5',  // 路由传参方式三 动态路由 给在路由列表定义的:id赋值
                params:{
                    abc:9
                },
                query:{          // 路由传参方式二 query传参 如果使用path传参的话不能同时取到params和query，用name就可以
                    name:'大乱斗',
                    id:2
                }
            })
        },
        jumpAbout3(){
            this.$router.push({
                path:'/about/8' // 
            })
        },
        goRemove(){
            this.$router.go(this.input1)
        },
        goPush(){
            this.$router.go(this.input2)

        }
    },
}
</script>