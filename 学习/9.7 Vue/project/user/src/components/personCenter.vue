<template>
  <div class="center">
    <img :src="user.avatar" alt="" />
    <div class="userInfo">
      <div class="info">
        <span class="info1">姓名:</span>
        <span class="info2">{{ user.username }}</span>
      </div>
      <div class="info">
        <span class="info1">昵称:</span>
        <span class="info2">{{ user.nickname }}</span>
      </div>
      <div class="info">
        <span class="info1">密码:</span>
        <span class="info2"
          >******
          <span @click="dialogFormVisible = true" class="change">修改</span>
        </span>

        <el-dialog
          title="修改密码"
          :visible.sync="dialogFormVisible"
          @close="closeModel"
        >
          <el-form :model="ruleForm" ref="modelForm" :rules="rules">
            <el-form-item label="旧密码" prop="oldPassword">
              <el-input
                v-model="ruleForm.oldPassword"
                autocomplete="off"
                type="password"
              ></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
              <el-input
                v-model="ruleForm.newPassword"
                autocomplete="off"
                type="password"
              ></el-input>
            </el-form-item>
            <el-form-item label="再次输入新密码" prop="checkPass">
              <el-input
                v-model="ruleForm.checkPass"
                autocomplete="off"
                type="password"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="changePassword">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </el-dialog>
      </div>
    </div>
    <div class="userInfo">
      <div class="info">
        <span class="info1">学校:</span>
        <span class="info2">{{ user.school }}</span>
      </div>
      <div class="info">
        <span class="info1">性别:</span>
        <span v-if="user.gender == 1">男</span>
        <span v-if="user.gender == 0">女</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "usercenter",
  data() {
    /* 修改密码验证规则 */
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        checkPass: ""
      },
      /* 修改密码验证规则 */
      rules: {
        oldPassword: [
          { required: true, message: "请输入旧密码", trigger: "blur" }
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" }
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  computed: {
    /* 获取vuex里个人信息 */
    ...mapState({
      user: state => state.user.list
    })
  },
  created() {
    console.log("created", this.$store.state.user.list);
    console.log(localStorage.getItem("user"));
  },
  methods: {
    /* 修改密码 */
    async changePassword() {
      const data = await this.yPut("/user/changePassword", {
        oldPassword: this.ruleForm.oldPassword,
        newPassword: this.ruleForm.newPassword
      });
      if (data) {
        console.log("data", data);
        this.$message({
          message: "修改成功",
          type: "success"
        });
        this.dialogFormVisible = false;
        this.ruleForm = {};
        this.$refs.modelForm.clearValidate();
      }
    },
    /* 检测关闭弹窗 */
    closeModel() {
      this.proObj = {};
      console.log("关闭了弹窗");
      this.$refs.modelForm.clearValidate(); // 清除验证规则
    }
  }
};
</script>

<style scope lang="scss">
.center {
  display: flex;
  box-sizing: border-box;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .userInfo {
    // display: flex;
    flex-wrap: wrap;
    .info {
      // width: 300px;
      display: flex;
      align-items: center;
      height: 100px;
      font-size: 16px;
      .info1 {
        width: 100px;
        text-align: center;
      }
      .info2 {
        width: 200px;
        .change {
          color: blue;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
