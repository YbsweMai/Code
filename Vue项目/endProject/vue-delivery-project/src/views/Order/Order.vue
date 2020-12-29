<template>
  <div>
    <div class="containerBetween container-row">
      <div class="order-tab">
        <div class="order-tab-fixed">
          {{ $t("order.title") }}
          <div class="rectangle"></div>
        </div>
      </div>
      <div class="order-list">
        <div
          v-for="(item, index) in finalarr"
          :key="item.key"
        >
          <OrderItem
            :item="item"
            :index="index"
            :finalarr="finalarr"
          ></OrderItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

import OrderItem from '../../components/OrderItem/OrderItem';

/* 不存储vuex 直接发请求时调用 */
// import { order } from '@/request/order.js';

import { mapActions,mapState } from 'vuex';

import '../../style/style.scss';
import './Order.scss';

export default {
   name:'Order',
   components:{
      OrderItem
   },
   data (){
      return{
         //  changeStyle:false,

         orders:[]
      };
   },

   computed:{
      ...mapState({
         'orderList': state => state.order.orderList,
         lang:state=>state.language.lang,

      }),
      finalarr () {
         this.orderList.forEach(obj => {

            this.$set(obj, 'show', false);

            // return _.groupBy(obj.cart,'obj.cart._id');
            const result = _.groupBy(obj.cart,'_id');

            return result;
            // obj.cart = result;
         });
         return this.orderList;
      }

   },
   async created (){
      /* 写到Vue x */
      this.getOrder();
      /* 根据需要选择是否写到全局store */
      /* this.orders = await order();
      console.log('orders ===>',this.orders); */
   },
   methods: {
      ...mapActions([ 'getOrder' ]),

   },

};
</script>
