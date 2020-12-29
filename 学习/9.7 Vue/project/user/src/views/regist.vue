<template>
  <div class="container">
    <div class="login-box">
      <div class="box-left">
        <img src="../assets/auth.png" alt="" />
      </div>
      <div class="box-right">
        <h2>欢迎登录</h2>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input
              v-model="ruleForm.username"
              placeholder="用户名:6位以上数字和字母组成"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="请输入您的密码"
            ></el-input>
          </el-form-item>

          <el-form-item prop="school">
            <el-input
              v-model="ruleForm.school"
              placeholder="请输入您的学校"
            ></el-input>
          </el-form-item>

          <el-form-item prop="nickname">
            <el-input
              v-model="ruleForm.nickname"
              placeholder="请输入您的昵称"
            ></el-input>
          </el-form-item>

          <el-form-item prop="age">
            <el-input
              v-model="ruleForm.age"
              placeholder="请输入您的年龄"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-select v-model="ruleForm.gender" placeholder="请选择性别">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="jumpRegist">
          <span class="sp1">已有账号?</span>
          <span @click="jumpLogin" class="sp2">去登录</span>
        </div>
        <button @click="jumpRegist">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        school: "",
        nickname: "",
        age: "",
        gender: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 6, message: "用户名称请输入6位以上字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          { min: 6, message: "用户密码请输入6位以上字符", trigger: "blur" }
        ],
        school: [
          { required: true, message: "请输入用户学校", trigger: "blur" }
        ],
        nickName: [
          { required: true, message: "请输入用户昵称", trigger: "blur" }
        ],
        age: [{ required: true, message: "请输入用户年龄", trigger: "blur" }],
        gender: [{ required: true, message: "请选择用户性别", trigger: "blur" }]
      }
    };
  },
  methods: {
    /* 注册 */
    async jumpRegist() {
      const data = await this.yPost("/user/regist", this.ruleForm);
      if (data) {
        console.log("注册成功");
        this.$router.push({
          name: "login"
        });
      }
    },
    jumpLogin() {
      this.$router.push({
        name: "login"
      });
    }
    // jumpRegist(){
    //     console.log(this.ruleForm)
    // }
  }
};
</script>

<style scope lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .login-box {
    width: 900px;
    height: 500px;
    display: flex;
    padding: 30px;
    border: 1px solid #3c3c3c;
    box-shadow: 0 2px 4px;
    .box-left {
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 370px;
        height: 425px;
      }
    }
    .box-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      h2 {
        margin-bottom: 12px;
      }
      .el-form-item__content {
        margin: 0 !important;
        .el-input {
          width: 280px;
        }
      }
      .jumpRegist {
        font-size: 14px;
        margin-bottom: 12px;
        .sp1 {
          margin-right: 5px;
          color: #c2c1c1;
        }
        .sp2 {
          color: #696ac2;
        }
        .sp2:hover {
          cursor: pointer;
        }
      }
      button {
        background-color: #696ac2;
        width: 280px;
        height: 40px;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
}
</style>
