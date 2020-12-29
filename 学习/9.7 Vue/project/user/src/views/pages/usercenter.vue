<template>
  <div class="right-container">
    <div class="header">
      <h2
        @click="change('PersonCenter')"
        :class="{ bor: activeName === 'PersonCenter' }"
      >
        个人信息
      </h2>
      <h2
        @click="change('ExchangeRecord')"
        :class="{ bor: activeName === 'ExchangeRecord' }"
      >
        兑换记录
      </h2>
    </div>
    <div class="content">
      <keep-alive>
        <component :is="activeName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ExchangeRecord from "../../components/ExchangeRecord";
import PersonCenter from "../../components/personCenter";

export default {
  name: "usercenter",
  data() {
    return {
      activeName: "PersonCenter"
    };
  },
  methods: {
    change(name) {
      this.activeName = name;
    }
  },
  components: { ExchangeRecord, PersonCenter }
};
</script>

<style scope lang="scss">
.right-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 1px 2px 10px rgb(168, 168, 168);
    margin-left: 10px;
    h2 {
      margin-left: 20px;
      height: 40px;
      box-sizing: border-box;
      cursor: pointer;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    margin: 10px;
    border: 1px solid #3c3c3c;
    display: flex;
    padding: 80px;
    box-sizing: border-box;
    overflow: auto;
    // padding-bottom: 10px;
  }
}

.bor {
  border-bottom: 5px solid rgba(105, 100, 209, 0.5);
}
</style>
