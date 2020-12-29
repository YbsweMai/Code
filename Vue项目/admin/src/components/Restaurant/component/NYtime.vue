<template>
  <el-card class="box-card">
    纽约时间:{{ time }}
  </el-card>
</template>

<script>
import moment from 'moment-timezone';
/* moment默认中文 */
moment.locale('zh-cn');

export default {
   data (){
      return {
         time: moment().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss dddd')
      };
   },
   mounted (){
      this.timer = setInterval(()=>{
         this.time = moment().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss dddd');
      },1000);
   },
   destroyed (){
      if(this.timer){

         clearInterval(this.timer);
      }
   }
};
</script>

<style>
    .box-card{
        margin-top :20px;
        margin-bottom :20px;
        text-align : center;
    }
</style>