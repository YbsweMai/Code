<template>
        <div>
            <!-- <div v-for="(item, index) in list" :key="index" class="tasks">

                <el-checkbox v-model="checked"></el-checkbox>
                <div class="word">{{item}}</div>
            </div> -->
        </div>
</template>

<script>
export default {
    name:'all',
    data() {
      return {
        checked: false
      };
    }
}
</script>

<style lang="scss">
    .tasks{
        display: flex;
        padding: 10px;
        border-bottom: 1px solid gray;
        .el-checkbox{
            top: 2px;
        }
        .word{
            text-align: center;
            width: 100%;
        }
    }
</style>