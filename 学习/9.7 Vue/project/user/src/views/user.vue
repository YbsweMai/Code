<template>
  <div class="container">
    <div class="container-left">
      <!-- <img src="../assets/auth.png" alt=""> -->
      <img :src="user.avatar" alt="" />
      <h3>{{ user.nickname }}</h3>
      <!-- <h2>个人中心</h2> -->
      <h2
        @click="change('usercenter')"
        :style="{
          backgroundColor: click === 'usercenter' ? 'rgba(105,100,209,.5)' : ''
        }"
      >
        个人中心
      </h2>
      <h2
        @click="change('mall')"
        :style="{
          backgroundColor: click === 'mall' ? 'rgba(105,100,209,.5)' : ''
        }"
      >
        积分商城
      </h2>
      <h2 @click="dialogVisible = true">退出</h2>
    </div>

    <div class="container-right">
      <router-view></router-view>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>真的要退出吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="quit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "user",
  data() {
    return {
      click: this.$route.name,
      dialogVisible: false
    };
  },
  computed: {
    /* 获取vuex里个人信息 */
    ...mapState({
      user: state => state.user.list
    })
    // user(){
    //     return this.$store.state.user.list
    // },
  },
  methods: {
    change(name) {
      this.click = name;
      this.$router.push({
        name: name
      });
    },
    /* 退出并清除注册信息 */
    quit() {
      localStorage.removeItem("user"); // 清空登陆信息
      this.$router.replace({
        name: "login"
      });
    }
  },
  created() {
    console.log("created", this.$store.state.user.list);
  }
};
</script>

<style scope lang="scss">
.container {
  display: flex;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  .container-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 260px;
    text-align: center;
    background-color: #141c3b;
    color: white;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    h3 {
      width: 100%;
      margin: 15px 0 30px 0;
    }
    h2 {
      width: 100%;
      height: 66px;
      line-height: 66px;
      cursor: pointer;
      // margin: 15px 0;
    }
    h2:hover {
      background-color: rgba(105, 100, 209, 0.5);
    }
  }

  .container-right {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
