<template>
    <div class="login-container">
        <div class="login-main">
            <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">   <!-- prop对应你所绑定的属性 -->
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button  @click="login" type="primary" class="login-btn">登陆</el-button>
                </el-form-item>
            </el-form>           
        </div>
        
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            loginForm:{
                username:'',
                password:''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' }
                ],            
            }
        }
    },
    methods: {
        // 校验密码 成功后调用login
        checkData(){
            this.$refs.loginForm.validate((valid) => {
                console.log('valid',valid)
                if (valid) {
                    this.login()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        async login (){
            // if(!(this.loginForm.username && this.loginForm.password)){
            //     return
            // }
            
            const data = await this.yPost('/user/login',this.loginForm)
            if(data){
                console.log('登陆成功')
                const userid = data.user._id
                localStorage.setItem('userid',userid)
                this.$router.push({
                    name:'management'
                })
            }
        }
    },
}
</script>

<style lang="scss">
    .login-main{
        width: 400px;
        // height: 200px;
        border: 1px solid #f3f3f3;
        margin: 100px auto;
        padding: 70px;
        box-shadow: 0 3px 10px #eeeeee;
        .login-btn{
            width: 300px;
        }
    }
</style>