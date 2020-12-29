<template>
  <div class="mall-container">
    <div class="mall-header">
      <h2>商城</h2>
    </div>
    <div class="bcg">
      <h3>当前积分</h3>
      <h2>{{ user.integration }}</h2>
    </div>
    <div class="shop">
      <h4>商品列表</h4>
      <div class="shop-container">
        <div class="shop-box" v-for="(item, index) in list" :key="index">
          <img :src="item.image" alt="" />
          <span class="shopName">{{ item.name }}</span>
          <div class="point">
            <div class="point-left">
              <img src="../../assets/img5.png" alt="" />
              <span>{{ item.price }}积分</span>
            </div>
            <div class="point-right">
              <button @click="show(item)">兑换</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>真的要兑换吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="exchange">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "mall",
  data() {
    return {
      list: [],
      dialogVisible: false,
      Item: ""
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.list
    })
  },
  methods: {
    ...mapActions(["updatePoint"]),
    /* 兑换按钮写在for循环外面 然后传入循环item 再赋值给Item 最后再兑换接口取到id */
    show(item) {
      this.dialogVisible = true;
      this.Item = item;
    },
    /* 获取商品数据 */
    async getList() {
      const data = await this.yGet("/shop/shopList");
      if (data) {
        console.log("data===>", data);
        this.list = data;
      }
    },

    /* 兑换商品 */
    async exchange() {
      const data = await this.yPut("/shop/exchange", { id: this.Item._id });

      if (data) {
        console.log("exchange", data);
        // this.exchangeRecord(this.Item)
        this.dialogVisible = false;
        this.getUserInfo();
        this.$message({
          message: "兑换成功",
          type: "success"
        });
      }

      // console.log(this.user.integration)
    },
    /* 重新获取个人信息 */
    async getUserInfo() {
      let userInfo = JSON.parse(localStorage.getItem("user"));
      console.log("user", userInfo._id);

      /* 获取最新后台个人信息 */
      const data = await this.yGet("/user/userinfo", {
        params: { id: userInfo._id }
      });
      if (data) {
        console.log("data", data);
        this.updatePoint(data);
      }
    }
  },
  created() {
    this.getList();

    this.getUserInfo();
  }
};
</script>

<style scope lang="scss">
.mall-container {
  display: flex;
  flex-direction: column;
  // height: 100%;
  box-sizing: border-box;
  .mall-header {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 1px 2px 10px rgb(168, 168, 168);
    margin-left: 10px;
    h2 {
      margin-left: 20px;
    }
  }
  .bcg {
    width: 1100px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 26px;
    margin: 30px auto;
    background: url("../../assets/jifen-background.png");
    // background-repeat: norepeat;
  }
  .shop {
    width: 1100px;
    margin: 0 auto;
    margin-bottom: 20px;

    .shop-container {
      width: 100%;
      height: 385px;
      overflow: auto;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .shop-box {
        display: flex;
        flex-direction: column;
        width: 200px;
        padding: 15px;
        border: 1px solid #eeeeee;
        margin-bottom: 20px;
        .shopName {
          margin-top: 10px;
        }
        span {
          height: 22px;
          overflow: hidden;
        }
        .point {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }
        img {
          width: 200px;
          height: 200px;
        }
        .point-left {
          display: flex;
          align-items: center;
          font-size: 14px;
          span {
            color: blueviolet;
          }
        }
        .point-left img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        .point-right button {
          width: 60px;
          font-weight: 500;
          color: white;
          background-color: blueviolet;
          border: none;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
