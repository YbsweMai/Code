<template>
    <div class="container">

         <div class="container-box">
            <h1>登陆</h1>
            <input type="text" placeholder="姓名" v-model="name">
            <input type="number" placeholder="年龄" v-model="age">
            <input type="text" placeholder="昵称" v-model="nickName">
            <input type="text" placeholder="大学" v-model="university">
            <div class="btn">
                <!-- <button @click="add"><router-link to="/setting">登陆</router-link></button> -->
                <button @click="add">登陆</button>
            </div>           
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            name:'',
            age:null,
            nickName:'',
            university:''
        }
    },
    created() {
        console.log('this.route', this.$route);
    },
    methods: {
        add(){
            if(!this.name && !this.age && !this.nickName && !this.university){
                alert('信息不能为空')
            }else {
                                
                this.$store.commit({
                type:'data/addContent',
                name:this.name,
                age:this.age,
                nickName:this.nickName,
                university:this.university
            })
            this.$router.push({
                name: 'setting'
            })
            }
            console.log(this.$store)
            console.log(this.name)
            
        }
    },
}
</script>

<style lang="scss">
.container{
    height: 100vh;
    display: flex;
    justify-content: center;

    .container-box{
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1{
            text-align: center;
        }
        input{
            height: 35px;
            margin: 20px;
            border: 1px solid gray;
            border-radius: 5px;
            padding: 5px;
        }
        .btn{
            display: flex;
            justify-content: center;
        }
        a{
            color: white;
            text-decoration: none;
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
}   }
</style>