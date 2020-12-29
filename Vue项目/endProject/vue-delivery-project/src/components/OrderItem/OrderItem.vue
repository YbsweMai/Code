<template>
  <div

    ref="orderBox"
    :class="['order-item-box', changeStyle ? 'order-item-box-expand' : '']"
  >
    <div class="order-title">
      <div
        class="titleText order-item-name"
      >
        {{ item.restaurant.name['zh-CN'] }}
      </div>
      <div
        class="containerRowCenter subTitleText"
        style="width : auto;"
      >
        {{ item.createdAt | globalFormatTime }}
      </div>
    </div>
    <div class="order-items">
      <div
        v-for="orderItem in orderItems"
        :key="orderItem[0]._id"
      >
        <div
          class="containerBetween vertical cart-item"
        >
          <div class="cart-item-name">
            <!-- 香菇肉末米线 不辣 -->
            {{ orderItem[0].name[`${lang}`] }}
          </div>
          <div class="containerRow">
            <div
              v-if="changeStyle === true"
              class="cart-item-price"
            >
              ${{ orderItem[0].price / 100 * orderItem.length }}
            </div>
            <div class="cart-item-count-no-editable">
              {{ orderItem.length }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->

    <div class="order-footer">
      <div class="containerRowCenter">
        <img
          v-if="changeStyle === true"
          src="../../assets/logo.png"
          alt=""
        >
      </div>
      <div class="containerBetween order-total">
        <div>总价:</div>

        <div>${{ totalPrice.toFixed(2) }}</div>
      </div>
      <div class="containerRowCenter more-btn">
        <button
          class="normal-btn"
          @click="change"
        >
          更多
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import './OrderItem.css';
import '../../style/style.scss';
import { mapState } from 'vuex';

import _ from 'lodash';

export default {
   name:'OrderItem',
   props:{
      // eslint-disable-next-line vue/require-default-prop
      item:{
         type:Object,
         require:true
      },
      // eslint-disable-next-line vue/require-default-prop
      index:{
         type:Number,
         require:true
      },
      // eslint-disable-next-line vue/require-default-prop
      finalarr:{
         type:Object && Array,
         require:true
      }
   },
   data (){
      return{
         changeStyle:false
      };
   },
   computed:{
      ...mapState({
         lang:state=>state.language.lang,
      }),
      orderItems (){
         /* 让cart里每个相同的菜品按照id合并到一个数组里 */
         const orderItems = _(this.$props.item.cart)
            .groupBy(i => i._id)
            .value();

         return orderItems;
      },
      
      totalPrice (){
         /* 初始化total */
         let total = 0;

         //  _.forEach(this.orderItems,(i)=>{
         //     console.log('i=====>',i);
         //     for(let j = 0; j < i.length; j++){
         //        total += i[j].price / 100;
         //        console.log('j=====>',j);
         //     }
         //     // this.$set(this.orderItems, 'total', total);
         //     return total;

         //  });
         //  console.log(this.$props.item.cart);

         /* 循环每个cart里的price */
         _.forEach(this.$props.item.cart,(item)=>{
            total += item.price / 100;
         });

         //  console.log('total=======>',total);

         return total;

      }
   },
   created (){
      //   console.log('1312321313',this.item);
   },
   mounted (){
      // console.log('mounted',this.orderItems);
   },
   methods:{
      //   change (item,finalarr){
      //      console.log(' kaishi ', item.show);
      //      _.forEach(finalarr,((i)=>{
      //         this.$set(i, 'show', false);
      //         console.log('i',i);
      //         this.changeStyle = false;
      //      }));

      //      this.$set(item, 'show', true);
      //      console.log(' jieshu ', item.show);
      //   }
      change (e){
         /* 取消事件默认行为 */
         e.preventDefault();
         this.changeStyle = true;
         //  this.changeStyle = !this.changeStyle;
         /* 添加handleOut鼠标事件 */
         document.addEventListener('click', this.handleOut, true);
         console.log('change',this.changeStyle);

      },
      /* 鼠标移出操作元素外改变changestyle状态 */
      handleOut (e){
         const ref = this.$refs.orderBox;
         if (ref && !ref.contains(e.target)) {
            this.changeStyle = false;
            document.removeEventListener('click',this.handleOut,true);
         }
      },

   }
};
</script>