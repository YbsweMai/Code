<template>
  <div>
    <div class="containerBetween">
      <div class="rest-tab">
        {{ $t("restaurant.allRestaurant") }}
        <div class="rectangle"></div>
      </div>
      <div class="all-rest-box">
        <div>
          <RestaurantItem
            v-for=" item in splitList.leftColumn"
            :key="item._id"
            :item="item"
          ></RestaurantItem>
        </div>

        <div class="rest-gap">
          <RestaurantItem
            v-for=" item in splitList.rightColumn"
            :key="item._id"
            :item="item"
          ></RestaurantItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';
import { mapState , mapActions } from 'vuex';
import { checkRestaurantClosed } from '../../common/utils';

import _ from 'lodash';

import './restaurant.scss';

export default {
   name:'Restaurant',
   components:{
      RestaurantItem
   },
   computed :{
      ...mapState({
         restList:state=>state.restList.restList
      }),

      /* 重构restList 按需求排序*/
      newRestList (){
         const newRestList = _.orderBy(this.restList,[ 'featured','zscore' ], [ 'desc','desc' ] );

         /* 根据开关门排序 */
         const openedRestaurant = [];
         const closedRestaurant = [];
         _.forEach(newRestList,(item)=>{
            /* 验证餐馆是否关闭 */
            if(checkRestaurantClosed(item)){
               openedRestaurant.push(item);
            }else{
               closedRestaurant.push(item);
            }
         });
         return _.concat(openedRestaurant, closedRestaurant);
      },

      /* 将排序好的数组遍历后按照index奇偶分成两列新数组 */
      splitList (){
         const splitList = this.newRestList;
         const leftColumn = [];
         const rightColumn = [];
         _.forEach(splitList,(item,index)=>{
            if(index % 2 === 0){
               leftColumn.push(item);
            }else{
               rightColumn.push(item);
            }
         });
         return{
            leftColumn,
            rightColumn
         };
      }
   },
   created (){
      this.getRest();
   },

   updated (){

      // console.log('updated');
      // console.log('rest',this.splitList);
   },
   methods:{
      ...mapActions([ 'getRest' ])
   }
};
</script>

