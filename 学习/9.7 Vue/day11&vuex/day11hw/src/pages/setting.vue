<template>
    <div class="container">
        <div class="left">
            <h3>姓名:{{$store.state.data.list.name}}</h3>
            <h3>年龄:{{$store.state.data.list.age}}</h3>
            <h3>昵称:{{$store.state.data.list.nickName}}</h3>
            <h3>学校:{{$store.state.data.list.university}}</h3>
        </div>
        <div class="right">
            <h1>个人信息</h1>
            <div class="content">
                <h2>信息修改</h2>
                <div class="input">
                    姓名<input type="text" v-model="setName">
                    学校<input type="text" v-model="setUniversity">
                    <br>
                    昵称<input type="text" v-model="setNickName">
                    <br>
                    年龄<input type="text" v-model="setAge">
                </div>
                <button @click="save">保存</button>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'setting',
    data(){
        return{
            setName:this.$store.state.data.list.name,
            setUniversity:this.$store.state.data.list.university,
            setNickName:this.$store.state.data.list.nickName,
            setAge:this.$store.state.data.list.age
        }
    },
    created() {
        console.log('this.route', this.$route);
        // console.log(this.$store.state.data.name)
        this.setName = this.$store.state.data.list.name
    },
    methods: {
        save(){
            this.$store.state.data.list.name = this.setName
            this.$store.state.data.list.university = this.setUniversity
            this.$store.state.data.list.nickName = this.setNickName
            this.$store.state.data.list.age = this.setAge
            console.log(this.$store)
        }
    },
}
</script>

<style scoped lang="scss">
    .container {
        height: 100vh;
        width: 100vw;
        display: flex;
        .left{
            width: 200px;
            height: 100%;
            background-color: blue;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            h3{
                padding: 30px 0;
            }
        }
        .right{
            padding: 100px;
            width: 100%;
            .content{
                padding: 50px 80px;
                border: 1px solid #3c3c3c;
                .input{
                    margin: 50px 100px;
                    input{
                        height: 35px;
                        margin: 20px 20px 20px 5px
                    }
                }
            }
            button{
            width: 400px;
            height: 50px;
            background-color: skyblue;
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 20px;
        }
        }
    }
</style>