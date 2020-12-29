<template>
  <div class="exContent">
    <div class="ex-box" v-for="(item, index) in list" :key="index">
      <h4>{{ item.name }}</h4>
      <span>{{ item.exchangeDate | globalFormatTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "exchange",
  data() {
    return {
      list: []
      // id: this.$store.state.user.list._id
    };
  },
  methods: {
    async getExchange() {
      const data = await this.yGet("shop/exchangedRecord", {
        params: { id: this.$store.state.user.list._id }
      });
      if (data) {
        console.log("data", data);
        this.list = data;
      }
    }
  },
  created() {
    this.getExchange();
    console.log(this.id);
    console.log(this.list);
  }
};
</script>

<style scope lang="scss">
.exContent {
  height: 500px;
  width: 100%;
  .ex-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid #3c3c3c;
    margin-bottom: 10px;
    h4 {
      width: 650px;
      font-weight: 400;
      color: #3c3c3c;
    }
  }
}
</style>
