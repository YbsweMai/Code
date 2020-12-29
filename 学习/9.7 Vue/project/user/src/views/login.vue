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
              placeholder="请输入您的用户名"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="请输入您的密码"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="jumpRegist">
          <span class="sp1">还没有账号?</span>
          <span class="sp2" @click="jumpRegist">新用户注册</span>
        </div>
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    jumpRegist() {
      this.$router.push({
        name: "regist"
      });
    },
    async login() {
      const data = await this.yPost("/user/login", this.ruleForm);
      console.log('login',data)
      if (data) {
        console.log("登陆成功", data.user);
        this.addUser(JSON.parse(JSON.stringify(data.user)));
        // this.addUser(data.user)
        this.$router.push({
          name: "user"
        });
        this.$message({
          message: "登陆成功",
          type: "success"
        });
      }
    }
  }
  // created() {

  // },
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
